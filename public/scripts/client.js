/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
// ]



const createTweetElement = function(data) {
  let $tweet = $(`<article class="tweet-container"><header>
  <div><img src=${data["user"]["avatars"]}> &nbsp;${data["user"]["name"]}</div>
  <div class="handle">${data["user"]["handle"]}</div></header>
  <p class="tweet-body">${data["content"]["text"]}</p>
  <footer><div class="tweet-date">${data["created_at"]}</div>
  <div class="action-icons">
  <i class="fa fa-flag"></i> &nbsp;
  <i class="fa fa-retweet"></i> &nbsp;
  <i class="fa fa-heart"></i>
  </div></footer>
  </article>`);
  return $tweet;
}

const renderTweets = function(data) {
  for (const singleTweet of data) {
    let $tweet = createTweetElement(singleTweet);
    $('.tweets').append($tweet);
  }
}


// renderTweets(data);


$('#send-tweet').on('submit', function(event) {
  event.preventDefault();
  let serializedData = $(this).serialize();
  $.ajax({ data: serializedData, method: 'POST', url: '/tweets' })
  .then(function (submittedTweet) {
    console.log(submittedTweet); // just a test
  })
});


const loadTweets = function () {
$.ajax('/tweets', { method: 'GET' })
.then(function (data) {
  renderTweets(data)
})

};

loadTweets();

});