/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = [
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
]


function createTweetElement(tweetObject){
  let returningHTML = "<section class=\"newTweetBox\"><header class=\"newTweetHeader\"><div class=\"imageContainer\">";

  returningHTML += "<img src=\"" + tweetObject.user.avatars.small + "\" class=\"newProfile\"></div><h2 class=\"newTweeth2\">" +
          tweetObject.user.name + "</h2><p class=\"newTweetId\">" + tweetObject.user.handle + "</p></header><article class=\"newTweetArticle\">" +
          "<p class=\"newTweetContent\">" + tweetObject.content.text + "</p></article><footer class=\"newTweetFooter\"><p class=\"newTweetPostTime\">" + tweetObject.created_at +
          "</p><div class=\"hiddenIcons\"><i class=\"fas fa-flag\"></i><i class=\"fas fa-retweet\"></i><i class=\"fas fa-heart\"></i>" +
          "</div></footer></section>";

  return returningHTML;
}

var $tweet = createTweetElement(tweetData[0]);

console.log($tweet);

$('#tweets-container').append($tweet);


























