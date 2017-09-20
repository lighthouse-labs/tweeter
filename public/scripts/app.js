/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.
$(function() {


function renderTweets(tweets) {
  var tweetContainer = $("section.all-tweets");

  tweets.forEach(function (tweet) {
    var tweetElement = createTweetElement(tweet);
      tweetContainer.append(tweetElement);
  })
}

  var tweetData = [
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


renderTweets(tweetData);

  function createTweetElement(tweet) {
      return $(`<article class="tweet">
          <header class="tweet-header">
            <a href="#">
              <img class="user-avatar" src="` + tweet.user.avatars.small + `" alt="Newton">
            </a>
            <a class="user-name" href="#">` + tweet.user.name + `</a>
            <a class="user-handle" href="#">` + tweet.user.handle + `</a>
          </header>
          <main class="tweet-content">
            <p>` + tweet.content.text + `</p>
          </main>
          <footer class="tweet-footer">
            <div class="tweet-timestamp">` + tweet.created_at + `
              <a class="tweet-action" href="#">
              <i class="fa fa-thumbs-up" aria-hidden="true"></i>
              </a>
              <a class="tweet-action" href="#">
              <i class="fa fa-flag" aria-hidden="true"></i>
              </a>
              <a class="tweet-action" href="#">
              <i class="fa fa-retweet" aria-hidden="true"></i>
              </a>
            </div>
          </footer>
        </article>`);


      // let $article = $("section.all-tweets").append("<article#tweet>")
      // $article.append("")
      // $(".user-name").append(tweet.user.name);
      // $(".user-handle").append(user.handle);
      // var $img = $('<img>').addClass('user-avatar').attr('src', tweetData.user.avatars.small);
      // $(".tweet-content").append(user.content);
      // $(".tweet-timestamp").append(user.created_at);

    // return $tweet;
  }
// Test / driver code (temporary)
 // console.log($tweet); // to see what it looks like
// $('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

//  var $tweet = createTweetElement(tweetData[2]);
})