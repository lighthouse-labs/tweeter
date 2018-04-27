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


function renderTweets(tweets) {

for (var i=0; i<data.length; i++)
    for (var tweet in data[i]) {
      // createTweetElement(data[i]);
      console.log(data[i]));

    }

}

  // loops through tweets
  //   calls createTweetElement for each tweet
  //   takes return value and appends it to the tweets container

  function createTweetElement (tweetObject) {

    let $tweet = $("<article>").addClass("tweet")

    const $article = $('<article>').addClass('w3-container');

    const $header = $('<header>').addClass('tweetBanner').addClass('clearfix');

    $('<img>').addClass('logo').attr("src", tweetObject.user.avatars.small).appendTo($header);
    $('<h2>').addClass('tweetHeader').text(tweetObject.user.name).appendTo($header);
    $('<p>').addClass('tweetHandle').text(tweetObject.user.handle).appendTo($header);


    const $footer = $('<footer>').addClass('tweetFoot').addClass('clearfix');

    $('<p>').text(tweetObject.created_at).appendTo($footer)

    const $icons = $('<div>').addClass('icons');


    $('<i>').addClass('fas').addClass('fa-flag').appendTo($icons);
    $('<i>').addClass('fas').addClass('fa-heart').appendTo($icons);
    $('<i>').addClass('fas').addClass('fa-retweet').appendTo($icons);

    $article.append($header);

    $('<div>').addClass('content').text(tweetObject.content.text).appendTo($article);
    $footer.append($icons)
    $article.append($footer);

    return $article;

  }

const $createdTweet = createTweetElement(data); // Where my const createdTweet is my function which creates the HTML for my tweet database
$('#tweet-container').append($createdTweet); // line 58 - <section id='tweet-container'>


let $tweet = createTweetElement(data);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet);

renderTweets(createTweetElement);

});



