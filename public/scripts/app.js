/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


function createTweetElement(tweetData) {
  var $tweet = $("<article>").addClass("tweet");
  var $header = $("<header>");
  $header.append($("<img>").addClass("profile").attr("src", tweetData.user.avatars.small));
  $header.append($("<h2>").text(tweetData.user.name));
  $header.append($("<span>").text(tweetData.user.handle));
  $tweet.append($header);

  $tweet.append($("<p>").addClass("tweettext").text(tweetData.content.text));
  var $footer = $("<footer>");
  $footer.append($("<span>").text(tweetData.created_at));
  $footer.append($("<div>").addClass("social")
          .append($("<i>").addClass("fa fa-flag").attr('aria-hidden', "true"))
          .append($("<i>").addClass("fa fa-retweet").attr('aria-hidden', "true"))
          .append($("<i>").addClass("fa fa-heart").attr('aria-hidden', "true"))
          )
  $tweet.append($footer);
  return $tweet;
}

function renderTweets(data){
  var $output;
  data.forEach(function(elm){
    var $tweet = createTweetElement(elm);
    $output = $('#tweets-container').prepend($tweet);
  });
    hoverstate();
 // });
  //return $output;
}

//Loads all initial tweets
function loadTweets() {
  $.ajax({
    method: 'GET',
    url: '/tweets'
  }).done(function(tweet){
    renderTweets(tweet);
  });
}

//flash appropriate error message
function flash(text) {
  $('.new-tweet form .flash').text(text);
  setTimeout(function(){
    $('.new-tweet form .flash').text("");
  }, 1000);
}

//Hover state
function hoverstate(){
  $("article.tweet").hover(function() {
    $(this).addClass('hover');
  }, function(){
    $(this).removeClass('hover');
  });
}

$(document).ready(function(){
  loadTweets();
  $('.new-tweet').on('submit', function(event) {
    event.preventDefault();

    let count = 140 - $('section form textarea').val().length;

    if(count == 140){
      setTimeout(flash("Please enter text!"), 2000);
    }else if(count < 0){
      flash("Your tweet is too long!");
    }else{
      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: $("section form").serialize()
      }).done(function(responseText) {
        renderTweets([responseText]);
      });
    }
  });
});

