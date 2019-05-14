/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function(){

function createTweetElement(tweetObj){
  const $article = $('<article>');
  const $header = $('<header>');
  const $userName = $('<h3>').text(tweetObj.user.name);
  $header.append($userName);
  $article.append($header);
  //$('<article>' + tweetObj.content.text + '</article>').appendTo('section.tweets');
  const $temptTweet=
  `<article class="tweet">
      <header>
        <img class="userPic" src="" align="bottom">
          <h3>${tweetObj.user.name}</h3>
          <p>${tweetObj.user.handle}</p>
      </header>
      <div class="content">${tweetObj.content.text}</div>
      <footer>1 day ago</footer>
    </article>
  `;
  $('.tweets').append($temptTweet);
  console.log($userName);

}


// Test / driver code (temporary). Eventually will get this from the server.
const tweetData = {
  "user": {
    "name": "Newton",
    "avatars": {
      "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
      "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
      "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    },
    "handle": "@SirIsaac"
  },
  "content": {
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}

var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
// to add it to the page so we can make sure it's got all the right elements, classes, etc.

});