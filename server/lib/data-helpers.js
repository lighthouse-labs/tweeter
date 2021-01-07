"use strict";

// Simulates the kind of delay we see with network or filesystem operations
const simulateDelay = require("./util/simulate-delay");
const { generateRandomUser } = require('./util/user-helper');


// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `db`
    saveTweet: async function (newTweet, callback) {

      const tweetId = await db.query(`
        INSERT INTO tweets(user_id, text, created_at)
        VALUES(1, $1, CURRENT_TIMESTAMP)
        RETURNING id, user_id
      `, [newTweet.content.text]);

      callback(null, true);

    },

    // Get all tweets in `db`, sorted by newest first
    getTweets: async function (callback) {
      
        const tweets = await db.query(`
            SELECT DISTINCT tweets.id, COUNT(likes.id) OVER (partition by tweets.id) AS likes, COUNT(retweets.id) OVER (partition by tweets.id) AS retweets,
            original.name, original.avatar, original.handle, tweets.text, tweets.created_at
            FROM tweets
            JOIN users original ON original.id = tweets.user_id
            JOIN likes ON likes.tweet_id = tweets.id
            JOIN retweets ON retweets.tweet_id = tweets.id
        `)
        .then((res) => {
          return res.rows;
        }).catch((err) => {
          console.log(err)
        })

        return callback(null, tweets);
    },

    getRetweets: async function (callback) {

      const retweets = await db.query(`
      SELECT DISTINCT tweets.id, retweeter.name AS retweeter_name, retweeter.handle AS retweeter_handle, tweets.id, original.name, original.avatar, original.handle, COUNT(retweets.*) OVER (partition by tweets.id) AS retweets, COUNT(likes.*) OVER (partition by tweets.id) AS likes, tweets.text, retweets.created_at
      FROM retweets
      JOIN users retweeter ON retweeter.id = retweets.retweeter_id
      JOIN tweets ON tweets.id = retweets.tweet_id
      JOIN users original ON original.id = tweets.user_id
      JOIN likes ON likes.tweet_id = tweets.id;
      `)
      .then((res) => {
        return res.rows;
      }).catch((err) => {
        console.log(err)
      })

      return callback(null, retweets);

    },

    getLikes: async function (callback) {

      const myLikes = await db.query(`
        SELECT tweet_id FROM likes WHERE user_id = 3;
      `)
      .then(((res) => {
        return res.rows
      }))
      .catch((err) => {
        console.log(err)
      })

      return callback(null, myLikes)
    },

    getUserRetweets: async function (callback) {

      const myRetweets = await db.query(`
        SELECT tweet_id FROM retweets WHERE retweeter_id = 3;
      `)
      .then(((res) => {
        return res.rows
      }))
      .catch((err) => {
        console.log(err)
      })



      return callback(null, myRetweets)
    },

    likeTweet: async function (tweet_id, callback) {
      const liked = await db.query(`
      INSERT INTO likes(tweet_id, user_id)
      VALUES(
        $1, 
        3
      )
      ON CONFLICT(tweet_id, user_id)
      DO NOTHING;
    `, [tweet_id]).then((result) => {
      return result
    })
    
    callback(null, liked)

    },

    retweet: async function (tweet_id, callback) {
      
      await db.query(`
        INSERT INTO retweets(tweet_id, retweeter_id, created_at)
        VALUES(
          $1, 
          3,
          CURRENT_TIMESTAMP
        )
        ON CONFLICT(tweet_id, retweeter_id)
        DO NOTHING
        RETURNING (SELECT tweets.created_at FROM tweets WHERE tweets.id = 2)
      `, [tweet_id]).then((result) => {
        return result
      })
      
      callback(null)
    }



  };

};
