/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

  $(document).ready(function() {








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

function renderTweets(tweets) {



  for (tweet of tweets) {
    console.log(tweet);
    $('.container').append(createTweetElement(tweet));
  }
};

function createTweetElement(tweet) {

    const $article = $("<article class='tweets'></article>");

    const $header = $(`<header><div></div></header>`);

    const $footer = $(`<footer><div></div></footer>`);

    const icon = tweet['user']['avatars']['small'];
    const $icon = $(`<img class="icon" src=${icon}>`);

    const name = tweet['user']['name'];
    const $name = $(`<h3 id="name">${name}</h3>`);

    const handle = tweet['user']['handle'];
    const $handle = $(`<p id="handle">${handle}</p>`);

    const text = tweet['content']['text'];
    const $text = $(`<div><p class="text">${text}</p></div>`);

    const timestamp = tweet['created_at'];
    const $timestamp = $(`<f1 class="timestamp">${timestamp}</f1>`);

    const $flag = $(`<i class="fas fa-flag"></i>`);

    const $retweet = $(`<i class="fas fa-retweet"></i>`);

    const $heart = $(`<i class="fas fa-heart"></i>`);



    $('.container').append($article);

    $('.tweets').append($header);

    $('.tweets header div').append($icon);

    $('.tweets header div').append($name);

    $('.tweets header').append($handle);

    $('.tweets').append($text);

    $('.tweets').append($footer);

    $('.tweets footer').append($timestamp);

    $('.tweets footer div').append($flag);

    $('.tweets footer div').append($retweet);

    $('.tweets footer div').append($heart);

  }

  renderTweets(data);





// $('#tweets-container').append($tweet);



});