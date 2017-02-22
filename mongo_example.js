"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: ${MONGODB_URI}`);
    throw err;
  }

  // ==> We have a connection to the "test-tweets" db,
  //     starting here.
  console.log(`Connected to mongodb: ${MONGODB_URI}`);

  db.collection("tweets").find().toArray((err, results) => {
    if (err) throw err;

    console.log("results array: ", results);

    // This is the end...
    db.close();
  });

  // db.collection("tweets").find({}, (err, results) => {
  //   // Lazy error handling:
  //   if (err) throw err;

  //   // ==> Fair warning: This is going to log a lot of stuff...
  //   // console.log("find result: ", result);
  //   // results.each((err, item) => console.log("  ", item));
  //   // console.log("type of find result: ", typeof result);
  // // ==> In typical node-callback style, any program
  // //     logic that needs to use the connection needs
  // //     to be invoked from within here.
  // //
  // // Another way to say: this is an "entry point" for
  // // a database-connected application!
  // // ==> We could instead just slurp the items into an array:
  // results.toArray((err, resultsArray) => {
  //   if (err) throw err;

  //   console.log("results.toArray:", resultsArray);
  // });

  // // ==> At the end, we close the connection:
  // db.close();
  // });
});