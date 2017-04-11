"use strict";

module.exports = function makeDataHelpers(db) {
  return {

    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insertOne(newTweet);
      callback(false);
    },

    getTweets: function(callback) {
      db.collection("tweets").find().toArray(callback);
    }
  };
};
