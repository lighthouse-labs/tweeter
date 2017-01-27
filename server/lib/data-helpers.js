"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      db.collection('tweets').insert(newTweet);
      callback(null, true);
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback, pagenum) {
      const tweetLimit = 10;  //my edit used for infinite scrolling
      db.collection('tweets').find()
      .sort({$natural: -1}).skip(tweetLimit * (pagenum - 1))
      .limit(tweetLimit).toArray((err, tweets) => {
        callback(null, tweets);
      }); 
    }

  };
}
