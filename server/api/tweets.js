"use strict";

const User    = require("../lib/user-helper")
const express = require('express');
const tweets  = express.Router(); //  per express docs, Router() can be thought of as a mini application for managing routes

module.exports = function(db) {

tweets.get("/", function(req, res) {

    db.getTweets((value) => {
      return res.json(value);
    });
  });

  tweets.post("/", function(req, res) {
    if (!req.body.text) {
      res.status(400);
      return res.send("{'error': 'invalid request'}\n");
    }
console.log(req.body);
    const user = req.body.user ? req.body.user : User.generateRandomUser();
    const tweet = {
      user: user,
      content: {
        text: req.body.text
      },
      created_at: Date.now()
    };
    db.saveTweet(tweet);
    return res.send();
  });

  return tweets;

}
