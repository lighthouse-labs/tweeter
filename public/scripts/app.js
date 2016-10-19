/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


function createTweetElement(td) {
  var $tweet = $("<article>").addClass("tweet");
  var $header = $("<header>");
  var $avatar = $("<img>").addClass("avatar").attr("src", td.user.avatars.regular);
  var $user = $("<h2>").addClass("user").text(td.user.name);
  var $handle = $("<span>").addClass("handle").text(td.user.handle);
  var $content = $("<div>").text(td.content.text);
  var days_elapsed = Math.floor((Date.now() - td.created_at)/(1000*60*60*24));
  var $footer = $("<footer>");
  var $createdAt = $("<span>").text(days_elapsed + " days ago");
  var $iconHeart = $("<i>").attr({"class": "fa fa-heart", "aria-hidden": "true"});
  var $iconRetweet = $("<i>").attr({"class": "fa fa-retweet", "aria-hidden": "true"});
  var $iconFlag = $("<i>").attr({"class": "fa fa-font-awesome", "aria-hidden": "true"});

  $header = $header.append($avatar).append($user).append($handle);
  $footer = $footer.append($createdAt).append($iconHeart).append($iconRetweet).append($iconFlag);

  $tweet = $tweet.append($header).append($content).append($footer);

  return $tweet
}

$(document).ready(function(){
// Test / driver code (temporary). Eventually will get this from the server.
var tweetData = {
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
}

var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet);

$('#tweet-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

});





