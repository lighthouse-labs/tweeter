/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

function createTweetElement(tweetData) {
  let html = `<article>
                <header>
                  <img class="tweet-avatar" src="${escape(tweetData.user.avatars.regular)}">
                  <h2 class="author">${escape(tweetData.user.name)}</h2>
                  <span class="author-handle">${escape(tweetData.user.handle)}</span>
                </header>
                <p>
                  ${escape(tweetData.content.text)}
                </p>
                <footer>
                  <time datetime="${(new Date(tweetData.created_at)).toUTCString()}">${formatTime(tweetData.created_at)}</time>
                  <ul class="tweet-actions">
                    <li><i class="fa fa-flag" aria-hidden="true"></i></li>
                    <li><i class="fa fa-retweet" aria-hidden="true"></i></li>
                    <li><i class="fa fa-heart" aria-hidden="true"></i></li>
                  </ul>
                </footer>
              </article>`
  return $(html);
}

function renderTweets(tweetsArr) {
  tweetsArr.forEach((tweetObj) => {
    const $tweet = createTweetElement(tweetObj);
    $('#tweets').prepend($tweet);
  })
}

function formatTime(date) {
  if (typeof date !== 'object') {
    date = new Date(date);
  }
  let seconds = Math.floor((new Date() - date) / 1000);
  let intervalType;
  let interval = Math.floor(seconds / 31536000);
  if (interval >= 1) {
    intervalType = 'year';
  } else {
      interval = Math.floor(seconds / 2592000);
      if (interval >= 1) {
        intervalType = 'month';
      } else {
          interval = Math.floor(seconds / 86400);
          if (interval >= 1) {
            intervalType = 'day';
          } else {
              interval = Math.floor(seconds / 3600);
              if (interval >= 1) {
                intervalType = "hour";
              } else {
                  interval = Math.floor(seconds / 60);
                  if (interval >= 1) {
                    intervalType = "minute";
                  } else {
                      interval = seconds;
                      intervalType = "second";
                  }
              }
          }
      }
  }
  if (interval > 1 || interval === 0) {
    intervalType += 's';
  }
  return `${interval} ${intervalType} ago`;
};

function validateTweet(content) {
  if (content && content.length < 141 && content.match(/\w/)) {
    return true;
  }
  if (content.length > 140) {
    $('.flash').text('too much words :()').show();
  } else {
    $('.flash').text('too little words :(').show();
  }
}

function loadTweets(all) {
  $.ajax({
    url: '/tweets',
    type: 'get',
    contentType: 'json'
  }).then(function(response) {
    if (all) {
      renderTweets(response);
    } else {
      const lastTweet = response[response.length - 1];
      renderTweets([lastTweet]);
    }
  });
}

$(function(){

  $('#nav-bar button').on('click', function(e) {
    $('.new-tweet').slideToggle('slow').focus();
    return false;
  });

  $('.new-tweet form').on('submit', function(e) {
    e.preventDefault();
    const content = $(this).find('textarea').val();
    if (validateTweet(content)) {
      $.ajax({
        url: '/tweets',
        type: 'post',
        data: $(this).serialize(),
        contentType: 'application/x-www-form-urlencoded'
      }).then(function() {
          $('.new-tweet form')[0].reset();
          $('.flash').text('').hide();
          loadTweets();
      });
    }
  });

  loadTweets('all');
})