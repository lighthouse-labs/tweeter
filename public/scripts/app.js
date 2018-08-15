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

    let element = `<article class="tweet">
            <header>
              <img src="${tweetData.user.avatars.small}">
              <h2>${tweetData.user.name}</h2>
              <p>${tweetData.user.handle}</p>
            </header>
            <p>${tweetData.content.text}</p>
            <footer>
              <p>${dateDifference} days ago</p>
              <div class="icons">
                <i class="fas fa-flag"></i>
                <i class="fas fa-retweet"></i>
                <i class="fas fa-heart"></i>
              </div>
            </footer>
          </article>`;
    return element;

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

  function loadTweets(){
    $.get("/tweets", function(tweets){
      renderTweets(tweets);
    });
  }

  loadTweets();

});



