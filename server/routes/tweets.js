"use strict";

const userHelper = require("../lib/util/user-helper");

const express = require('express');
const tweetsRoutes = express.Router();

module.exports = function (DataHelpers) {

  tweetsRoutes.get("/", function (req, res) {

    DataHelpers.getTweets((err, tweets) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {

        res.json(tweets);

      }
    });
  });

  tweetsRoutes.post("/", function (req, res) {
    if (!req.body.text) {
      res.status(400).json({ error: 'invalid request: no data in POST body' });
      return;
    }


    const user = req.body.user ? req.body.user : userHelper.generateRandomUser();
    const id = Math.floor(Math.random() * 1000000);

    const tweet = {
      user: user,
      content: {
        text: req.body.text
      },
      id: id,
      original: null,
      created_at: Date.now(),
      liked: false,
      retweets: 0,

    };



    DataHelpers.saveTweet(tweet, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).send(tweet);
      }
    });

  });

  tweetsRoutes.post("/:id/like", function (req, res) {

    DataHelpers.likeTweet(req.params.id, (err, liked) => {
      if (err) {

        res.status(500).json({ error: err.message });
      } else {

        res.status(201).send(liked);
      }
    });
  });


  return tweetsRoutes;

};
