/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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