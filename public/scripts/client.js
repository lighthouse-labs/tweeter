/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Raw data taken from initial-tweets.json

const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];

const renderTweets = (tweets) => {
    // loops through tweets
  // calls createTweetElement for each tweet

  for (let index of tweets) {
    const render = createTweetElement(index);
    $("#tweets-container").append(render);   // takes return value and appends it to the tweets container

  }
}




const createTweetElement = (data) => {

  let $tweet = $(`<article>
  <header class="tweet-header">
       
  <span style="padding: 2%"><img src="${data.user.avatars}">${data.user.name}</span> 
  <span class="user-id">${data.user.handle}</span>

</header>
<p class="user-text">${data.content.text}</p>
<hr style="width: 95%">

<div>
  </div>
<footer>
<time>${data.created_at}</time>
  <div class="footer-icons"><i class="fa-solid fa-flag"></i>
  <i class="fa-solid fa-retweet"></i>
  <i class="fa-solid fa-heart"></i> </div>
</footer>

</article>`)
  return $tweet;
};

$(document).ready(function() {
  renderTweets(data)
})
