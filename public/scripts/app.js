/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

/**
 * Create page header content
 *
 * @param Object - individual tweet
 *
 * @return Element
 */
function createHeader(tweetObj) {
  let header = $('<header/>', {
    'class': 'tweet-header'
  });
  let imgBox = $('<div/>', {
    'class': 'image-box'
  });

  let img = $('<img/>', {
    'src': tweetObj['user']['avatars']['small']
  });
  $(imgBox).append(img);

  let title = $('<h2/>', {});
  $(title).append(document.createTextNode(tweetObj['user']['name']));
  let aside = $('<aside/>', {
    'class': 'at'
  });

  $(aside).append(document.createTextNode(tweetObj['user']['handle']));
  $(header).append(imgBox);
  $(header).append(title);
  $(header).append(aside);

  return header;
}

function createText(tweetObj) {
  let text = $('<p/>', {
    'class': 'text'
  });

  $(text).append(document.createTextNode(tweetObj['content']['text']));
  return text;
}

function timeElapsed(time) {
  let currentTime = new Date();
  let msCurrTime = currentTime.getTime();
  console.log(msCurrTime)
  let ago = msCurrTime - time
  console.log(ago)
  if (ago < 0) {
    return 0;
  } else {

  let days = Math.floor(ago / 86400000)
  console.log(days)
  return days
  }
}

function createFooter(tweetObj) {
  let footer = $('<footer/>', {
    'class': 'tweet-footer'
  });
  let date = $('<p/>', {
    'class': 'date'
  });

  let days = timeElapsed(tweetObj['created_at'])
  $(date).append(document.createTextNode(days + ' days ago'));
  $(footer).append(date);
  let options = $('<div/>', {
    'class': 'options'
  });
  let ul = $('<ul/>', {
    'class': 'buttons'
  });

  let flag = $('<i class="far fa-flag"/>')
  let retweet = $('<i class="fas fa-retweet"/>');
  let like = $('<i class="far fa-heart"/>')
  let logoButtons = [flag, retweet, like];
  logoButtons.forEach((logo) => {
    let li = $('<li/>');
    $(li).append(logo);
    $(ul).append(li);
  });
  $(options).append(ul);
  $(footer).append(options);
  return footer;
}

function createTweetElement(tweetObj) {
  let tweet = $('<article/>', {
    'class': 'tweet'
  });

  let header = createHeader(tweetObj);
  $(tweet).append(header);

  let text = createText(tweetObj);
  $(tweet).append(text);

  let footer = createFooter(tweetObj);
  $(tweet).append(footer);

  return tweet;
}

function renderTweets(tweets) {
  tweets.forEach((tweet) => {
    let $tweet = createTweetElement(tweet);
    $('.tweets').append($tweet);
  });

}

/**
  * Fetch Tweets from /tweets page
*/

function loadTweets() {
  $.get('/tweets', function(data) {
    data.reverse()
    renderTweets(data)
  });
}



$(document).ready(function() {
  loadTweets()

});

