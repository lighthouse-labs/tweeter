// General helper functions:
const DateTime = luxon.DateTime; // set milliseconds as relative time

const escape = function (str) {
  // prevent cross-site scripting
  constdiv = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};


// Tweet helper functions:
const createTweetElement = function (data) {
  const$tweet = $(`<article class="tweet-container"><header>
  <div class="display-user"><img src=${data["user"]["avatars"]}> &nbsp;&nbsp;${
    data["user"]["name"]
  }</div>
  <div class="handle">${data["user"]["handle"]}</div></header>
  <p class="tweet-body">${escape(data["content"]["text"])}</p>
  <footer><div class="tweet-date">${DateTime.fromMillis(
    data["created_at"]
  ).toRelative()}</div>
  <div class="action-icons">
  <i class="fa fa-flag"></i> &nbsp;
  <i class="fa fa-retweet"></i> &nbsp;
  <i class="fa fa-heart"></i>
  </div></footer>
  </article>`);
  return $tweet;
};

const renderTweets = function (data) {
  $(".tweets").empty();
  for (const singleTweet of data) {
    const$tweet = createTweetElement(singleTweet);
    $(".tweets").prepend($tweet);
  }
};

const loadTweets = function () {
  $.ajax("/tweets", { method: "GET" }).then(function (data) {
    renderTweets(data);
  });
};


// From page load onwards...
$(document).ready(function () {
  loadTweets();

  // Tweet submit handler:
  $("#send-tweet").on("submit", function (event) {
    event.preventDefault();

    if ($(".error").is(":visible")) {
      $(".error").slideUp().empty();
    }

    constserializedData = $(this).serialize();
    if (serializedData === "text=") {
      $(".error").append("No tweet is present!").slideDown();
    } else if ($(".counter").val() < 0) {
      $(".error").append("Your tweet is too long!").slideDown();
    } else {
      $.ajax({ data: serializedData, method: "POST", url: "/tweets" }).then(
        (result) => {
          loadTweets();
          $(".text-area").val("");
          $(".counter").val(140);
        }
      );
    }
  });
});
