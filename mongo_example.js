// "use strict";

// const MongoClient = require("mongodb").MongoClient;
// const MONGODB_URI = "mongodb://localhost:27017/tweeter";


// MongoClient.connect(MONGODB_URI, (err, db) => {
//   if (err) {
//     console.error(`Failed to connect: ${MONGODB_URI}`);
//     throw err;
//   }

//   // We have a connection to the "tweeter" db, starting here.
//   console.log(`Connected to mongodb: ${MONGODB_URI}`);

//   // Let's "get all the tweets". In Mongo-speak, we "find" them.
//   db.collection("tweeter").find().toArray((err, results) => {
//     if (err) throw err;

//     console.log("results array: ", results);

//     // This is the end...
//     db.close();
//   });

// });

"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  // We have a connection to the "tweeter" db, starting here.
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  // ==> Refactored and wrapped as new, tweet-specific function:

  function getTweets(callback) {
    db.collection("tweeter").find().toArray((err, tweets) => {
      if (err) {
        return callback(err);
      }
      callback(null, tweets);
    });
  }

  // ==> Later it can be invoked. Remember even if you pass
  //     `getTweets` to another scope, it still has closure over
  //     `db`, so it will still work. Yay!

  getTweets((err, tweets) => {
    if (err) throw err;

    console.log("Logging each tweet:");
    for (let tweet of tweets) {
      console.log(tweet);
    }

    db.close();
  });

});

