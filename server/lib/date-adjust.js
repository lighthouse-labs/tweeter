"use strict";

const fs = require("fs");

// Write recent dates to initial-tweets.json
// Specifically sync to not interfere with student functions
module.exports = () => {
  // Path to the initial tweets
  const tweetsPath = "./server/data-files/initial-tweets.json";
  // Read the tweets synchronously
  const tweetsRead = JSON.parse(fs.readFileSync(tweetsPath, { encoding: "utf8" }));
  // Iterate tweets and convert the previous time to now()...
  // And subtract one day (1000ms * 60sec * 60min * 24hrs) * (2 - index)
  tweetsRead.map((tweet, index) => tweet.created_at = Date.now() - (1000 * 60 * 60 * 24 * (2 - index)));
  // Re-write the tweets with the new date values.
  fs.writeFileSync(tweetsPath, JSON.stringify(tweetsRead, null, 2), { encoding: "utf8" });
};
