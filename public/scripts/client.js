/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

$( () => {
  console.log("client.js");
  //define input button 
  const $inputButton = $('#new-submit');
  // define input field
  const $inputField = $('#tweet-text');
  // grab value from input field
  const $inputValue = $inputField.val();
  console.log($inputValue);
  //create new article with input field value


  const createtweetElement = function (e) {
  // $inputButton.on('click', function () {
      console.log("CreateTweetElement Called");
      console.log("e", e.user.avatars);
      console.log("e", e.user.name);
      console.log("e", e.user.handle);
      console.log("e", e.content.text);
      console.log("e", e.created_at);
      const $tweet = $(`
      <article class="feed-article">
        <section class="feed-header">
          <div class="feed-user">
            <img class="feed-avatar"
              src="${e.user.avatars}">
            <figure class="feed-name bold>${e.user.name}</figure>
          </div>
          <p class="feed-handle bold">${e.user.handle}</p>
        </section>
        <section class="feed-body ">
          <div>${e.content.text}</div>
        </section>
        <footer>
          <p>
            <time>${e.created_at}</time>
          </p>
          <div class="icons">
            <div><i class="fas fa-flag"></i></div>
            <div><i class="fas fa-retweet"></i></div>
            <div><i class="fas fa-compass"></i></div>
          </div>
        </footer>
      </article>`);
      console.log("input tweet", $tweet);
      return $tweet;
    // });
  };

    const $tweet = createtweetElement(tweetData);
$('#tweets-container').append($tweet);  
});
