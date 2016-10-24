"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://127.0.0.1:27017/tweeter";

let collection;

const dbMethods = {

  saveTweet: (data) => {
    collection.insertOne(data);
  },

  getTweets: (cb) => {
    collection.find().toArray((err, results) => {
      let output = results.sort(function(a, b) { return a.created_at - b.created_at });
        cb(output);
    });
  }
}


module.exports = {
//onConnect is an arbitrary name for a callback function
  connect: (onConnect) => {

    MongoClient.connect(MONGODB_URI, (err, db) => {

      if (err) {
        console.log('Could not connect! Unexpected error. Details below.');
        throw err;
      }

      collection = db.collection("tweets");

      onConnect(dbMethods);

      //db close when program terminates
      // const disconnect = () => { db.close() }
      // process.on('SIGINT', disconnect); // on Ctrl-C
      // process.on('SIGTERM', disconnect);

    })
  }
}