"use strict";

// Get the objectID type
var ObjectID = require('mongodb').ObjectID;



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

  getLikes: function(id, callback) {
    console.log("Made it to data helpers")
    db.collection("tweets").findOneAndUpdate({'_id': new ObjectID(id)}, {$inc: {likes: 1}}, true)
    .then((tweet, err) => {
      callback(err, tweet);
    })
  },






    // Get all tweets in `db`, sorted by newest first
  getTweets: function(callback) {
    const sortNewestFirst = (a, b) => b.created_at - a.created_at;
    db.collection("tweets").find().toArray(function(err, tweets) {
      if (err) {
      return callback(err);
    }
    callback(null, tweets.sort(sortNewestFirst));
    });
  }
  };
};
