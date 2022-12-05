/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function () {
  const renderTweets = (tweets) => {
    $('.tweets-container').empty(); // Initialized tweets-container
    tweets.sort((a, b) => b.created_at - a.created_at); // sort by created_at desc
    for (const tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $('.tweets-container').append($tweet);
    }
  };

  const tweetEscape = (str) => {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const createTweetElement = (data) => {
    const tweet = data.content.text.split('\r\n');
    const tweetWithBR = tweet.map(str => tweetEscape(str)).join('<br>');
    return `
    <article>
      <header>
        <div class="tweet-info">
          <img src="${data.user.avatars}" alt="profile picture" />
          <div class="name">${data.user.name}</div>
        </div>
        <div class="tweet-account">${data.user.handle}</div>
      </header>
      <div class="tweet">${tweetWithBR}</div>
      <footer>
        <div class="created-at">${timeago.format(data.created_at)}</div>
        <div class="tweet-icons">
          <i class="fas fa-flag"></i>
          <i class="fa-solid fa-retweet"></i>
          <i class="fa-solid fa-heart"></i>
        </div>
      </footer>
    </article>
  `;
  };

  const loadTweets = () => {
    $.get('/tweets').done(function (data) {
      renderTweets(data);
    });
  };

  $('#tweet-form').submit(function (ek) {
    console.log('hi')
    ek.preventDefault();

    const data = $(this).serializeArray();

    if (data.length === 0) {
      return;
    }

    const text = data[0].value.replace(/\r?\n/g, '');
    if (!text || text === ' '.repeat(text.length)) {
      $(this).prev()
        .empty()
        .append('<i class="fa-solid fa-triangle-exclamation"></i> Tweet must NOT be empty!')
        .slideDown(400);
      return;``
    }

    if (text.length > 140) {
      $(this).prev()
        .empty()
        .append('<i class="fa-solid fa-triangle-exclamation"></i> Tweet must be under 140 characters!')
        .slideDown(400);
      return;
    }

    $.post('/tweets', data).done(function () {
      $('.tweet-error').hide(400); // hide the error when an error is displayed
      $('#tweet-text').val(''); // Clear tweet form when post is success
      $('.counter').val(140); // reset counter
      loadTweets();
    });
  });

  loadTweets();
})
