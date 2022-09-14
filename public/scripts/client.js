/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(() => {
  console.log('test');

  // move ajax into function
  const getTweet = () => {
    $.ajax({
      type: 'GET',
      url: '/tweets',
      success: (tweets) => {
        $('#tweets-container').empty();
        console.log(tweets);
        for (const tweet of tweets) {
          const newTweet = createTweetElement(tweet);
          $('#tweets-container').prepend(newTweet);
        }
      }
    });
  };

  getTweet();

  const createTweetElement = function(tweet) {
    let username = tweet.user.name;
    let handle = tweet.user.handle;
    let content = tweet.content.text;

    let $tweet = $(`<article class="tweet-container">
    <header>
    <div class="username"><i class="fa-solid fa-user-astronaut fa-2xl">
      </i>${username}</div>
    <div class="userhandle">${handle}</div>
  </header>
  <p>
    ${content}
  </p>
  <footer>
    <div class="date-ago">10 days ago</div>
    <div class="tweet-icon">
      <i class="fa-solid fa-flag tweet-icon-single"></i>
      <i class="fa-solid fa-retweet tweet-icon-single"></i>
      <i class="fa-solid fa-heart tweet-icon-single"></i>
    </div>
  </footer>
  </article>`); /* Your code for creating the tweet element */
    // ...
    return $tweet;
  };

  //add event listener and prevent default behaviour(refresh)
  $('#new-tweet').on('submit', function(event) {
    event.preventDefault();

    // form handling
    const serializedData = $(this).serialize();
    console.log(serializedData);

    // submit post request of serializedData
    $.post('/tweets', serializedData, (response) => {
      console.log(response);
    });

    getTweet();
  });

});

