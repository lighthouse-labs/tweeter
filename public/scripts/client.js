/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Temporary hardcoding
const data = "http://localhost:8080/tweets";

$(() => {
  console.log("client.js");

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
          <p>${text}</p>
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
    const data = $('#tweet-text').serialize();
    $.ajax('/tweets', {
      method: 'POST',
      data: data
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
