'use strict';

const MongoClient = require('mongodb').MongoClient; //or can be written as: const {MongoClient} = require('mongodb');
const MONGODB_URI = 'mongodb://localhost:27017/tweeter';

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  //if makes past first condition --> we now have a connection to the 'test-tweets' db

  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  //any program logic (helper functions?) that needs to use the established db connection with be called in here

    //aka: this is the 'entry point' for a database-connected app

  function getTweets(callback) {
    db.collection('tweets').find().toArray((err, tweets) => {
      if (err) {
        return callback(err);
      }
      callback(null, tweets);
    });
  }

  // ^^ can also be replaced with elss redundant:
    // function getTweets(callback) {
    //   db.collection('tweeter').find().toArray(callback);
    // }


  getTweets((err, tweets) => {
    if (err) throw err;

    console.log("Logging each tweet:");
    for (let tweet of tweets) {
      console.log(tweet);
    }

    db.close();
  });


});