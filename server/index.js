"use strict";


//Enables Connection to Mongodatabase located as in MONGODB_URI
const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

const MongoClient      = require("mongodb").MongoClient;
const MONGODB_URI     = "mongodb://localhost:27017/tweeter";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

MongoClient.connect(MONGODB_URI, (err, db) => {
   if (err) {
       throw err;
   }
   console.log (`successfully connected to DB: ${MONGODB_URI}`);
   const DataHelpers = require("./lib/data-helpers.js")(db);
   const tweetsRoutes = require("./routes/tweets")(DataHelpers);
   app.use("/tweets", tweetsRoutes);
});

app.listen(PORT, () => {
 console.log("Example app listening on port " + PORT);
});

