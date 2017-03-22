/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function(){

  // Test / driver code (temporary). Eventually will get this from the server.
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

  function createTweetElement(tweetData) {
    var $tweet = $("<article>").addClass("tweet");
    var $header = $("<header>");
    $header.append($("<img>").addClass("profile").attr("src", tweetData.user.avatars.small));
    $header.append($("<h2>").text(tweetData.user.name));
    $header.append($("<span>").text(tweetData.user.handle));
    $tweet.append($header);

    $tweet.append($("<p>").addClass("tweettext").text(tweetData.content.text));
    var $footer = $("<footer>");
    $footer.append($("<span>").text(tweetData.created_at));
    $footer.append($("<div>").addClass("social")
            .append($("<i>").addClass("fa fa-flag").attr('aria-hidden', "true"))
            .append($("<i>").addClass("fa fa-retweet").attr('aria-hidden', "true"))
            .append($("<i>").addClass("fa fa-heart").attr('aria-hidden', "true"))
            )
    $tweet.append($footer);
    return $tweet;
  }

  function renderTweets(data){
      var $output;
    data.forEach(function(elm){
      var $tweet = createTweetElement(elm);
      $output = $('#tweets-container').append($tweet);
    });
    return $output;
  }

  renderTweets(data);



  /* Hover state */
  $("article.tweet").hover(function() {
    $(this).addClass('hover');

  }, function(){
    $(this).removeClass('hover');
  });



});

