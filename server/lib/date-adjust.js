"use strict";

// Require fs to write to initial-tweets.json
const fs = require("fs");
// Requiring a JSON file automatically parses it and returns the data.
const tweetsJSON = require('../data-files/initial-tweets.json');

// Write recent dates to initial-tweets.json
// Specifically sync to not interfere with student functions
module.exports = () => {
  // Iterate tweets and convert the previous time to now()...
  // Then subtract one day (1000ms * 60sec * 60min * 24hrs) * (tweets.length - index)
  // This keeps the newest tweets at the bottom, and allows for further tweets to be added.
  tweetsJSON.map((tweet, index) => tweet.created_at = Date.now() - (1000 * 60 * 60 * 24 * (tweetsJSON.length - index)));
  // Re-write the tweets with the new date values.
  fs.writeFileSync('server/data-files/initial-tweets.json', JSON.stringify(tweetsJSON, null, 2), { encoding: "utf8" });
};
