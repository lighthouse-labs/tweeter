"use strict";

const MongoClient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter";

MongoClient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.error(`Failed to connect: $)MONGODB_URI}`);
    throw err;
  }

// ==> We have a connection to the "test-tweets" db,
//     starting here.
console.log(`Connected to mongodb: ${MONGODB_URI}`);

// ==> In typical node-callback style, any program
//     logic that needs to use the connection needs
//     to be invoked from within here.
//
// Another way to say: this is an "entry point" for
// a database-connected application!

// ==> At the end, we close the connection:
db.close();
});
