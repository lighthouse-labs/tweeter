"use strict";

const simulateAsync = require("./util/simulate-async");

module.exports = function(db) {
  return {
    saveTweet: function(newTweet, callback) {
      simulateAsync(() => {
        db.tweets.push(newTweet);
        callback(null, true);
      });
    },

    getTweets: function(callback) {
      simulateAsync(() => {
        const sortNewestFirst = (a, b) => a.created_at - b.created_at;
        callback(null, db.tweets.sort(sortNewestFirst));
      });
    }
  };
}
