"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");
const { generateRandomUser } = require('./util/user-helper');

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function (newTweet, callback) {

      db.tweets.push(newTweet);
      console.log(db);
      callback(null, true);

    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function (callback) {

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

              callback(null, tweet.liked);
            } else if (tweet.liked === false) {

              tweet.liked = true;
              callback(null, tweet.liked);
            }
          }
        }

      });
    },

    retweet: function (id, callback) {

      //increases retweet count by +1 for all tweets in DB with original matching the id
      let tweetArray = [];
      let retweet;
      let retweetCount;
      let original;

      for (let item of db.tweets) {
        if (item.id === id) {
          original = item.original;
          
        }
      }

      for (let item of db.tweets) {
        if (item.id === original) {
          item.retweets++;
          retweetCount = item.retweets;
          retweet = {
            user: item.user,
            content: item.content,
            id: Math.floor(Math.random() * 100000).toString(),
            original: item.original,
            retweets: 0,
            retweeter: generateRandomUser(),
            created_at: Date.now(),
            liked: item.liked
          }
        }
      }
      db.tweets.push(retweet);
      // tweetArray.push(retweet.id);

      
      for (let item of db.tweets) {
        if (item.original === original) {
          item.retweets = retweetCount;
          tweetArray.push(item.id);
        }
      
      }

      const returnOutput = {
        tweetArray,
        retweet,
        retweetCount
      };
      
      callback(null, returnOutput)
    }



  };

};
