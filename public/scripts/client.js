$(document).ready(function(el) {

  const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  const renderTweets = (tweets) => {
    $('#tweets-container').empty();
    for (let tweet of tweets) {
      $('#tweets-container').prepend(createTweetElement(tweet));
    }
  };

  const createTweetElement = function(tweet) {
    let $tweet = $(`
  <article class ="tweet">
  <head>
  <div class="nameTag">
  <img src="${escape(tweet.user.avatars)}">
  <p class="inName">${escape(tweet.user.name)}</p>
  <p class = "ating">${escape(tweet.user.handle)}</p>
  </div>
  </head>
  <div class="art">
      ${escape(tweet.content.text)}
      </div>
      <footer class="info">
      ${escape(timeago.format(tweet.created_at))}
      <p>
      <i class="fa-regular fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
      </p>
      </footer>
      </article>
      `);
    return $tweet;
  };



  const loadTweets = function() {
    $.ajax('/tweets', { method: 'GET' })
      .then((tweets) => {
        renderTweets(tweets);
      });
    $('.errorText').slideUp(400).text('');
  };



  const postTweet = function(event) {
    event.preventDefault();

    $('.errorText').slideUp(400).text('');

    if ($(this).serialize().length < 6) {
      return $('.errorBox').text('Your Tweet has no characters').slideDown();
    }
    if ($(this).serialize().length > 145) {
      alert('Your Tweet exceeds the maximum characters');
      return $('.errorBox').text('Your Tweet exceeds the maximum characters').slideDown();
    }
    $.ajax('/tweets', {
      method: 'POST',
      data: $(this).serialize()
    })
      .then(() => {
        loadTweets();
      });


  };

  loadTweets();

  $('form.tweetSubmit').on('submit', postTweet);
});


