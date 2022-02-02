/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Temporary hardcoding
const data = "http://localhost:8080/tweets"
// const data = [
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
// ];

// // Temporary hardcoding
// const tweetData = {
//   "user": {
//     "name": "Newton",
//     "avatars": "https://i.imgur.com/73hZDYK.png",
//       "handle": "@SirIsaac"
//     },
//   "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//   "created_at": 1461116232227
// }

$( () => {
  console.log("client.js");

  // Create a new tweet based on submitted information
  const createTweetElement = function (element) {
    const { user, content, created_at } = element;
    const { avatars, name, handle } = user;
    const { text } = content;
    const $tweet = `
      <article class="feed-article">
        <header class="feed-header">
          <div class="feed-header-user">
            <img src="${avatars}" alt="user avatar">
            <p class="bold">${name}</p>
          </div>
          <p class="feed-handle bold">${handle}</p>
        </header>
        <main class="feed-body">
          <p>${text}</p>
        </main>
        <footer class="feed-footer">
          <p>${timeago.format(created_at)}</p>
          <div class="feed-footer-icons">
            <i class="fas fa-flag feed-icon"></i>
            <i class="fas fa-retweet feed-icon"></i>
            <i class="fas fa-compass feed-icon"></i>
          </div>
        </footer>
      </article>`;
      return $tweet;
  };

  // what is the purpose of this function? takes the info, creates the tweet, and renders them into container.
  const renderTweets = function(tweets) {
    console.log("renderTweets called");
    console.log("argument tweets", tweets);

    $('#tweets-container').empty();
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('#tweets-container').prepend($tweet);  
    }
    // console.log('#tweets-container', $('#tweets-container'));
    return true;
  };

  // $.ajax({
  // url: data,
  // }).then( (response) => {
  //   console.log('response', response);
  //   renderTweets(response);
  // });

  $.get( data, function(response) {
    renderTweets(response);
  });
});
