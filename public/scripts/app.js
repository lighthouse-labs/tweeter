/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(() => {

  loadTweets();
/*
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
*/

function renderTweets(tweets) {
  console.log("this is ", tweets)
  $(".tweet-container").empty();
  tweets.forEach( tweet => {
    $(".tweet-container").prepend(createTweetElement(tweet));
  })
}


function createTweetElement(tweet) {
  let user = tweet["user"];
  let content = tweet["content"];
  let timeStamp = tweet["created_at"];
  console.log(user);
  return `<article class="tweet">
    <header class="tweet-header">
    <img id="avatar" src=${user["avatars"].small} />
    <h2>${user["name"]}</h2>
    <span class="handle">${user["handle"]}</span>
    </header>
    <p class="tweet-body">${content["text"]}</p>
    <footer class="tweet-footer"><p>${timeStamp}</p>
    <span></span>
    </footer>
    </article>`
  }


  function handleNewTweet(event) {
    event.preventDefault();
    const data = $(this).serialize();
    $.ajax({
      method: 'POST',
      url: "/tweets",
      data: data,
      // success: function(result) {
      //   renderTweets(result);
      //   },
      //   error: function(err){
      //     console.log("there was an error calling API",err);
      //   }
    }).then((res) => {
      loadTweets();
    }, (err) => {
      // if err response
    })
  }


$('#new-tweet-form').on('submit', handleNewTweet);


function loadTweets() {
  event.preventDefault();
  $.ajax({
    method: 'GET',
    url: "/tweets",
    success: function(result){
      renderTweets(result);
    },
    error: function(err){
      console.log("there was an error calling API",err);
    }
  });
}

});
