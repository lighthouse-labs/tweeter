/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function findDateDifference(daysAgo){
  let date1 = new Date(daysAgo);
  let date2 = new Date();
  let timeDiff = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

function escapeIt(str){
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function createTweetElement(tweetData){
  let diffDays = findDateDifference(tweetData.created_at);

  let article = '<article class="hover tweet">';
  let header = '<header class="hover header-tweet">'
              + '<img class="hover header-pic" src="' + escapeIt(tweetData.user.avatars.small) + '">'
              + '<h3 class="hover header-text">' + escapeIt(tweetData.user.name) + '</h3>'
              + '<p class="hover header-user">' + escapeIt(tweetData.user.handle) + '</p>'
              + '</header>';

  let footer = '<footer class="hover footer-tweet">'
              + '<p class="hover footer-tweet-text">' + escapeIt(tweetData.content.text) + '</p>'
              + '<p class="hover footer-status">Created: ' + diffDays + ' days ago</p>'
              + '<i class="fa fa-heart"></i>'
              + '<i class="fa fa-refresh"></i>'
              + '<i class="fa fa-flag"></i>'
              + '</footer>';

  let articleC = '</article>';
  let html = article + header + footer + articleC;
  return html;
}

function renderTweets(tweets) {
  let tweetDom = [];
  for (let tweet in tweets) {
    tweetDom.push(createTweetElement(tweets[tweet]));
  }
  return tweetDom.reverse();
}

$(document).ready(function(e){
  $.getJSON("/tweets", function(data){
    let $tweet = renderTweets(data);
    $('#tweets-container').append($tweet);
  });
});