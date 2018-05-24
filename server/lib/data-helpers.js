"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function (newTweet, callback) {
      simulateDelay(() => {
        db.collection("tweeter").insertOne(newTweet)
        callback(null, true);
      });
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function (callback) {
      simulateDelay(() => {
        db.collection("tweeter").find({}).sort({ created_at: 1 }).toArray(callback)
      })
    }
  }
}
