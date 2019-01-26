$(document).ready(function() {

const tweetData = {
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

const data = [
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

// hides alert bar
$('.alert').hide()
// hides compose new tweet bar
$('.new-tweet').hide();
// on clicking 'compose tweet' button toggle new tweet bar
$("button.header-button").click( function() {
  $('.new-tweet').slideToggle();
  $('textarea').select();
});

// on incorrect form submit - alert message is displayed
// on submitting new tweet form - resets alert, text area and counter
// posts new tweet to tweeter page
$('form').submit(function(e) {
  e.preventDefault();
  if ($('span.counter').text() < 0) {
    $('.alert').slideDown();
    $('textarea').val("");
    $('span.counter').text("140").css("color", "black");
  } else if ($('span.counter').text() > 139) {
    $('.alert').slideDown();
    $('textarea').val("");
    $('span.counter').text("140").css("color", "black");
  } else {
    $('.alert').slideUp();
    $('.alert').slideUp();
  var form = $(this);
    $.ajax({
      method: "POST",
      url: "/tweets",
      data: form.serialize(),
      success: function(responseFromServer) {
        $('textarea').val("");
        $('span.counter').text("140");
        console.log(responseFromServer);
        loadTweets();
      }
    })
  }
})

//gets all existing tweets and appends new tweet to tweeter page
function loadTweets() {
  var form = $(this);
  $.ajax({
    method: "GET",
    url: "/tweets",
    data: form.serialize(),
    success: function(responseFromServer) {
    console.log(responseFromServer);
    let newTweets = renderTweets(responseFromServer);
      $('.all-tweets').empty();
      $('.all-tweets').append(newTweets);
    }
  });
}


// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
function renderTweets(tweets) {
  let allTweets = [];
  for (let i = 0; i < tweets.length; i++) {
    allTweets.unshift(createTweetElement(tweets[i]));
  }
  return allTweets;
}

//creates each tweet in three sections
function createTweetElement (data) {
  const $article = $('<article>');
  $article.addClass('tweet');

  const $header = $('<header>');
  const $img = $('<img>');
  $img.addClass('tweet-logo');
  $img.prop('src', data.user.avatars.small);
  const $username = $('<div>');
  $username.addClass('tweet-username');
  $username.text(data.user.name);
  const $tweetHandle = $('<span>');
  $tweetHandle.addClass('tweet-handle');
  $tweetHandle.text(data.user.handle);
  $header.append($img);
  $header.append($username);
  $header.append($tweetHandle);

  const $body = $('<div>');
  $body.addClass('tweet-body');
  const $tweetMessage = $('<span>');
  $tweetMessage.addClass('tweet-message');
  $tweetMessage.text(data.content.text);
  $body.append($tweetMessage);

  const $footer = $('<footer>');
  const $timestamp = $('<span>');
  $timestamp.addClass('tweet-timestamp');
  $timestamp.text(data.created_at);
  const $emojiHeart = $('<span>');
  $emojiHeart.addClass("fas fa-heart");
  const $emojiFlag = $('<span>');
  $emojiFlag.addClass("fas fa-flag");
  const $emojiRetweet = $('<span>');
  $emojiRetweet.addClass("fas fa-retweet");
  $footer.append($timestamp);
  $footer.append($emojiHeart);
  $footer.append($emojiFlag);
  $footer.append($emojiRetweet);


  $article.append($header);
  $article.append($body);
  $article.append($footer);

  return $article;
  }
  loadTweets();
})