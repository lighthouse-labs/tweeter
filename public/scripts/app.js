/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$(document).ready(function() {

  // let tweetData = {
  //   "user": {
  //     "name": "Newton",
  //     "avatars": {
  //       "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
  //       "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
  //       "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
  //     },
  //     "handle": "@SirIsaac"
  //   },
  //   "content": {
  //     "text": "If I have seen further it is by standing on the shoulders of giants"
  //   },
  //   "created_at": 1461116232227
  // }

  // let $tweet = createTweetElement(tweetData);

  // $('.display-tweet').append($tweet);



  //Convert unixtime stamp and find difference
  function dateDifference(postDate) {
    // get total seconds between the times
    var delta = Math.abs(Date.now() - postDate) / 1000;
    // calculate (and subtract) whole days
    var days = Math.floor(delta / 86400);
    delta -= days * 86400

    // calculate (and subtract) whole hours
    var hours = Math.floor(delta / 3600) % 24;
    delta -= hours * 3600;

    // calculate (and subtract) whole minutes
    var minutes = Math.floor(delta / 60) % 60;
    delta -= minutes * 60;

    // what's left is seconds
    var seconds = delta % 60;

    return days;
  }

 function timeDifference(date1, date2) {
      var difference = date1 - date2;

      var daysDifference = Math.floor(difference/1000/60/60/24);
      difference -= daysDifference*1000*60*60*24

      return daysDifference;
  }

  function getDaysSince(date1) {
    // Calculate the difference in milliseconds
    var difference_ms = date2_ms - date1;

    // Convert back to days and return
    return Math.round(difference_ms/one_day);
  }


  // Fake data taken from tweets.json
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


  function renderTweets(tweetArray) {
    // loops through tweets
    for (let key in tweetArray) {

      // calls createTweetElement for each tweet
      let currentTweet = createTweetElement(tweetArray[key]);

      // takes return value and appends it to the tweets container
      $('.display-tweet').append(currentTweet);

    }

  }


  function createTweetElement(tweetObj) {

    //containers
    let tweetHeader = $("<header>");
    let tweetContainer = $("<div>").addClass("tweet-content");
    let tweetFooter = $("<footer>")

    //elements to plug into header
    let tweetAvatar = $("<img>").addClass("avatar").attr("src", tweetObj["user"].avatars.small);
    let tweetUsername = $("<span>").addClass("username").append(tweetObj["user"].name);
    let tweetHandle = $("<span>").addClass("handle").append(tweetObj["user"].handle);

    //plug into header
    $(tweetHeader).append(tweetAvatar);
    $(tweetHeader).append(tweetUsername);
    $(tweetHeader).append(tweetHandle);


    //elements to plug into container
    let tweet = $("<span>").append(tweetObj["content"].text);

    //plug into container
     $(tweetContainer).append(tweet);

    //elements to plug into footer

    let tweetDate = $("<span>").addClass("post-date").append(dateDifference(tweetObj["created_at"]) + " days ago");
    console.log(tweetObj["created_at"]);
    let tweetButtons = $("<span>").addClass("buttons");
    let iconFlag = $("<i>").addClass("fa fa-flag");
    let iconRT = $("<i>").addClass("fa fa-retweet");
    let iconHeart = $("<i>").addClass("fa fa-heart");
    tweetButtons.append(iconFlag, iconRT, iconHeart);

    //plug into footer
    $(tweetFooter).append(tweetDate);
    $(tweetFooter).append(tweetButtons);


    //output
    let tweetArticle = $("<article>").addClass("tweet").append(tweetHeader);
    tweetArticle.append(tweetContainer);
    tweetArticle.append(tweetFooter);


    return tweetArticle;
  }

renderTweets(data);



});