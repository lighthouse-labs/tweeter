/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const tweetData = {
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





function createTweetElement(tweet) {

  var $tweet = $("<div>").addClass("tweet");
  var $header = $("<header>").appendTo($tweet);
  $("<img>").addClass("profile-pic").attr("src", tweet.user.avatars.small).appendTo($header);
  $("<h3>").text(tweet.user.name).appendTo($header)
  $("<p>").text(tweet.user.handle).appendTo($header)
  var $article = $("<article>").text(tweet.content.text).appendTo($tweet)
  var $footer = $("<footer>").appendTo($tweet);
  $("<p>").addClass("clock").text(tweet.created_at).appendTo($footer)
  var $span = $("<span>").addClass("icons").appendTo($footer);
  $("<i>").addClass("fa fa-thumbs-o-up").appendTo($span);
  $("<i>").addClass('fa fa-share fa').appendTo($span);
  $("<i>").addClass("fa fa-frown-o").appendTo($span);

  return $tweet;

}

$(document).ready(function() {
var $tweet = createTweetElement(tweetData)
console.log(createTweetElement(tweetData).prop("outerHTML"));
$(".all-tweets").append($tweet)
})
