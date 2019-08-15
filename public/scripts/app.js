/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// const tweetsDB = require('../../server/data-files/initial-tweets.json');

//const $tweet = $("<article>").addClass("tweet");
$(document).ready(function() {

  const loadtweets = () => {
    $.ajax({
      url: '/tweets/',
      method: 'GET'
    })
    .then(function(jsonTweets) {
      renderTweets(jsonTweets);
    })
    .catch(function(err){
      alert('Cannot load data from Tweeter database');
    });
  };

  loadtweets();

// $('form').submit((event) => {
//   event.preventDefault();
//      console.log("Prevented event", $(this));
  
//       $.ajax({
//         url: '/tweets/',
//         method: 'POST',
//         data: $(this).serialize()
//       })
//       .then(function() {
//         console.log("Successfully senbt form submission");
//       });
//     });


const createTweetElement = (tweetObj) => {
  let $tweet = $('<article>').addClass('tweet')
    .append(createHeader(tweetObj.user))
    .append(createContent(tweetObj.content))
    .append(createFooter(tweetObj.created_at));
  return $tweet;
};
// 
const createHeader = (headerObj) => {
  return `
  <header>
    <img src=${headerObj.avatars}>
    <div>${headerObj.name}</div>
    <h6>${headerObj.handle}</h6>
  </header>
  `;
};
// 
const createContent = (articleObj) => {
  return `
  <h5>
  ${articleObj.text}
  </h5>
  `;
};
// 
const createFooter = (footerObj) => {
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
// 
// return the period posted from today
const periodAgo = function(dateCreated) {
  const secsLapsed = Math.round((Date.now() - dateCreated) / 1000);
  let msg = '';
  // 
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
// 
  return msg;
};
// 
//returns the quotient of a number
const quotient = (num, divisor) => Math.floor(num / divisor);
// 
// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
const renderTweets = function(tweets) {
  for (const item of tweets) {
    const $tweet = createTweetElement(item);
    $('#tweets-container').append($tweet); 
  }
}
//END of code
// 
});
//end of document.ready()