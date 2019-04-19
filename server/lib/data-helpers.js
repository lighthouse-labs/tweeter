"use strict";
module.exports = function makeDataHelpers(db) {
  return {

    getTweets: function (callback) {
      db.collection("tweets").find().toArray((err, tweets) => {
        if (err) {
          return callback(err);
        }
        callback(null, tweets);
      });
    },

    saveTweet: function (newTweet, callback) {
      db.collection("tweets").insertOne(newTweet, callback)
    },
  }

};

