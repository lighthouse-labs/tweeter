/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.

$(() => {
  
  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function createTweetElement(tweet) {
    const newTime = new Date(tweet.created_at * 1000);
    const html = `
      <article class="tweets">
        <header>
          <img src=${tweet.user.avatars.small} alt="profile pic">
          <h3>${tweet.user.name}</h3>
          <p>${tweet.user.handle}</p>
        </header>
        <main>
          <p>${escape(tweet.content.text)}</p>
        </main>
        <footer>
          <p>${newTime.toUTCString()}</p>
          <span class="fa fa-flag" aria-hidden="true"></span>
          <span class="fa fa-retweet" aria-hidden="true"></span>
          <span class="fa fa-heart" aria-hidden="true"></span>
        </footer>
      </article>`;
    return html;
  }

  function renderTweets(data) {
    data.forEach((tweet) => {
      $('#tweets').prepend(createTweetElement(tweet));
    });
  }

  function loadTweets() {
    $.ajax({
      type: 'GET',
      url: '/tweets'
    })
      .done((data) => {
        renderTweets(data);
      });
  }

  function tweetLength(data) {
    let value = $('.tweet-new > form > textarea').val().length;
    if (value < 1 || value > 140) {
      return true;
    } else {
      return false;
    }
  }

  $('.nav-button').on('click', function () {
    let $textArea = $('.tweet-new > form > textarea');
    $('.tweet-new').slideToggle('slow', function () {
      if ($('.tweet-new').is(':visible')) {
        $textArea.focus();
        $textArea.select();
      }
    });
  });

  function submitTweet(event) {
    event.preventDefault();
    const $form = $(this);
    const data = $form.serialize();

    if (tweetLength() === true) {
      $('.error').show();
      setTimeout(function() {
        $('.error').hide();
      }, 2000);
    } else {
      $.ajax({
        type: 'POST',
        url: $form.attr('action'),
        data: $form.serialize()
      })
        .done(() => {
          $('#tweetBox').val('');
          $('.counter').text(140);
          loadTweets(data);
        });
    }
  }
  
  const $form = $('#newTweet');

  $form.on('submit', submitTweet);

  loadTweets();
});