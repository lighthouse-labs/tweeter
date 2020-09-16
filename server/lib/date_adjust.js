"use strict";

const fs = require("fs");

// Set a variable for the current epoch date
let dayBefore = Date.now();

// Decrement by one day (86400000 milliseconds), per tweet
// to ensure the tweets remain in order
function dayDecrement() {
  dayBefore -= 86400000;
  return dayBefore;
}

// Write recent dates to initial-tweets.json
// Specifically sync to not interfere with student functions
module.exports = () => {
  // Path to the initial tweets
  const tweetsPath = "./server/data-files/initial-tweets.json";
  // Read the tweets synchronously
  const tweetsRead = JSON.parse(fs.readFileSync(tweetsPath, { encoding: "utf8" }));
  // Iterate tweets and convert the previous time to now() - 1-3 days
  tweetsRead.map((tweet) => tweet.created_at = dayDecrement());
  // Re-write the tweets with the new date values.
  fs.writeFileSync(tweetsPath, JSON.stringify(tweetsRead, null, 2), { encoding: "utf8" });
};
