"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = (db) => {
  return {

    // Saves a tweet to `db`
    saveTweet: (newTweet, callback) => {
      db.collection('tweets').insertOne(newTweet);
      callback(null, true);
    },

    // Get all tweets in `db`
    getTweets: (callback) => {
      db.collection('tweets').find().toArray(callback);
    }

  };
}
