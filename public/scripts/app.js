/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 * http://api.jquery.com/append/
 */

// var data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": {
//         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": {
//         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//       },
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   },
//   {
//     "user": {
//       "name": "Johann von Goethe",
//       "avatars": {
//         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//       },
//       "handle": "@johann49"
//     },
//     "content": {
//       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//     },
//     "created_at": 1461113796368
//   }
// ];


$(function () {
console.log('DOM fully loaded and parsed');

// function renderTweets(tweets) {
//   // loops through tweets
//   // calls createTweetElement for each tweet
//   // takes return value and appends it to the tweets container

// for (var i = 0; i < Things.length; i++) {
//   Things[i]
// }






// }


	

function createTweetElement(tweetObj) {
	var $tweet = $("<article>").addClass("tweet");
	var $header = $("<header>");
	var $avatar = $("<img>").addClass("avatar").attr("src", tweetObj.user.avatars.small);
	var $username = $("<h2>").addClass("user").text(tweetObj.user.name);
	var $handle = $("<span>").addClass("handle").text(tweetObj.user.handle);
	var $content = $("<div>").text(tweetObj.content.text);
	var $footer = $("<footer>");
	
	
	$header.append($avatar);
  $header.append($username);
  $header.append($handle);
  $tweet.append($header);
  $tweet.append($content);
  $tweet.append($footer);

  var testHTML = $tweet






	return testHTML

}


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
// console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet);
console.log($('#tweets-container'));
 // to add it to the page so we can make sure it's got all the right elements, classes, etc.
});


