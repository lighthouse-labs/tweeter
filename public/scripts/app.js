/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function(){

$("button.compose").on('click', function(){//toggle for the compose slide
  $("section.new-tweet").slideToggle("slow");
  var textInput = document.getElementById("txt");
  textInput.focus();//auto select the text field
})



function escape(str){//helper function to present users putting js in the form
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function createTweetElement(tweet){//helper function
  const $tempTweet=//creates a template for each tweet
  `<article class="tweet">
      <header>
        <img class="userPic" src="" align="bottom">
          <h3>${tweet.user.name}</h3>
          <p>${tweet.user.handle}</p>
      </header>
      <div class="content">${escape(tweet.content.text)}</div>
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

function loadTweets(){
  $.ajax({
    url:"/tweets"
  })
  .done(data => {
    renderTweets(data);
  });
}

loadTweets();

$("form").on("submit", function(e){
  e.preventDefault();//stops the button from redirecting
  var $textLen = $('#txt').val().length;
  if($textLen === 0){
    $("div.nullError").slideToggle("slow");//if the text is empty
    $('#txt').on('input',function(){
      $("div.nullError").slideUp();//the error slides up on input
    });
  } else if($textLen > 140){
    $("div.longError").slideToggle("slow");
    $('#txt').on('input',function(){
      $("div.longError").slideUp();
    });
  } else {
    $.ajax({
      url: $(this).attr("action"),//gets the /tweet link
      type: $(this).attr("method"),//gets the method which is "POST"
      data: $(this).serialize()//converts the data into urlencoded
    }).done(function(){
      $("#txt").val("");//clears the textbox after submit
      loadTweets();
    });
  }
});


//renderTweets(data);
});