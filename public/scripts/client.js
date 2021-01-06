/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// momentjs

// Input sanitization
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = function (data) {
  const date = new Date(data.created_at);
  const displayDate = moment(date).fromNow();
  
  let $tweet = `
  <article class="tweet" id="${data.id}"> 
    <header>
     <div class="user">`;
  if (data.retweeter_name) {
    $tweet += `<div class="retweeter"> <i class="fas fa-retweet"></i>  retweeted by ${data.retweeter_name}</div>`;
  }
  $tweet += `<img src='${data.avatar}' alt="${data.handle}'s avatar">
        <span>${data.name}</span>
      </div>
      <div class="handle hidden">@${data.handle}</div>
    </header>
    <p>${escape(data.text)}</p>
    <footer>
      <div>Posted ${displayDate}</div>
      <div class="tweet-buttons">
        <button class="likePost tweet-button-unclicked">
          <span>${data.likes}</span>
          <i class="fas fa-heart"></i>
        </button>
        <button class="retweetPost tweet-button-unclicked" >
          <span class="retweets">${data.retweets}</span>
          <i class="fas fa-retweet"></i>
        </button>
        <button class="reportPost tweet-button-unclicked">
          <i class="fas fa-flag"></i>
        </button>
      </div>
    </footer>
  </article>`;

  return $tweet;
};

// Adds like and retweet functionality to tweet buttons after the tweet is rendered
const renderButtons = function (tweet) {
  $("#" + tweet.id)
    .find(".likePost")
    .click(function (event) {
      $.ajax(`/tweets/${tweet.id}/like`, { method: "POST" }).then((liked) => {
        if (liked) {
          $(this).removeClass("tweet-button-unclicked");
          $(this).addClass("tweet-button-clicked");
          let likes = Number($(this).find("span")[0].innerText)
          likes += 1;
          $(this).find("span")[0].innerText = likes;
        } else {
          $(this).removeClass("tweet-button-clicked");
          $(this).addClass("tweet-button-unclicked");
          let likes = Number($(this).find("span")[0].innerText)
          likes -= 1;
          $(this).find("span")[0].innerText = likes;
        }
      });
    });

  $("#" + tweet.id)
    .find(".retweetPost")
    .click(function (event) {
      const divId = event.currentTarget.closest(".tweet").id;
      $.ajax(`/tweets/${divId}/retweet`, { method: "POST" })
        .then((data) => {
          const retweet = data.retweet;

          $(".tweets-container").prepend(createTweetElement(retweet));

          const tweetArray = data.tweetArray;
          const retweets = data.retweetCount;

          for (const tweet of tweetArray) {
            $("#" + tweet)
              .find(".retweets")
              .text(retweets);
          }

          return retweet;
        })
        .then((retweet) => {
          renderButtons(retweet);
        });
    });

  // Tweet hover: show box-shadow and user @handle
  $(".tweet").on("mouseover", (event) => {
    $(event.target).find(".handle").removeClass("hidden");
  });
  $(".tweet").on("mouseleave", (event) => {
    $(event.target).find(".handle").addClass("hidden");
  });
};

const renderElements = function (array) {
  for (const tweet of array) {
    $(".tweets-container").prepend(createTweetElement(tweet));
  }
};

const loadTweets = function () {
  $.ajax("/tweets", { method: "GET" })
    .then((tweets) => {
      console.log(tweets)
      renderElements(tweets);
      return tweets;
    })
    .then((tweets) => {
      for (const tweet of tweets) {
        renderButtons(tweet);
      }
    });
};

$(document).ready(() => {
  loadTweets();

  $("#submit-tweet").submit((event) => {
    event.preventDefault();
    let text = $(event.currentTarget).find("textarea").val();

    if (text.length === 0) {
      $(".error").html(
        '<i class="fas fa-exclamation-triangle" style="color: red"></i><span>Tweet is empty. Please enter some more characters.</span><i class="fas fa-exclamation-triangle" style="color: red"></i>'
      );
      $(".error").slideDown();
    } else if (text.length > 140) {
      $(".error").html(
        '<i class="fas fa-exclamation-triangle" style="color: red"></i><span>Tweet is too long. Please check urself before u wreck urself</span><i class="fas fa-exclamation-triangle" style="color: red"></i>'
      );
      $(".error").slideDown();
    } else {
      $(".error").slideUp();

      let textarea = $(event.currentTarget).serialize();

      $.post("/tweets", textarea)
        .then(() => {
          console.log('reloading...')
          location.reload();
          // $(".tweets-container").prepend(createTweetElement(tweet));
          // $(event.currentTarget).find("textarea").val("");
          // return tweet;
        })
        .then((tweet) => {
          renderButtons(tweet);
        });
    }
  });
});
