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

  $('#tweets').on('click', '.tweet-actions i', function(e) {
    const $this = $(e.target);
    const tweetID = $this.closest('article').data('this-tweet');
    const actionType = $this.data('tweetr-action-type');
    const actionState = $this.data('tweetr-action-state');

    // const [action, newState] = actionState === 'on' ? ['increment', 'off'] : ['decrement', 'on'];
    $.ajax({
      url: `/tweets/${tweetID}/likes`,
      type: 'post',
      data: `tweet=${tweetID}`
    }).then(function(currentCount) {
      console.log($this); //REMEBER to remove
      $this.text(currentCount);
    });

    $(e.target).toggleClass('off');
  })

  // for pagination
  $(window).on('scroll', bindScroll);
});