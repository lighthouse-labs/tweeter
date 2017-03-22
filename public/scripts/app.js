/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 $(function () {
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
};



 function createdTweetElement () {

  var name = tweetData.user.name;
  var avatars = tweetData.user.avatars.small;
  var handle = tweetData.user.handle;
  var content = tweetData.content.text;
  var date = tweetData.created_at;

  var $tweet = ($("<article>").addClass("tweeter"))
   .append($("<header>")
   .append($("<img>").attr("src", avatars).addClass("profile"))
   .append($("<h3>").text(name))
   .append($("<span>").addClass("handler").text(handle))
   )
   .append($("<p>").addClass("tweetBody").text(content)
   )
   .append($("<footer>").addClass("feets")
   .append($("<span>").text(date))
   )
    return $tweet;
}


var $tweet = createdTweetElement(tweetData);
console.log($tweet);
$('#tweet-container').append($tweet);


});