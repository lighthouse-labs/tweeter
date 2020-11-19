"use strict";

// Basic express setup:

const PORT          = 8080;
const express       = require("express");
const bodyParser    = require("body-parser");
const app           = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// The in-memory database of tweets
const db = require("./lib/in-memory-db");

const DataHelpers = require("./lib/data-helpers.js")(db);

const tweetsRoutes = require("./routes/tweets")(DataHelpers);

// Mount the tweets routes at the "/tweets" path prefix:
app.use("/tweets", tweetsRoutes);

// Post for tweet form
app.post('/tweets', (req, res) => {
  
});

app.listen(PORT, () => {
  console.log("Example app listening on port " + PORT);
});
