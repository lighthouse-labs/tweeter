"use strict";

const {MongoClient} = require("mongodb");
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if(err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  console.log( `Connected to mongodb: ${MONGODB_URI}`);

  //entry point for anything that needs the connection to
  //go in here.
  // and at the end connection is closed
    function getTweets(callback) {
    db.collection("tweets").find().toArray(callback);
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