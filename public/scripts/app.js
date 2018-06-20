/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 $('document').ready(function () {

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

 function renderTweets(tweets) {

    for(singleUser of tweets) {
      $('.tweet-container').prepend(createTweetElement(singleUser));
    }
 }

 function createTweetElement(tweetData) {

  const $article = $('<article>');
  const $header = $('<header>');
  const $avatar = $('<img>').attr('src', tweetData.user.avatars.small);
  const $user = $('<h1>').text(tweetData.user.name);
  const $handle = $('<p class="handle">').text(tweetData.user.handle);
  const $textBody = $('<div class="tweet-text">');
  const $actualTweet = $('<p>').text(tweetData.content.text);
  const $footer = $('<footer>');
  const $icons = $('<div class="tweet-icons">')
                  .append($('<img>').html('i class="fas fa-retweet"'))
                  .append($('<img>').html('i class="fab fa-font-awesome-flag"'))
                  .append($('<img>').html('i class="fas fa-heart"'));
  const $footerDate = $('<p>').text(tweetData.created_at);

  $article.append($header).append($textBody).append($footer);
  $textBody.append($actualTweet);
  $header.append($avatar).append($user).append($handle);
  $footer.append($icons).append($footerDate);

  return $article;
 }

 // var $tweet = createTweetElement(tweetData);

 // console.log($tweet);

 // $('.tweet-container').append($tweet);

 renderTweets(data);

});


























