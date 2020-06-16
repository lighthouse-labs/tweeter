/* eslint-disable no-undef */
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

  renderTweets(data);
  

  $("article.tweet").hover(function () {
    let username = $(this).children('header').children()[1];
    $(username).toggle();
  }, function () {
    let username = $(this).children('header').children()[1];
    $(username).toggle();
  });

});

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
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const createTweetElement = (tweetData) => {
  let date1 = new Date();
  let date2 = tweetData.created_at;
  let differenceInTime = date1.getTime() - date2;
  let differenceInDays = (differenceInTime / (1000 * 2600 * 24)).toFixed(0);
  const differenceInYears = Math.floor(differenceInDays / 365);
  let dateStr;
  if (differenceInDays > 365) {
    dateStr = differenceInYears + " years ago";
  } else {
    dateStr = differenceInDays + " days ago";
  }
  console.log("diff in days", differenceInDays);
  const $tweet = $(`<article class="tweet">
  <header>
    <div class="tweet-info-group">
      <img class="tweet-profile-picture" src="${tweetData.user.avatars}">
      <span>${tweetData.user.name}</span>
    </div>
    <div class="tweetinfo-group tweet-username">
      <span class="username">${tweetData.user.handle}</span>
    </div>
  </header>
  <section>
    <span>${tweetData.content.text}</span>
  </section>
  <footer>
    <div class="tweet-info-group">
      <span>${`${dateStr}`}</span>
    </div>
    <div class="tweetinfo-group">
      <span class="symbols">❤︎ ⚐ ♺</span>

  </footer>
</article>`);
  return $tweet;
};

const renderTweets = (tweets) => {
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('#tweet-container').append($tweet);
  }
};



