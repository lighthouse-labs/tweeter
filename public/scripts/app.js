/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery"s document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.

$(() => {

  function escape(str) {
    var div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function timeDifference(current, previous) {

    var msPerMinute = 60 * 1000;
    var msPerHour = msPerMinute * 60;
    var msPerDay = msPerHour * 24;
    var msPerMonth = msPerDay * 30;
    var msPerYear = msPerDay * 365;

    var elapsed = current - previous;

    if (elapsed < msPerHour) {
      return Math.round(elapsed / msPerMinute) + "minutes ago";
    } else if (elapsed < msPerDay) {
      return Math.round(elapsed / msPerHour) + "hours ago";
    } else if (elapsed < msPerMonth) {
      return Math.round(elapsed / msPerDay) + "days ago";
    } else if (elapsed < msPerYear) {
      return Math.round(elapsed / msPerMonth) + "months ago";
    } else {
      return Math.round(elapsed / msPerYear ) + "year ago";
    }
  }

  function createTweetElement(tweet) {
    const currentDate = (new Date());
    const createdAt = tweet.created_at;
    const newTime = timeDifference(currentDate, createdAt);
    const html = `
      <article class="tweets">
        <header>
          <img src=${tweet.user.avatars.small} alt="profile pic">
          <h3>${escape(tweet.user.name)}</h3>
          <p>${escape(tweet.user.handle)}</p>
        </header>
        <main>
          <p>${escape(tweet.content.text)}</p>
        </main>
        <footer>
          <p>${newTime}</p>
          <span class="fa fa-flag" aria-hidden="true"></span>
          <span class="fa fa-retweet" aria-hidden="true"></span>
          <span class="fa fa-heart" aria-hidden="true"></span>
        </footer>
      </article>`;
    return html;
  }

  function renderTweets(data) {
    let allTweets = '';
    for (const tweet in data) {
      const renderedTweet = createTweetElement(data[tweet]);
      allTweets = renderedTweet + allTweets;
    }
    $('#tweets').empty().append(allTweets);
  }

  function loadTweets() {
    $.ajax({
      type: "GET",
      url: "/tweets"
    })
      .done((data) => {
        renderTweets(data);
      });
  }

  function tweetLength(data) {
    let value = $(".tweet-new > form > textarea").val().length;
    if (value < 1 || value > 140) {
      return true;
    } else {
      return false;
    }
  }

  $(".nav-button").on("click", function () {
    let $textArea = $(".tweet-new > form > textarea");
    $(".tweet-new").slideToggle("slow", function () {
      if ($(".tweet-new").is(":visible")) {
        $textArea.focus();
      }
    });
  });

  function submitTweet(event) {
    event.preventDefault();
    const $form = $(this);
    const data = $form.serialize();

    if (tweetLength() === true) {
      $(".error").show();
      
      setTimeout(function() {
        $(".tweet-new > form > textarea").focus();
        $(".error").hide();
      }, 1000);
    } else {
      $.ajax({
        type: "POST",
        url: $form.attr("action"),
        data: $form.serialize()
      })
        .done(() => {
          loadTweets(data);
          $("#tweetBox").val("");
          $(".counter").text(140);
        });
    }
  }
  
  const $form = $("#newTweet");

  $form.on("submit", submitTweet);

  loadTweets();
});