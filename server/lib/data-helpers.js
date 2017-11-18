"use strict";

const ObjectId = require('mongodb').ObjectId;

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insertOne(newTweet);
      callback(null, true);
    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: function(callback) {
      db.collection("tweets").find().sort({ created_at: 1 }).toArray(callback);
    },

    // Increment likes on a given tweet by 1
    incrementLikes: function(id, likes, callback) {
      debugger;
      db.collection("tweets").updateOne({ _id: ObjectId(id) }, { $set: { likes: likes }}).then(result => {
        debugger;
        callback();
      });
    }
  };
};
