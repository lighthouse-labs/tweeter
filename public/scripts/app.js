/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.
function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function safeString(strings, ...replacements) {
  const ret = strings.map((string, i) => {
    return string + escape(replacements[i] || "");
  }).join('');

  return ret;
  // console.log(strings, replacements.map(escape));
}

$(function() {

  $(".composeButton").on("click", function(event) {
    $(".new-tweet").slideToggle();
    $(".charCount").focus();
  });

  $("form").on("submit", function(event) {
    event.preventDefault();
    $(this).serialize();

    if ($('.charCount').val() === ""){
    alert("Please enter text =)");
    } else if ($('.charCount').val().length > 140) {
    alert("You have gone over the character limit =(")
    return;
    }

    $(".composeButton").on("click", function(event) {
      $(".new-tweet").slideToggle([400]);
    });
      // $(".charCount").focus();

    $.ajax({
      url: "/tweets/",
      method: "POST",
      data: ($(this).serialize()),
      success: function(data) {
        loadTweets();
      },
      failure: function(err) {
      }
    });
  });

  function loadTweets() {
    $.ajax({
      url: "/tweets/",
      method: "GET",
      dataType: "json",
      success: function(tweets) {
        renderTweets(tweets);
      },
      failure: function(err) {
      }
    });
  }
  loadTweets();

  function renderTweets(tweets) {
    var tweetContainer = $("section.all-tweets");
    tweetContainer.empty()
    tweets.forEach(function (tweet) {
      var tweetElement = createTweetElement(tweet);
        tweetContainer.prepend(tweetElement);
    })
  }

  function createTweetElement(tweet) {
    return $(safeString`<article class="tweet">
        <header class="tweet-header">
          <a href="#">
            <img class="user-avatar" src="${tweet.user.avatars.small}" alt="Newton">
          </a>
          <a class="user-name" href="#">${tweet.user.name}</a>
          <a class="user-handle" href="#">${tweet.user.handle}</a>
        </header>
        <main class="tweet-content">
          <p>${tweet.content.text}</p>
        </main>
        <footer class="tweet-footer">
          <div class="tweet-timestamp">${tweet.created_at}
            <a class="tweet-action" href="#">
            <i class="fa fa-thumbs-up" aria-hidden="true"></i>
            </a>
            <a class="tweet-action" href="#">
            <i class="fa fa-flag" aria-hidden="true"></i>
            </a>
            <a class="tweet-action" href="#">
            <i class="fa fa-retweet" aria-hidden="true"></i>
            </a>
          </div>
        </footer>
      </article>`);
  }
})

      // let $article = $("section.all-tweets").append("<article#tweet>")
      // $article.append("")
      // $(".user-name").append(tweet.user.name);
      // $(".user-handle").append(user.handle);
      // var $img = $('<img>').addClass('user-avatar').attr('src', tweetData.user.avatars.small);
      // $(".tweet-content").append(user.content);
      // $(".tweet-timestamp").append(user.created_at);