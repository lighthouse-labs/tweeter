/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function () {
  var tweetData = {
    "user": {
      "name": "Newton",
      "avatars": {
        "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  };

  function createdTweetElement (tweetData) {
    var name = tweetData.user.name;
    var avatars = tweetData.user.avatars.small;
    var handle = tweetData.user.handle;
    var content = tweetData.content.text;
    var date = new Date(tweetData.created_at);
    var newDate = date.toLocaleString();

    var $tweet = ($("<article>").addClass("tweeter"))
      .append($("<header>")
        .append($("<img>").attr("src", avatars).addClass("profile"))
        .append($("<h3>").text(name))
        .append($("<span>").addClass("handler").text(handle))
      )
      .append($("<p>").addClass("tweetBody").text(content))
      .append($("<footer>").addClass("feets")
        .append($("<span>").text(newDate))
  );
    return $tweet;
  }

  function renderTweets(tweets) {
    tweets.forEach(function(tweet) {
      let $tweet = createdTweetElement(tweet);
      $('#tweet-container').prepend($tweet);
    });
  }

  $('#compose-button').click(function() {
    $('.new-tweet').slideToggle(2000, function() {
      $('#new-tweet-input').focus();
    });
  });

  $('#tweet-form').on('submit', function(event) {
    event.preventDefault();
    var input = $('#new-tweet-input').val();
    var alertMessage = $('#alert-message');
    if(input === '' || input === null || input === " ") {
      alertMessage.html('You post appears to be empty. Please enter a TWEET').fadeTo(5000, 0);
      setTimeout(function() { alertMessage.html('').fadeTo(0, 1); }, 5000);
    } else if (input.length > 140) {
      alertMessage.html('Your post is too long. Please limit your tweet to 140 characters').fadeTo(5000, 0);
      setTimeout(function() { alertMessage.html('').fadeTo(0, 1); }, 5000);
    } else {
      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: {
          text: input
        }

      }).done(function (tweet) {
        let newTweet = createdTweetElement(tweet);
        $('#tweet-container').prepend(newTweet);
      });
      $('#new-tweet-input').val('');
    }
  });
  function loadTweets () {
    $.ajax({
      url: '/tweets',
      method: 'GET'
    }).success(function(tweets) {
      renderTweets(tweets);
    });
  }

  loadTweets();






}); //end of $ready