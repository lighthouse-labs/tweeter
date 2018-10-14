/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(()=> {

  function renderTweets(tweets) {
    $("#all-tweets").empty();
    tweets.forEach(function(tweet) {
      $("#all-tweets").prepend(createTweetElement(tweet)) 
    })
  };
  
  function createTweetElement(tweetData) {
    // let $img = $(`<img class="avatar">`).attr("src", tweetData.user.avatars.regular);
    let $profileImg = $("<img>").attr("src", tweetData.user.avatars.regular).addClass("avatar");
    let $h3 = $(`<h3 class="full-name">`).text(tweetData.user.name);
    let $handle = $(`<span class="handle">`).text(tweetData.user.handle);
    let $header = $(`<header class="tweet-header">`).append($profileImg, $h3, $handle);
  
    let $tweetContent = $(`<p class="tweet-content">`).text(tweetData.content.text);
    let $section = $(`<section class="middle">`).append($tweetContent);
  
    let $dateStamp = $(`<span class="date-stamp">`).text(moment(tweetData.created_at).startOf("hour").fromNow())
    let $footerIconShare = $(`<img class="footer-icons">`).attr("src", "/images/footer-icons/share.svg")
    let $footerIconStar = $(`<img class="footer-icons">`).attr("src", "/images/footer-icons/flag-star.svg")
    let $footerIconHeart = $(`<img class="footer-icons">`).attr("src", "/images/footer-icons/heart.svg")
    let $footer = $(`<footer class="tweet-footer">`).append($dateStamp, $footerIconShare, $footerIconStar, $footerIconHeart);
  
    let $tweet = $(`<article class="tweet-container">`)
    .append($header)
    .append($section)
    .append($footer)
    
    return $tweet;
  };

  $(".compose-button").on("click", (function() {
    $(".new-tweet").slideToggle();
    $(".text-area").focus();
  }));

  // AJAX request to submit tweets asynchonously
  $("#tweetform").on("submit", function(event) {
    event.preventDefault();
    let data = $("#tweetform").serialize(); // convert object to string
    let empty = $(".text-area").val() === "";
    if (empty) {
      $("#error, #errormessage").slideDown(400, function() {
        $("#errormessage").text("Don't ya want to say something?");
      })} else {
      $.ajax({
        url: "/tweets",
        method: "POST",
        data: data,
        success: function (result) {
          $('#error').slideUp(500);
          loadTweets();
          $(".text-area").val("")
        }
      })
    }
  });

  function loadTweets() {
    $.get("/tweets", function (tweets) {
      renderTweets(tweets)
    })
  }
  loadTweets();
});

