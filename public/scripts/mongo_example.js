"use strict"

const MongoClient = require('mongodb').MongoClient;
const MONGODB_URI = "mongodb://127.0.0.1:27017/tweeter";

console.log(`Connecting to MongoDB running at: ${MONGODB_URI}`);

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.log('Could not connect! Unexpected error. Details below.');
    throw err;
  }

  console.log('Connected to the database!');
  let collection = db.collection('tweets');

  console.log('Retrieving documents for the "tweets" collection...');
  collection.find().toArray((err, results) => {
    console.log('results: ', results);

    console.log('Disconnecting from Mondo!');
    db.close();
  });
});