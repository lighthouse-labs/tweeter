
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

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


//Should create the entire tweet DOM structure
$(document).ready(function () {
  function createTweetElement (input) {
    let userName = input.user.name;
    let imgSource = input.user.avatars.small;
    let userHandle = input.user.handle;
    let textInput = input.content.text;
    let timeStamp = input.created_at;

    let header_username = $('<div></div>').addClass('username');
    let header_username_p = $('<p></p>');
    $(header_username_p).append(userName);
    $(header_username).append(header_username_p);
    let header_handle = $('<div></div>').addClass('handle');
    let header_handle_p = $('<p></p>');
    $(header_handle_p).append(userHandle);
    let header_image = $('<img></img>').attr('src', imgSource);
    let header = $('<header></header>');
    $('header').append(header_image, header_username, header_handle);

    let tweet_body = $('<div></div>').addClass('tweet-body');
    let tweet_body_p = $('<p></p>');
    $(tweet_body_p).append(textInput);
    $(tweet_body).append(tweet_body_p);

    let footer_timestamp_p = $('<p></p>');
    $(footer_timestamp_p).append(timeStamp);
    let footer_timestamp = $('<div></div>');
    $(footer_timestamp).append(footer_timestamp_p);
    let footer = $('<footer></footer>');
    $(footer).append(footer_timestamp);

    let article = $('<article></article>');
    $(article).append(header, tweet_body, footer);
    return article;

  }
  function renderTweets (tweetArray) {
    tweetArray.forEach(function() {
      let currentArray = $(createTweetElement(this));
      $(.container).append(currentArray);
    });
    return $(.container);
  }


  let tweet = createTweetElement(tweetData);
  console.log(tweet);
});




