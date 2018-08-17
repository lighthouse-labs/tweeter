"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      // db.tweets.push(newTweet);
      db.collection("tweets").insertOne(newTweet, (err, res) => {
        if (err) return callback(err);
        callback(null, true);
      });
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      const sortNewestFirst = (a, b) => b.created_at - a.created_at;
      // callback(null, db.tweets.sort(sortNewestFirst));
      db.collection("tweets").find().toArray((err, tweets) => {
        if (err) return callback(err);
        callback(null, tweets.sort(sortNewestFirst));
      });

    }

  };
}
