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

// Fake data taken from tweets.json

const data = [
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



$(document).ready(function() {

const createTweetElement = function(tweet) {


  const newTweet = $("<article>").addClass("tweet")


  //create header and all its children

  const newHeader = $("<header>");

  const newImg = $("<img>")
                 .addClass('avatar')
                 .attr("src", tweet['user']['avatars']['small'])
                 .appendTo($(newHeader));

  const newName = $("<h1>" + tweet['user']['name'] + "</h1>")
                  .appendTo($(newHeader));

  const newHandle = $("<p>" + tweet['user']['handle'] + "</p>")
                    .appendTo($(newHeader));

  //append header to tweet
  $(newHeader).appendTo($(newTweet));




  //create tweet div

  const newDiv = $("<div><p>" + tweet['content']['text'] + "</p></div>")
                 .appendTo($(newTweet));




  //create footer and all its children

  const newFooter = $("<footer>");

  const newTimeStamp = $("<p>" + tweet['created_at'] + "</p>")
                       .appendTo($(newFooter));

  const newIconDiv = $("<div>")

  const newFlag = $("<i>")
                  .addClass('fas fa-flag')
                  .appendTo($(newIconDiv));

  const newRetweet = $("<i>")
                  .addClass('fas fa-retweet')
                  .appendTo($(newIconDiv));

  const newHeart = $("<i>")
                  .addClass('far fa-heart')
                  .appendTo($(newIconDiv));


  $(newIconDiv).appendTo($(newFooter));

  $(newFooter).appendTo($(newTweet));


  //return a tweet <article> element
  return newTweet

  }

const renderTweets = function(arrTweets) {

  arrTweets.forEach(function(tweet) {
    let tweetToAdd = createTweetElement(tweet);
    $(tweetToAdd).appendTo($('#tweet-feed'));
  });

}



renderTweets(data);


});


