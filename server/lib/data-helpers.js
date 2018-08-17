"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      simulateDelay(() => {
        db.collection("tweets").insertOne(newTweet,
        callback);
      });
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      console.log("running db function after this..");
      db.collection("tweets").find().toArray((err, tweets) => {
        if (err) {cd 
          return callback(err);
        }
        callback(null, tweets);
      });
    }
  };
}
