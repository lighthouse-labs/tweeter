"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");
const userHelper = require("./util/user-helper");
const { generateRandomUser } = require('../lib/util/user-helper');

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function (newTweet, callback) {
       
        db.tweets.push(newTweet); 
        callback(null, true);
      
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function (callback) {
      console.log(db)
      simulateDelay(() => {
        const sortNewestFirst = (a, b) => a.created_at - b.created_at;
        callback(null, db.tweets.sort(sortNewestFirst));
      });
    },

    likeTweet: function (id, callback) {
      simulateDelay(() => {

        for (const tweet of db.tweets) {
          
          if (tweet.id == id) {
          
            if (tweet.liked === true) {
              tweet.liked = false;
              callback(null, tweet.liked)
            } else if (tweet.liked === false) {
              tweet.liked = true;
              callback(null, tweet.liked)
            }
          }
        }

      })
    },

}

};
