"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://127.0.0.1:27017/tweeter";

const dbMethods = {

  saveTweet: (data) => {

    MongoClient.connect(MONGODB_URI, (err, db) => {

      if (err) {
        console.log('Could not connect! Unexpected error. Details below.');
        throw err;
      }

      console.log('Connected to the database!');
      let collection = db.collection("tweets");

      console.log('Retrieving documents for the "tweets" collection...');

      collection.insertOne(data);

    });

  },

  getTweets: (cb) => {


    MongoClient.connect(MONGODB_URI, (err, db) => {

      if (err) {
        console.log('Could not connect! Unexpected error. Details below.');
        throw err;
      }

      console.log('Connected to the database!');
      let collection = db.collection("tweets");

      console.log('Retrieving documents for the "tweets" collection...');
      collection.find().toArray((err, results) => {
      let output = results.sort(function(a, b) { return a.created_at - b.created_at });

        console.log('results: ', results);
        db.close();
        console.log('Disconnecting from Mongo!');
        cb(output);
      });

    });
  }

}

module.exports = {
//onConnect is an arbitrary name for a callback function
  connect: (onConnect) => {

    onConnect(dbMethods);

  }

}