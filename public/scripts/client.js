/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {
  console.log('test');

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
        "handle": "@rd"
      },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }

  ];

  const renderTweets = function(tweets) {
    // loops through tweets
    for (const tweet of tweets) {
      // calls createTweetElement for each tweet
      const newTweet = createTweetElement(tweet);
      // takes return value and appends it to the tweets container
      $('#tweets-container').prepend(newTweet);
    }

  };

  const createTweetElement = function(tweet) {
    let username = tweet.user.name;
    let handle = tweet.user.handle;
    let content = tweet.content.text;

    let $tweet = $(`<article class="tweet-container">
    <header>
    <div class="username"><i class="fa-solid fa-user-astronaut fa-2xl">
      </i>${username}</div>
    <div class="userhandle">${handle}</div>
  </header>
  <p>
    ${content}
  </p>
  <footer>
    <div class="date-ago">10 days ago</div>
    <div class="tweet-icon">
      <i class="fa-solid fa-flag tweet-icon-single"></i>
      <i class="fa-solid fa-retweet tweet-icon-single"></i>
      <i class="fa-solid fa-heart tweet-icon-single"></i>
    </div>
  </footer>
  </article>`); /* Your code for creating the tweet element */
    // ...
    return $tweet;
  };

  renderTweets(data);

});

