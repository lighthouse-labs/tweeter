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

    updateTweetAction: function(tweetID, userID, callback) {
      db.collection('tweets').find({_id: ID(tweetID)}).toArray(function(err, actionArr) {
          if (actionArr[0]['likes']) {
            console.log('likes exists');
            if (actionArr[0]['likes'].includes(userID)) {
              console.log('likes exists and includes user',userID);
              db.collection('tweets').update(
              { _id: ID(tweetID) },
              { $pull: { likes: userID } }
              )
            } else {
              console.log('likes exists but doesnt include the user');
              db.collection('tweets').update(
              { _id: ID(tweetID) },
              { $push: { likes: userID } }
              )
            }
          } else {
            console.log('likes does not exist so creating it');
            db.collection('tweets').update(
              { _id: ID(tweetID) },
              { $set : {likes: [userID] } }
              )
          }
          db.collection('tweets').find({_id: ID(tweetID)}).toArray(callback);
        });
      // 
    }

  };
}
