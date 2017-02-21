/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
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
        "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
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
        "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function findDateDifference(daysAgo){
  let date1 = new Date(daysAgo);
  let date2 = new Date();
  let timeDiff = Math.abs(date2.getTime() - date1.getTime());
  return Math.ceil(timeDiff / (1000 * 3600 * 24));
}

function createTweetElement(tweetData){
  let diffDays = findDateDifference(tweetData.created_at);
  
  let article = '<article class="hover tweet">';
  let header = '<header class="hover header-tweet">'
              + '<img class="hover header-pic" src="' + tweetData.user.avatars.small + '">'
              + '<h3 class="hover header-text">' + tweetData.user.name + '</h3>'
              + '<p class="hover header-user">' + tweetData.user.handle + '</p>'
              + '</header>';

  let footer = '<footer class="hover footer-tweet">'
              + '<p class="hover footer-tweet-text">' + tweetData.content.text + '</p>'
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
  let $tweetDom = '';
  for (let tweet in tweets) {
    $tweetDom += createTweetElement(tweets[tweet]);
  }
  console.log(tweets);
  return $tweetDom;
}

$(document).ready(function(e){
  let $tweet = renderTweets(data);
  $('#tweets-container').append($tweet);
});

