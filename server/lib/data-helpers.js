"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    saveTweet: function(newTweet, callback) {
        db.collection("tweets").insertOne(newTweet);
        callback(null, true);
      },



    getTweets: function(callback) {
  db.collection("tweets").find().toArray((err, tweets) => {
    if (err) {
      return callback(err);
    }
    callback(null, tweets);
  });
  }

  };
}




    // getTweets: function(callback) {
    //   console.log(db);
    //   db.collection("tweets").find().toArray((err,tweets){
    //     console.log(docs);

    //       callback(null, docs);

    //   });
    // }


        // });
          // const sortNewestFirst = (a, b) => a.created_at - b.created_at;