"use strict";

const PORT = 8080;
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const MongoCLient = require("mongodb").MongoClient;
const MONGODB_URI = "mongodb://localhost:27017/tweeter"
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

MongoCLient.connect(MONGODB_URI, (err, db) => {
  if (err) {
    console.log(`Failed to connect: ${MONGODB_URI}`)
    throw err;
  }
  console.log(`Connected to mongodb: ${MONGODB_URI}`)
  const DataHelpers = require("./lib/data-helpers.js")(db);
  DataHelpers.getTweets(function (err, tweets) {
  });

  const tweetsRoutes = require("./routes/tweets")(DataHelpers);

  app.use("/tweets", tweetsRoutes);

  app.listen(PORT, () => {
    console.log("Example app listening on port " + PORT);
  })
});
