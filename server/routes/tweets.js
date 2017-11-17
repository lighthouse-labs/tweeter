"use strict";
/*jshint esversion: 6 */

const userHelper    = require("../lib/util/user-helper")

const express       = require('express');
const tweetsRoutes  = express.Router();

module.exports = function(DataHelpers) {

  // Get Tweets
  tweetsRoutes.get("/", function(req, res) {
    DataHelpers.getTweets((err, tweets) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(tweets);
      }
    });
  });

  // Create a new tweet
  tweetsRoutes.post("/", function(req, res) {
    if (!req.body.text) {
      res.status(400).json({ error: 'invalid request: no data in POST body'});
      return;
    }

    const user = req.body.user ? req.body.user : userHelper.generateRandomUser();
    const tweet = {
      user: user,
      content: {
        text: req.body.text
      },
      created_at: Date.now(),
      liked : 0
    };

    DataHelpers.saveTweet(tweet, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).send();
      }
    });
  });



// get likes
  tweetsRoutes.post("/:id", function(req, res) {
    console.log("params is :", req.params.id)
    console.log("Made it to tweets.js")
    DataHelpers.getLikes(req.params.id, (err, tweet) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        console.log("err is :", err)
        console.log("Just before responding", tweet.value)
        res.json(tweet.value);
      }
    });
  });

  return tweetsRoutes;

};
