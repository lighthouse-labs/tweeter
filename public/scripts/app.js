/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

  function createTweetElement(tweetInput) {
    let $tweet = (`
    <article class='tweet'>
      <header>
        <span class='avatar'>
          <img src='${tweetInput.user.avatars.small}' class='avatar'>
        </span>
        <span class='name'>${tweetInput.user.name}</span>
        <span class='handle'>${tweetInput.user.handle}</span>
      </header>
      <section class='tweet'>${tweetInput.content.text}</section>
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

  $("form").submit(function (event) {
    event.preventDefault();
    $.post("/tweets", ($(this).serialize()))
      .then(loadTweets)
    $(this).trigger("reset")
  });

  loadTweets();
})
