const escape = function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = function(data) {
  let $tweet = $(`<article class="tweet-container"><header>
  <div><img src=${data["user"]["avatars"]}> &nbsp;${data["user"]["name"]}</div>
  <div class="handle">${data["user"]["handle"]}</div></header>
  <p class="tweet-body">${escape(data["content"]["text"])}</p>
  <footer><div class="tweet-date">${data["created_at"]}</div>
  <div class="action-icons">
  <i class="fa fa-flag"></i> &nbsp;
  <i class="fa fa-retweet"></i> &nbsp;
  <i class="fa fa-heart"></i>
  </div></footer>
  </article>`);
  return $tweet;
};

const renderTweets = function(data) {
  $('.tweets').empty();
  for (const singleTweet of data) {
    let $tweet = createTweetElement(singleTweet);
    $('.tweets').prepend($tweet);
  }
};

const loadTweets = function() {
  $.ajax('/tweets', { method: 'GET' })
    .then(function(data) {
      renderTweets(data);
    });
};



$(document).ready(function() {
  loadTweets();

  $('#send-tweet').on('submit', function(event) {
    event.preventDefault();

    let serializedData = $(this).serialize();
    if (serializedData === "text=") {
      alert("No tweet is present");
    } else if (serializedData.length > 140) {
      alert("Your tweet is too long");
    } else {
      $.ajax({ data: serializedData, method: 'POST', url: '/tweets' })
        .then((result) => {
          loadTweets();
          $('.text-area').val('');
        });
    }
  });
});