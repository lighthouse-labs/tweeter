/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  createTweetElement = function(tweet) {
    const newTweet = 
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
  
  // Test / driver code (temporary). Eventually will get this from the server.
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png",
        "handle": "@SirIsaac"
      },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
    "created_at": 1461116232227
  }
  
  const $tweet = createTweetElement(tweetData);
  
  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('.all-tweets').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});        