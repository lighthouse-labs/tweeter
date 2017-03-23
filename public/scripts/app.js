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
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
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
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

 function createdTweetElement (tweetData) {
  var name = tweetData.user.name;
  var avatars = tweetData.user.avatars.small;
  var handle = tweetData.user.handle;
  var content = tweetData.content.text;
  var date = tweetData.created_at;

  var $tweet = ($("<article>").addClass("tweeter"))
    .append($("<header>")
      .append($("<img>").attr("src", avatars).addClass("profile"))
      .append($("<h3>").text(name))
      .append($("<span>").addClass("handler").text(handle))
    )
    .append($("<p>").addClass("tweetBody").text(content))
    .append($("<footer>").addClass("feets")
      .append($("<span>").text(date))
  );
  return $tweet;
}

function renderTweets(tweets) {
  tweets.forEach(function(tweet) {
    let $tweet = createdTweetElement(tweet);
    $('#tweet-container').prepend($tweet);
  });
}

renderTweets(data);



// $.ajax({
//   method: 'GET',
//   url: '/tweets'
// }).done(function(tweets) {
//    renderTweets(tweets);
// });




$('#tweet-form').on('submit', function(event) {
  event.preventDefault();
  var newTweetsText = $('#new-tweet-input').val();
  $.ajax({
    url: '/tweets',
    method: 'POST',
    data: {
      text: newTweetsText
    }
  }).done(function (tweet) {
    let newTweet = createdTweetElement(tweet);
    $('#tweet-container').prepend(newTweet);
  });
  $('#new-tweet-input').val('');
});








}) //end of $ready