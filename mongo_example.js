"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  db.collection("tweets").find({}, (err, results) => {
    if(err) throw err;

    console.log("for each item yielded by the cursor:");
    results.toArray((err, resultsArray) => {
      if (err) throw err;
      console.log("results.toArray", resultsArray);
    });

    db.close();
});
});