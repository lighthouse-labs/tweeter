/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const tweetsDB = require('../../server/data-files/initial-tweets.json');

//const $tweet = $("<article>").addClass("tweet");
$( document ).ready(function() {
const createTweetElement = function(tweetObj) {
  let $tweet = $('<article>').addClass('tweet')
    .append(createHeader(tweetObj.user))
    .append(createContent(tweetObj.content))
    .append(createFooter(tweetObj.created_at));
  console.log("Output from tweet element", $tweet);
  return $tweet;
};

const createHeader = function(headerObj) {
  return `
  <header>
    <img src=${headerObj.avatars}>
    <div>${headerObj.name}</div>
    <h6>${headerObj.handle}</h6>
  </header>
  `;
};

const createContent = function(articleObj) {
  return `
  <h5>
  ${articleObj.text}
  </h5>
  `;
};

const createFooter = function(footerObj) {
  return `
  <footer>
  <div>
    ${periodAgo(footerObj)}
  </div>
  <img src="/images/heart-solid.svg">
  <img src="/images/retweet-solid.svg">
  <img src="/images/flag-solid.svg">
</footer>
  `;
};

// return the period posted from today
const periodAgo = function(dateCreated) {
  const secsLapsed = Math.round((Date.now() - dateCreated) / 1000);
  let msg = '';
  
  if (quotient(secsLapsed, 60 * 60 * 24 * 365) > 1) {
    // from a year ago
    msg = 'Over a year ago';
  } else if (quotient(secsLapsed, 60 * 60 * 24 * 30) > 1) {
    // from # months ago
    msg = `${(quotient(secsLapsed, 60 * 60 * 24 * 30))} months ago`;
  } else if (quotient(secsLapsed, 60 * 60 * 24 * 7) > 1) {
    // from # weeks ago
    msg = `${(quotient(secsLapsed, 60 * 60 * 24 * 7))} weeks ago`;
  } else if (quotient(secsLapsed, 60 * 60 * 24) > 1) {
    // from # days ago
    msg = `${quotient(secsLapsed, 60 * 60 * 24)} days ago`;
  } else if (quotient(secsLapsed, 60 * 60) > 1) {
    // from # days ago
    msg = `${quotient(secsLapsed, 60 * 60)} minutes ago`;
  } else {
    // just posted
    msg = 'Posted moments ago';
  }

  return msg;
};

//returns the quotient of a number
const quotient = (num, divisor) => Math.floor(num / divisor);

//END of code
// Fake data taken from initial-tweets.json
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
const renderTweets = function(tweets) {
  console.log("in Render:", tweets);
  for (const item of tweets) {
    const $tweet = createTweetElement(item);
    console.log("Looping through:", item, $tweet);
    $('#tweets-container').append($tweet); 
  }
}

renderTweets(data);
});