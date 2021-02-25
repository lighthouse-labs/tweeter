/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


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
  console.log('about to renderTweets');
  $('.tweets').empty();
  console.log('tweets just emptied, data length: ', data.length);
  for (const singleTweet of data) {
    let $tweet = createTweetElement(singleTweet);
    $('.tweets').prepend($tweet);
  }
};


const loadTweets = function () {
  console.log('entering loadTweets');
  $.ajax('/tweets', { method: 'GET' })
  .then(function (data) {
    console.log('then... data length here: ', data.length);
    renderTweets(data)
  })
};



$(document).ready(function() {


loadTweets();



$('#send-tweet').on('submit', function(event) {
  event.preventDefault();

  let serializedData = $(this).serialize();
    if (serializedData === "text=") {
      alert("No tweet is present");
    } else if (serializedData.length > 140) {
      alert("Your tweet is too long");
    } else {
    $.ajax({ data: serializedData, method: 'POST', url: '/tweets' })
    .then((result) => {console.log('ajax then'); 
    loadTweets();
    $('.text-area').val('')});
    }
});


});