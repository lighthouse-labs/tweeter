/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function() {

  // code snippet from https://gist.github.com/flangofas/714f401b63a1c3d84aaa
  function calculateDateStamp(milliseconds) {
    let today = new Date().getTime();
    let timeDifference = today - new Date(milliseconds).getTime();

    let days, total_hours, total_minutes, total_seconds;

    total_seconds = parseInt(Math.floor(timeDifference / 1000));
    total_minutes = parseInt(Math.floor(total_seconds / 60));
    total_hours = parseInt(Math.floor(total_minutes / 60));
    days = parseInt(Math.floor(total_hours / 24));

    return days;

  }

  function createTweetElement(tweetData){
    let dateDifference = calculateDateStamp(tweetData.created_at);

    let $article = $("<article>").addClass("tweet");

    let $header = $("<header>");
    let $img = $("<img>").attr("src", tweetData.user.avatars.small);
    let $userName = $("<h2>").text(tweetData.user.name);
    let $handle = $("<p>").text(tweetData.user.handle);

    let $text = $("<p>").text(tweetData.content.text);

    let $footer = $("<footer>");
    let $daysAgo = $("<p>").text(`${dateDifference} days ago`);

    let $icons = $("<div>").addClass("icons");
    let $flag = $("<i>").addClass("fas fa-flag");
    let $retweet = $("<i>").addClass("fas fa-retweet");
    let $heart = $("<i>").addClass("fas fa-heart");

    $header.append($img);
    $header.append($userName);
    $header.append($handle);

    $icons.append($flag);
    $icons.append($retweet);
    $icons.append($heart);

    $footer.append($daysAgo);
    $footer.append($icons);

    $article.append($header);
    $article.append($text);
    $article.append($footer);

    return $article;

  }

  function renderTweets(data){
    data.sort((first, second)=>{
      return second.created_at - first.created_at;
    });
    data.forEach((item) => {
      let $tweet = createTweetElement(item);
      $(".tweets-container").append($tweet);
    });
  }

  function validateForm(data){
    if(!data || data === "text="){
      return -1;
    } else if(data.slice(5).length > 140){
      return -2;
    }
    return data;
  }

  function loadTweets(){
    $.get("/tweets", function(tweets){
      renderTweets(tweets);
    });
  }

  $("form").on("submit", function(event){
    event.preventDefault();
    const tweet = validateForm($(this).serialize());
    if(typeof tweet === "string"){
      $.post("/tweets", tweet)
        .done($(this).children("textarea").val(""))
        .done(console.log($(this).children(".counter").text("140")))
        .done($(".tweet").remove())
        .done(loadTweets);
    } else if(tweet === -1){
      alert("Input invalid");
    } else if(tweet === -2){
      alert("Input too long");
    }
  });

  $("#compose").on("click", function(){
    $(".new-tweet").toggle(function(){
      if($(this).is(":visible")){
        $(this).children("form").children("textarea").focus();
      }
    });
  });


  loadTweets();

});



