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
        SELECT tweets.id, tweets.text, tweets.created_at, COUNT(likes.*) AS likes, COUNT(retweets.*) AS retweets, users.name, users.handle, users.avatar
        FROM tweets
        LEFT JOIN likes ON likes.tweet_id = tweets.id
        LEFT JOIN retweets ON retweets.tweet_id = tweets.id
        JOIN users ON users.id = tweets.user_id
        GROUP BY tweets.id, users.name, users.handle, users.avatar
        ORDER BY tweets.created_at;
        `)
        .then((res) => {
          return res.rows;
        }).catch((err) => {
          console.log(err)
        })

      simulateDelay(() => {
        callback(null, tweets);
      });
    },

    likeTweet: async function (id, callback) {
      let alreadyLiked = await db.query(`
        SELECT COUNT(*) 
        FROM likes
        WHERE user_id = 3
        AND tweet_id = $1
      `, [id]);

      alreadyLiked = Number(alreadyLiked.rows[0].count)

      if (alreadyLiked === 0) {
       await db.query(`
        INSERT INTO likes (tweet_id, user_id) 
        VALUES($1, 3);
       `, [id])
       callback(null, true)
      } else {
        await db.query(`
          DELETE FROM likes
          WHERE tweet_id = $1
          AND user_id = 3;
        `, [id])
        callback(null, false)
      }
    },

    retweet: function (id, callback) {
      //increases retweet count by +1 for all tweets in DB with original matching the id
      let tweetArray = [];
      let retweet;
      let retweetCount;
      let original;

      for (let item of db.tweets) {
        if (item.id === id) {
          original = item.original;
          
        }
      }

      for (let item of db.tweets) {
        if (item.id === original) {
          item.retweets++;
          retweetCount = item.retweets;
          retweet = {
            user: item.user,
            content: item.content,
            id: Math.floor(Math.random() * 100000).toString(),
            original: item.original,
            retweets: 0,
            retweeter: generateRandomUser(),
            created_at: Date.now(),
            liked: item.liked
          }
        }
      }
      db.tweets.push(retweet);
      // tweetArray.push(retweet.id);

      
      for (let item of db.tweets) {
        if (item.original === original) {
          item.retweets = retweetCount;
          tweetArray.push(item.id);
        }
      
      }

      const returnOutput = {
        tweetArray,
        retweet,
        retweetCount
      };
      
      callback(null, returnOutput)
    }



  };

};
