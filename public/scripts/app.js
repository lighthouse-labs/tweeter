/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
"use strict";

// Document load IIFE
$(function(){
  // Initial load of tweets - it maintains the windows.scroll binding
  loadTweets();

  // Toggling the new tweet form with the compose button
  $('#nav-bar button').on('click', composeToggler);

  // character counting
  $('#tweet-text').on('keyup', charCounting);

  // New tweet submit event handler
  $('.new-tweet form').on('submit', newTweetHandler);

  // Liking Tweets
  $('#tweets').on('click', '.fa-heart', likesHandler);

  // Show registration form
  $('.register').on('click', showRegistration);

  // Show login form
  $('.login').on('click', showLogin);

  $('#modal').on('click', function(e) {
    if (this === e.target) {
      $(this).hide();
    }
  });

  // for pagination
  $(window).on('scroll', bindScroll);
});