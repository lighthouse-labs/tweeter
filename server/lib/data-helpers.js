"use strict";

module.exports = function makeDataHelpers(db) {
  return {

    saveTweet: function (newTweet, callback) {
      db.collection('tweets').insertOne(newTweet, callback)
    },

    getTweets: function (newTweet) {
      db.collection("tweets").find().toArray(newTweet);
    }
  }
};