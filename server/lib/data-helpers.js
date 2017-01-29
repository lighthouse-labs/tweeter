"use strict";

// to be able to query MongoDB by ObjectId
const ID = new require('mongodb').ObjectID;
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
    },

    // saves a user to `users` collection
    saveUser: function(user) {
      db.collection('users').insert(user);
    },

    // checks the USERS db if property and value exists
    // takes value (val) to look up in property (prop)
    // pass the found user in a callback
    hasHandle: function(value, callback) {
      db.collection('users').find({'handle': `${value}`})
      .toArray(function(err, arr) {
        if (arr && (arr.length > 0)) {
          const existingMatch = arr.find(user => user.handle === value);
          callback(existingMatch);
        }
      });
    },

    // Updates tweet's likes: queries the db to validate
    // if user has liked the tweet before, this determines
    // whether to decrement or increment the likes array
    updateTweetAction: function(tweetID, userID, callback) {
      db.collection('tweets').find({_id: ID(tweetID)}).toArray(function(err, actionArr) {
        if (actionArr[0]['likes']) {
          if (actionArr[0]['likes'].includes(userID)) {
            db.collection('tweets').update(
            { _id: ID(tweetID) },
            { $pull: { likes: userID } }
            )
          } else {
            db.collection('tweets').update(
            { _id: ID(tweetID) },
            { $push: { likes: userID } }
            )
          }
        } else {
          db.collection('tweets').update(
            { _id: ID(tweetID) },
            { $set : {likes: [userID] } }
            )
        }
        db.collection('tweets').find({_id: ID(tweetID)}).toArray(callback);
      });
    }

  };
}
