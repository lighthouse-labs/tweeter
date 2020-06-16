/* eslint-disable no-undef */
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {
  $("article.tweet").hover(function() {
    let username = $(this).children('header').children()[1];
    $(username).toggle();
  }, function() {
    let username = $(this).children('header').children()[1];
    $(username).toggle();
  });
});

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

const createTweetElement = (tweetData) => {
  const $tweet = $(`<article class="tweet">Hello world</article>`);

  return $tweet;
}

