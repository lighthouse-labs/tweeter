/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const renderTweets = (tweets) => {
  $('.tweets-container').empty(); // Initialized tweets-container
  tweets.sort((a, b) => b.created_at - a.created_at); // sort by created_at desc
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);
    $('.tweets-container').append($tweet);
  }
};



const loadTweets = () => {
  $.get('/tweets').done(function(data) {
    renderTweets(data);
  });
};


