/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

/*const data = [
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
];*/

$(document).ready(function(){

function createTweetElement(tweet){//helper function
  const $tempTweet=//creates a template for each tweet
  `<article class="tweet">
      <header>
        <img class="userPic" src="" align="bottom">
          <h3>${tweet.user.name}</h3>
          <p>${tweet.user.handle}</p>
      </header>
      <div class="content">${tweet.content.text}</div>
      <footer>1 day ago</footer>
    </article>
  `;
  return $tempTweet;

}

function renderTweets(arrTweets){
  arrTweets.forEach(function(tweet){//calls the other function and loops it through the array of objects
    $('.tweets').append(createTweetElement(tweet));
  });
}

$("form").on('submit', function(e){
  e.preventDefault();//stops the button from redirecting
  $.ajax({
    url: $(this).attr("action"),//gets the /tweet link
    type: $(this).attr("method"),//gets the method which is "POST"
    data: $(this).serialize()//converts the code into urlencoded
  }).done(function(){
    console.log("AJAX POST request completed");
  });

});

function loadTweets(){
  $.ajax({
    url:'/tweets'
  })
  .done(data => {
    renderTweets(data);
  });
}

loadTweets();

//renderTweets(data);
});