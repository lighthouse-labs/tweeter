/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Temporary hardcoding
const data = "http://localhost:8080/tweets";

$(() => {
  console.log("client.js");

  // Validate Tweet Input to Prevent Code Improper Messages
  const validateTweet = function (input) {
    if (input.trim().length === 0) {
      return "⚠︎ Your Goom cannot be empty ⚠︎";
    }
    if (input.length > 140) {
      return "⚠︎ Stay within 140 characters. Else, Mario. ⚠︎";
    }
    if (input === null) {
      return "⚠︎ Error. Please try again ⚠︎";
    }
    return false;
  };


  // Escape Function Against Cross-Site Script Attacks. Code directly from Compass
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  // Click on Nav Button = Focus Text Field
  $('.nav-button').on('click', function (event) {
    $('#tweet-text').focus()
  });

  // Enter key = Submit Tweet
  $('#tweet-text').on('keypress', function (event) {
    const keycode = parseInt(event.keyCode);
    if (keycode === 13) {
      $('#new-submit').click();
    }
  });


  // Generate New Tweet Input
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
          <i class="fas fa-ice-cream feed-icon"></i>
          </div>
        </footer>
      </article>`;
    return $tweet;
  };


  // Feeds Each Tweet to The Tweet Container
  const renderTweets = function (tweets) {
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#container').prepend($tweet);
    }
    return true;
  };


  // Serializes The Data from Form and adds to '/tweets'
  const submitTweets = function () {
    $('.form').on('submit', (event) => {
      event.preventDefault();
      const errorMessage = validateTweet($('#tweet-text').val());
      if (errorMessage) {
        $('#tweet-text').val("");
        // Alerts Jquery Animation When Error
        $('.tweet-fail').hide().slideDown("100"); // Reveals these for failed tweets
        $('.tweet-fail').removeClass("invisible");
        $('.alert-border').hide().slideDown("0");
        $('.alert-border').removeClass("invisible");
        $('.form-error').hide().delay("0").fadeIn().text(errorMessage);
        $('.tweet-success').addClass("invisible"); // Hides success message when failed tweets

        return;
      }
      // Alerts Jquery Animation When Success
      $('.tweet-fail').addClass("invisible"); // Hides failed messages when successful tweets
      $('.alert-border').addClass("invisible");
      $('.tweet-success').hide().slideDown("100"); // Reveals these for successful tweets
      $('.tweet-success').removeClass("invisible");
      $('.form-error').hide().delay("0").fadeIn().text("Goom success!"); // Displays success message

      const serializedData = $('#tweet-text').serialize();
      $('#tweet-text').val(""); // Empties input field: ^ must come AFTER seralizeData! ^

      // Updates Database
      $.ajax('/tweets', {
        method: 'POST',
        data: serializedData
      }).then(() => {
        // Auto-refreshes
        loadTweets();
      });
    });
  };
  submitTweets()


  // Fetches Database (receives the array of tweets as JSON)
  const loadTweets = () => {
    $.ajax('/tweets', {
      method: "GET",
    }).then((data) => {
      $('#container').empty();
      return renderTweets(data);
    })
  };
  loadTweets();

});
