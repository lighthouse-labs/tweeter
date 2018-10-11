/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(()=> {
  const tweetData =  [
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
  
  function renderTweets(tweets) {
    
     tweets.forEach(function(tweet) {
      $("#all-tweets").prepend(createTweetElement(tweet)) 
     })
      
    // }
    // return appendedTweet
    
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
  }

  renderTweets(tweetData)


  // var $tweet = createTweetElement(tweetData);
  
  function createTweetElement(tweetData) {
    let $img = $(`<img class="avatar">`).attr("src", tweetData.user.avatars.regular);
    let $h3 = $(`<h3 class="full-name">`).text(tweetData.user.name);
    let $handle = $(`<span class="handle">`).text(tweetData.user.handle);
    let $header = $(`<header class="tweet-header">`).append($img, $h3, $handle);
  
    let $tweetContent = $(`<p class="tweet-content">`).text(tweetData.content.text);
    let $section = $(`<section class="middle">`).append($tweetContent);
  
    let $dateStamp = $(`<span class="date-stamp">`).text(tweetData.created_at);
    let $footer = $(`<footer class="tweet-footer">`).append($dateStamp);
  
    let $tweet = $(`<article class="tweet-container">`)
    .append($header)
    .append($section)
    .append($footer)
  
    return $tweet;
  }
  
  // console.log($tweet);
  // $("#all-tweets").append($tweet);
  
  
})