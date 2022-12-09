$(document).ready(function(el) {
  console.log("document).ready.working");

  /*
   * Client-side JS logic goes here
   * jQuery is already loaded
   * Reminder: Use (and do all your DOM work in) jQuery's document ready function
   */
  // Test / driver code (temporary). Eventually will get this from the server.
  console.log("test");

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };


  //$('#submittweet').submit(postTweet);


  //const tweetData = [
  //   {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": "https://i.imgur.com/73hZDYK.png"
  //       ,
  //       "handle": "@SirIsaac"
  //     },
  //     "content": {
  //       "text": "If I have seen further it is by standing on the shoulders of giants"
  //     },
  //     "created_at": 1461116232227
  //   },
  //   {
  //     "user": {
  //       "name": "Descartes",
  //       "avatars": "https://i.imgur.com/nlhLi3I.png",
  //       "handle": "@rd" },
  //     "content": {
  //       "text": "Je pense , donc je suis"
  //     },
  //     "created_at": 1461113959088
  //   }
  // ]


  const renderTweets = (tweets) => {
    $('#tweets-container').empty();
    for (let tweet of tweets) {
      $('#tweets-container').prepend(createTweetElement(tweet));
    }
  };

  const createTweetElement = function(tweet) {
    let $tweet = $(`
  <article class ="tweet">
  <head>
  <div class="nameTag">
  <img src="${escape(tweet.user.avatars)}">
  <p class="inName">${escape(tweet.user.name)}</p>
  <p class = "ating">${escape(tweet.user.handle)}</p>
  </div>
  </head>
  <div class="art">
      ${escape(tweet.content.text)}
      </div>
      <footer class="info">
      ${escape(timeago.format(tweet.created_at))}
      <p>
      <i class="fa-regular fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
      </p>
      </footer>
      </article>
      `);
    return $tweet;
  };



  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET' })
      .then((tweets) => {
        console.log("2 ➤", 2);
        renderTweets(tweets);
      });
    $('.errorText').slideUp(400).text('');
  };



  const postTweet = function(event) {
    event.preventDefault();

    $('.errorText').slideUp(400).text('');

    console.log("log", $(this).serialize().length);
    if ($(this).serialize().length < 6) {
      return $('.errorBox').text('Your Tweet has no characters').slideDown();
    }
    if ($(this).serialize().length > 145) {
      alert('Your Tweet exceeds the maximum characters');
      return $('.errorBox').text('Your Tweet exceeds the maximum characters').slideDown();
    }
    console.log('tweet submitted');
    $.ajax('/tweets', {
      method: 'POST',
      data: $(this).serialize()
    })
      .then(() => {
        loadTweets();
      });


  };

  loadTweets();

  $('form.tweetSubmit').on('submit', postTweet);
});

// const submitTweet = function(event){
//   event.preventDefault();
//   console.log('tweet submitted, sending to database');

// }


