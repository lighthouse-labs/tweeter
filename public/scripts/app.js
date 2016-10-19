/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(function() {
  console.log('app.js has loaded');

 var data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
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
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
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
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

  function createTweetElement(tObj) {
    var time = Math.floor((Date.now() - tObj.created_at)/8.64e+7);
    console.log(Date.now());
    var newTweet = $("<article>").addClass("tweet");

    newTweet.append("<header>");
    newTweet.append(`<main>${tObj.content.text}`);
    newTweet.append("<footer>");

    newTweet.children("header").append(`<img src=${tObj.user.avatars.regular} />`);
    newTweet.children("header").append(`<span class="name">${tObj.user.name}`);
    newTweet.children("header").append(`<span class="handle">${tObj.user.handle}`);

    newTweet.children("footer").append(`<p>${time} days ago...`);
    newTweet.children("footer").append("<i class='fa fa-heart'>");
    newTweet.children("footer").append("<i class='fa fa-retweet'>");
    newTweet.children("footer").append("<i class='fa fa-flag'>");

    return newTweet;
  }
  function renderTweet(arr) {
    for(var i in arr) {
      console.log(arr[i].user.name);
      var $tweet = createTweetElement(arr[i]);

      $('#feed').append($tweet);

    }
  }
  renderTweet(data);


//  console.log($tweet);
})
