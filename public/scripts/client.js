/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  // Fake data taken from initial-tweets.json
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ]

  // Render tweet
  const renderTweets = function(tweets) {
    const $addTweet = 
    `${tweets.map(tweet => createTweetElement(tweet)).join("")}`;
    $('.all-tweets').append($addTweet);
  }

  // Create tweet
  createTweetElement = function(tweet) {
    let newTweet = 
    `<article>
      <header>
        <div class="tweet-user">
          <img src= ${tweet.user.avatars}> 
          <p>${tweet.user.name}</p>
        </div>
        <div>
          <p class="username">${tweet.user.handle}</p>
        </div>
      </header>
  
      <span>
        <p>${tweet.content.text}</p>
        <hr>
      </span>
  
      <footer>
        <div>
          <p>${tweet.created_at}</p>
        </div>
        <div>
          <!-- This is a flag -->
          <i class="fas fa-flag"></i>
          <!-- This is a retweet -->
          <i class="fas fa-retweet"></i>
          <!-- This is a heart -->
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    </article> `;
  
    return newTweet;
  }

  renderTweets(data);
  
});        