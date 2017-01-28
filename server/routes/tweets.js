"use strict";

const userHelper    = require("../lib/util/user-helper");

const express       = require('express');
const tweetsRoutes  = express.Router();

const cookieSession = require("cookie-session");
tweetsRoutes.use(cookieSession({signed: false}));

module.exports = function(DataHelpers) {

  tweetsRoutes.post("/:tweet/likes", function(req, res) {
    const userID = req.userID || (`u-${userHelper.generateRandomString()}`);
    console.log(req.params.tweet);
    const tweetID = req.body.tweet;
    console.log(req.session.userID);
    if (!req.session.userID) {
      req.session.userID = userID;
    }
    
    DataHelpers.updateTweetAction(tweetID, 'u-1ae1ea', function(err, arr) {
      res.status(200).send(`${arr[0]['likes'].length}`);
    })
  })

  tweetsRoutes.get("/", function(req, res) {
    let pagenum = req.query.page; //my edit used for infinite scrolling
    DataHelpers.getTweets((err, tweets) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.json(tweets);
      }
    }, pagenum);
  });

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
      created_at: Date.now()
    };

    DataHelpers.saveTweet(tweet, (err) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        res.status(201).send(tweet); // my edit performance tweaking to avoid loading the whole db everytime a new tweet is created
      }
    });
  });

  return tweetsRoutes;

}
