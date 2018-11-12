$(() => {
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

  loadTweets();

//   (() => {
//   $('.error-message').hide()
// })

function renderTweets(tweets) {
  // $(".tweet-container").empty();
  tweets.forEach( tweet => {
    $(".tweet-container").prepend(createTweetElement(tweet));
    $('#new-tweet-form')[0].reset()
  })
}

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function createTweetElement(tweet) {
  let user = tweet["user"];
  let content = tweet["content"];
  let timeStamp = tweet["created_at"];
  let date = new Date(timeStamp * 1000).toDateString();
  console.log("date = ", date );
  console.log("timeStamp = ", timeStamp)
  // let day = date.toDateString();

  return `<article class="tweet">
    <header class="tweet-header">
    <img id="avatar" src="${escape(user["avatars"].small)}" />
    <h2>${escape(user["name"])}</h2>
    <span class="handle">${escape(user["handle"])}</span>
    </header>
    <p class="tweet-body">${escape(content["text"])}</p>
    <footer class="tweet-footer"><p>${date}</p>
    <span></span>
    </footer>
    </article>`
  }

  function handleNewTweet(event) {
    event.preventDefault();
    const data = $(this).serialize();
    let splitData = data.split("=")[1].length;
    if ( (splitData) && (splitData <= 140) ) {
      $.ajax({
        method: 'POST',
        url: "/tweets",
        data: data,
      }).then((res) => {
        loadTweets();
      }, (err) => {
    })
  } else {
    errorAlert();
    };
  }

function errorAlert() {
  $( ".logo" ).click(function() {
  $(".error-message").show()
  });
}

$('#new-tweet-form').on('submit', handleNewTweet);

function loadTweets() {
  event.preventDefault();
  $.ajax({
    method: 'GET',
    url: "/tweets",
    success: function(result){
      renderTweets(result);
    },
    error: function(err){
      console.log("there was an error calling API",err);
    }
  });
}

// function errorAlert() {
//   $(".error-message").slideToggle(1000)
// }

});
