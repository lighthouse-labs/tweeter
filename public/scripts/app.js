/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


function createTweetElement(tweet) {
  let $tweet = `
  <article class="tweet">
      <header class="tweet-header">
      <img class="tweet-logo" src="${tweet.user.avatars.small}">
      <div class="tweet-username">${tweet.user.name}</div>
      <div class="tweet-tag">${tweet.user.handle}</div>
      </header>
      <p class="tweet-text">${tweet.content.text}</p>
      <footer class="tweet-footer">
        <div class="tweet-icons">
          <i class="fa fa-flag" aria-hidden="true"></i>
          <i class="fa fa-retweet" aria-hidden="true"></i>
          <i class="fa fa-heart" aria-hidden="true"></i>
         </div>
        <p>${tweet.created_at}</p>
      </footer>
      </article>
  `;
  return $tweet;
}

// takes input from textarea and appends all data from createTweetElement function
function renderTweets(tweets) {
  for (tweet of tweets) {
    $('#tweets-container').append(createTweetElement(tweet));
  }
}

// when a tweet is submitted, fetch data from /tweets.
function loadTweets(arr) {
  $.ajax({
    url: '/tweets',
    method: 'GET',
    format: 'json',
    success: function (tweets) {
      renderTweets(tweets)
    }
  });
}

// on document load
$(document).ready(function() {
  loadTweets()
  // when a new tweet is submitted post the result to /tweets, but do not leave page
  $("form").on("submit", function(event) {
    event.preventDefault();
    console.log($(this).serialize());
    $.ajax({
      url: "/tweets",
      method: "POST",
      data: $(this).serialize(),
      // on success, pass in the loadTweets function and remove text from the textarea
      success: function () {
        loadTweets()
        $("#tweet-box").val('');
      }
    });
  });
});