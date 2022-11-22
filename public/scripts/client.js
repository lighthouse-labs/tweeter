/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Raw data taken from initial-tweets.json

$(document).ready(function () {
  const renderTweets = (tweets) => {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    for (let index of tweets) {
      const render = createTweetElement(index);
      $("#tweets-container").append(render);
    }
  };

  const createTweetElement = (tweetData) => {
    let $tweet = $(`<article>
  <header class="tweet-header">
       
  <span style="padding: 2%"><img src="${tweetData.user.avatars}">${
      tweetData.user.name
    }</span> 
  <span class="user-id">${tweetData.user.handle}</span>

</header>
<p class="user-text">${tweetData.content.text}</p>
<hr style="width: 95%">

<div>
  </div>
<footer>
<time>${timeago.format(tweetData.created_at)}</time>
  <div class="footer-icons"><i class="fa-solid fa-flag"></i>
  <i class="fa-solid fa-retweet"></i>
  <i class="fa-solid fa-heart"></i> </div>
</footer>

</article>`);
    return $tweet;
  };

  //create Ajax POST request
  $("#request").submit(function (event) {
    event.preventDefault();

    const maxCharCount = 140;
    const inputLength = $(this).find('#tweet-text').val().length;

    if (!inputLength) {
      return alert("Empty Tweet")
    } else if (inputLength > maxCharCount) {
      return alert("Tweet is too long!")
    } else{

    const tweet = $("#request").serialize();
    $.ajax({
      url: "/tweets/",
      method: "post",
      data: tweet,
    }).then(function (res) {
      console.log(res);
      loadtweets();
    });
    }
  });

  //load tweet with GET
  const loadtweets = () => {
    $.ajax("/tweets", { method: "GET" }).then((tweets) => {
      renderTweets(tweets);
    });
  };
  loadtweets();
  
});
