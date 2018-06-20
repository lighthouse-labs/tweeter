/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$('document').ready(function () {

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


function createTweetElement(tweetData){


const $article  = $('<article>').addClass('boxTweet');
const $header   = $ ('<header>').appendTo($article);

const src = tweetData.user.avatars.small;
$('<img>').attr('src', src).appendTo($header);

const name = tweetData.user.name;
$('<h2>').addClass('name').text(name).appendTo($header);

const handle = tweetData.user.handle;
$('<p>').addClass('handle').text(handle).appendTo($header);


// ****************

// const $div = $('<div>').addClass('content').appendTo($article);

// const content = tweetData.content;
// $('<div>').addClass('content').text(content).appendTo($div);


// ****************
  const $footer   = $('<footer>').appendTo($article);


  const created_at = tweetData.created_at;
  const realTime = new Date(created_at);
  $('<p>').addClass('date').text(realTime).appendTo($footer);

//

  return $article

} // END OF FUNCTION

var $tweet = createTweetElement(tweetData);

console.log($tweet); // to see what it looks like
$('#tweets-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

}); // END OF GET READY



