"use strict";

const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = "mongodb://127.0.0.1:27017/tweeter";

console.log(`Connecting to MongoDB running at: ${MONGODB_URI}`);

let collection;

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.log('Could not connect! Unexpected error. Details below.');
    throw err;
  }

  collection = db.collection('tweets');

});


const dbMethods = {

  saveTweet: (data) => {
    db.tweets.push(data);
    return true;
  },

  getTweets: () => {
    collection.find({}).toArray(function(err, docs) {
      if (err) {
        console.log('Could not connect! Unexpected error. Details below.');
        throw err;
      }
      console.log(docs);
      return docs.sort(function(a, b) { return a.created_at - b.created_at });
    });
  }
}

module.exports = {

  connect: (onConnect) => {

    onConnect(dbMethods);

  }

}



  // console.log('Retrieving documents for the "tweets" collection...');
  // collection.find().toArray((err, results) => {
  //   console.log('results: ', results);

  //   console.log('Disconnecting from Mondo!');
  //   db.close();
  // });
