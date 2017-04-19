/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function createTweetElement(tData) {
  // handle XSS
  function escape(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  let tweet = '';

  const user = tData.user.name;
  const handle = tData.user.handle;
  const avatar = tData.user.avatars.small;
  const content = escape(tData.content.text);
  const dateAgo = moment(tData.created_at).fromNow();
  // console.log(dateago);
  tweet = `<article>
            <header>
              <span class='avatar'><img src='${avatar}' width='55px' height='55px'></span>
              <h2>${user}</h2>
              <span class='twt-acct'>${handle}</span>
            </header>
            <div class='content'>${content}</div>
            <footer>
              <span class='postdate'>${dateAgo}</span>
              <div class='social'>
                <span><i class='fa fa-flag' aria-hidden='true'></i></span>
                <span><i class='fa fa-retweet' aria-hidden='true'></i></span>
                <span><i class='fa fa-heart' aria-hidden='true'></i></span>
              </div>
            </footer>
          </article>`;

  return tweet;
}

function renderTweets(tweets) {
    $('.tweets-container').empty();
  tweets.forEach(function (element) {
    let tweet = createTweetElement(element);
    $('.tweets-container').prepend(tweet);
  });
}

$(document).ready(function () {
  function loadTweets() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: "json",
      success: renderTweets
    });
  }

  loadTweets();

  $("form").on("submit", function (event) {
    event.preventDefault();
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: $(this).serialize(),
      success: loadTweets
    });
  });

});