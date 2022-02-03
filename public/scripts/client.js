/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Temporary hardcoding
const data = "http://localhost:8080/tweets";

$(() => {
  console.log("client.js");

  const validateTweet = function (input) {
    if (input.length === 0) {
      return "Tweet cannot be empty";
    }
    if (input.length > 140) {
      return "tweet too long";
    }
    if (input === null) {
      return "please try again";
    }
    return false;
  };

  // escape function
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };


  // Create a new tweet based on submitted information
  const createTweetElement = function (tweet) {
    const { user, content, created_at } = tweet;
    const { avatars, name, handle } = user;
    const { text } = content;
    const $tweet = `
      <article class="feed-article">
        <header class="feed-header">
          <div class="feed-header-user">
            <img src="${avatars}" alt="user avatar">
            <p class="bold">${name}</p>
          </div>
          <p class="feed-handle bold">${handle}</p>
        </header>
        <main class="feed-body">
          <p>${escape(text)}</p>
        </main>
        <footer class="feed-footer">
          <p>${timeago.format(created_at)}</p>
          <div class="feed-footer-icons">
            <i class="fas fa-flag feed-icon"></i>
            <i class="fas fa-retweet feed-icon"></i>
            <i class="fas fa-compass feed-icon"></i>
          </div>
        </footer>
      </article>`;
    return $tweet;
  };

  // Adds tweets to the container
  const renderTweets = function (tweets) {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').prepend($tweet);
    }
    return true;
  };

  // Serializes the data from form and adds to /tweets
  $('.form-tweet').on('submit', (event) => {
    event.preventDefault();
    const errorMessage = validateTweet($('#tweet-text').val());
    if (errorMessage) {
      alert(errorMessage);
      return;
    }
    const serializedData = $('#tweet-text').serialize();
    $.ajax('/tweets', {
      method: 'POST',
      data: serializedData
    }).then(() => {
      loadTweets();
    });
  });

  // Makes a request to /tweets and receives the array of tweets as JSON
  const loadTweets = () => {
    $.ajax('/tweets', {
      method: "GET",
    }).then((data) => {
      $('#tweets-container').empty();
      return renderTweets(data);
    })
  };
  loadTweets();

});
