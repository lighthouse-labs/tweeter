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


$(document).ready(function() {


function renderTweets(tweets) {

  data.forEach(function( tweet) {
  console.log(tweet);
});

}
  // loops through tweets
  //   calls createTweetElement for each tweet
  //   takes return value and appends it to the tweets container

  function createTweetElement (tweetObject) {

      let $tweet = $("<article>").addClass("tweet")

    console.log("logging inside: ", tweetObject);
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

const $createdTweet = createTweetElement(tweetData);
$('#tweet-container').append($createdTweet); // line 58 - <section id='tweet-container'>


var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet);

 // renderTweets(data);

});



