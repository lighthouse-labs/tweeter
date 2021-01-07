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
  console.log(data)
  const date = new Date(data.created_at);
  const displayDate = moment(date).fromNow();
  
  let $tweet = `
  <article class="tweet" data-id="${data.id}"> 
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
const renderButtons = function (tweet, likes, retweets) {
  console.log('likes:', likes)
  const heart = $(`[data-id=${tweet.id}]`).find(".likePost");
    if (likes.some(ele => ele === tweet.id)) {
      console.log('liked contains:', tweet.id)
      $(heart).removeClass("tweet-button-unclicked");
      $(heart).addClass("tweet-button-clicked");
    } 

    heart.click(function (event) {
      $.ajax(`/tweets/${tweet.id}/like`, { method: "POST" }).then((liked) => {
        console.log(liked)
        if (liked) {
          $(this).removeClass("tweet-button-unclicked");
          $(this).addClass("tweet-button-clicked");
          // let likes = Number($(this).find("span")[0].innerText)
          // likes += 1;
          // $(this).find("span")[0].innerText = likes;
        } else {
          $(this).removeClass("tweet-button-clicked");
          $(this).addClass("tweet-button-unclicked");
          let likes = Number($(this).find("span")[0].innerText)
          likes -= 1;
          $(this).find("span")[0].innerText = likes;
        }
      });
    });

    const retweet_button = $(`[data-id=${tweet.id}]`).find(".retweetPost");

    if (retweets.some(ele => ele === tweet.id)) {
      $(retweet_button).removeClass("tweet-button-unclicked");
      $(retweet_button).addClass("tweet-button-clicked");
    } 


    retweet_button.click(function (event) {
      const divId = event.currentTarget.closest(".tweet")
      console.log($(divId))
      $.ajax(`/tweets/${$(divId).attr("data-id")}/retweet`, { method: "POST" })
        location.reload();
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

const renderLikes = function (tweet, likes) {
  console.log(tweet)
}

const loadTweets = function () {
  $.ajax("/tweets", { method: "GET" })
    .then((data) => {
      console.log(data)
      renderElements(data.tweets);
      renderLikes(data.likes)
      return data;
    })
    .then((data) => {
      for (const tweet of data.tweets) {
        renderButtons(tweet, data.likes, data.retweets);
      }
      return data
    })

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
