/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const maxLen = 140;

$(document).ready(() => {
  loadtweets();
  listenForSubmit();
  //END of code
});
//end of document.ready()

// listen for the submit function and override the default to validate user input
const listenForSubmit = function() {
  $('form').submit((event) => {
    event.preventDefault();

    if ($('textarea').val().length === 0) {
      $('error-box').text("Your tweet is empty");
      $('error-box').slideDown();
    } else if ($('textarea').val().length > maxLen) {
      $('error-box').text(`Your tweet is too long, reduce it by: ${$('textarea').val().length - maxLen} characters.`);
      $('error-box').slideDown();
    } else {
      $.ajax({
        url: '/tweets/',
        method: 'POST',
        data: $('textarea').serialize()
      })
      .then(newTweet => {
        // tweet submitted successfully prepend new tweet to container
        $('error-box').slideUp();
        $('#tweets-container').prepend(createTweetElement(newTweet));
        $('#span_counter').text(maxLen);
        $('textarea').val('');
      })
      .fail(error => {
        $('error-box').text("Something happened. Tweeter cannot accept your tweeter at the moment.");
        console.log({ error });
        $('error-box').slideDown();
      });
    }
  });
}

// create tweet element into a string instead of using string literals for better security
const createTweetElement = function(tweetObj) {
  let $tweet = $('<article>').addClass('tweet')
    .append(createHeader(tweetObj.user))
    .append(createContent(tweetObj.content))
    .append(createFooter(tweetObj.created_at));
  return $tweet;
};

// create header of tweet element into a string instead of using string literals for better security
const createHeader = function(headerObj) {
  return `
  <header>
    <div>
      <img src=${headerObj.avatars}>
      <p>${headerObj.name}</p>
    </div>
    <h6>${headerObj.handle}</h6>
  </header>
  `;
};
// create body of tweet element into a string instead of using string literals for better security
const createContent = function(articleObj) {
  return `
  <h5>
  ${escape(articleObj.text)}
  </h5>
  `;
};

  // create footerer of tweet element into a string instead of using string literals for better security
const createFooter = function(footerObj) {
  return `
  <footer>
  <div>
    ${periodAgo(footerObj)}
  </div>
  <div class="images">
    <img src="/images/heart-solid.svg">
    <img src="/images/retweet-solid.svg">
    <img src="/images/flag-solid.svg">
  </div>
</footer>
  `;
};

// loops through tweets
// calls createTweetElement for each tweet
// takes return value and appends it to the tweets container
const renderTweets = function(tweets) {
  const sortedTweets = tweets.sort((newer, older) => (newer.created < older.created) ? 1 : -1)
  for (const item of sortedTweets) {
    const $tweet = createTweetElement(item);
    $('#tweets-container').prepend($tweet);
  }
  $('error-box').addClass('no-show-status');
};

// call to load tweets on load
const loadtweets = function() {
  $.ajax({
    url: '/tweets/',
    method: 'GET'
  })
    .then(jsonTweets => {
      // define on load behaviour including reset container, tweet counter, and hide compose
      // and error bars
      $(window).scrollTop(0);
      $('#tweets-container').empty();
      $('#span_counter').text(maxLen);
      $('#toggle-status').hide();
      $('error-box').hide();
      renderTweets(jsonTweets);
    })
  .fail(error => {
    $('error-box').text(`Something happened. Tweeter cannot load your tweeters at the moment.`);
    console.log({error});
    $('error-box').slideDown();
  });
};

//escapre function to ensure text is not vulnerable to cross-site script from the LHL exercise
const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

//returns the quotient of a number
const quotient = (num, divisor) => Math.floor(num / divisor);

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