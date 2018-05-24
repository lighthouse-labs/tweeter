/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {
  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function createTweetElement(tweetInput) {
    let $tweet = (`
    <article class='tweet'>
      <header>
        <span class='avatar'>
          <img src='${tweetInput.user.avatars.small}' class='avatar'>
        </span>
        <span class='name'>${(escape(tweetInput.user.name))}</span>
        <span class='handle'>${(escape(tweetInput.user.handle))}</span>
      </header>
      <section class='tweet'>${(escape(tweetInput.content.text))}</section>
      <footer>
        <span class='date'>${tweetInput.created_at}</span>
        <span class='icons'>
          <i class='fas fa-flag'></i>
          <i class='fas fa-retweet'></i>
          <i class='fas fa-heart'></i>
        </span>
      </footer>
    </article>
    `)
    return $tweet
  }

  function renderTweets(tweets) {
    $('#tweets-container').empty()
    tweets.forEach(function (tweetData) {
      let $eachtweet = createTweetElement(tweetData)
      $('#tweets-container').prepend($eachtweet); // switch to append if newest last
    })
  }

  function loadTweets() {
    $.get("/tweets", function (tweetDB) {
      renderTweets(tweetDB)
    })
  }

  $("#compose").click(function () {
    $(".new-tweet").slideToggle(function () {
      $("textarea").focus()
    })
  })

  $("form").submit(function (event) {
    event.preventDefault();
    let tweetLen = $(this).children("textarea").val().length
    if (tweetLen === 0) {
      alert("Tweets can't be empty")
    } else if (tweetLen > 140) {
      alert("Tweets can't be greater than 140 characters")
    } else {
      $.post("/tweets", ($(this).serialize()))
        .then(loadTweets)
      $(this).trigger("reset")
      $(this).children(".counter").text(140)
    }
  });

  loadTweets();
})
