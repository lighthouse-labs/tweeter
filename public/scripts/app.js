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
  $('.new-tweet form textarea').on('keyup', charCounting);

  // New tweet submit event handler
  $('.new-tweet form').on('submit', newTweetHandler);

  // for pagination
  $(window).on('scroll', bindScroll);
})
