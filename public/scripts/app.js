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

function createTweetElement (data) {
  let $tweet = $("<article>").addClass("tweet");
  $tweet.text(data.content.text);
  $('$tweet').append($("<header>").addClass("tweet"));
$('$tweet').append($("<div>").addClass("tweet"));
$('$tweet').append($("<footer>").addClass("tweet"));
  return $tweet;
}

let $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)

 // to see what it looks like
$('#tweet-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
// $('$tweet').append($("<header>"))
// $('article').append($("<header>").addClass("tweet"));
// $('article').append($("<div>").addClass("tweet"));
// $('article').append($("<footer>").addClass("tweet"));