"use strict";
const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://127.0.0.1:27017/tweeter";
const initialTweets = require("./tweets");

let collections;

MongoClient.connect(MONGODB_URI, (err, db) => {
  collections = db.collection("tweets");
});

const dbMethods = {

  saveTweet: (data) => {
    collections.insert(data);
    return true;
  },

  getTweets: (callback) => {
    collections.find().toArray((err, results) => {
      if (err) {
        console.log(err);
      }
      callback(results.sort(function(a, b) {
        return a.created_at - b.created_at
      }));
    });
  };
};

module.exports = {
  connect: (onConnect) => {
    onConnect(dbMethods);
  }
}
