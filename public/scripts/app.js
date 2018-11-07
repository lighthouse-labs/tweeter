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
];

function renderTweets(tweets) {
  // const $container = $('#tweet-container')
  tweets.forEach(function (tweet, index){
    let $tweet = createTweetElement(tweet);
    $('#tweet-container').append($tweet);
  })
  // return $container;
}

function getUserId(user){

}

function createTweetElement (data) {
  let $tweet = $("<article>").addClass("tweet");
  // $tweet.text(data.content.text);
  let $h1 = $("<h1>").addClass("tweet");
  $h1.append(data.user.name);
  $tweet.append($("<header>").addClass("tweet").append($h1));

  $tweet.append($("<div>").addClass("tweet").text(data.content.text))
  // $tweet.append($("<div>").addClass("tweet").text(renderTweets(tweetData)));
  $tweet.append($("<footer>").addClass("tweet"));
  return $tweet;
}


// Test / driver code (temporary)

 // to see what it looks like
// $('#tweet-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
// $('$tweet').append($("<header>"))
// $('article').append($("<header>").addClass("tweet"));
// $('article').append($("<div>").addClass("tweet"));
// $('article').append($("<footer>").addClass("tweet"));
renderTweets(tweetData);