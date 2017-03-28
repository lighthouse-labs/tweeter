$(document).ready(function () {

  function renderTweets (tweetArray) {
    tweetArray.forEach(function(element) {
      let currentTweet = $(createTweetElement(element));
      $('.tweet').prepend(currentTweet);
    });
    return $('.tweet');
  }

  function createTweetElement (input) {
    let postDate = new Date(input.created_at).toDateString();
    let header_username = $('<div></div>').addClass('username').append('<p>' + input.user.name + '</p>');
    let header_handle = $('<div></div>').addClass('handle').append('<p>' + input.user.handle + '</p>');
    let header_image = $('<img></img>').attr('src', input.user.avatars.small);
    let header = $('<header></header>').append(header_image, header_username, header_handle);

    let tweet_body = $('<div></div>').addClass('tweet-body').append('<p>' + input.content.text + '</p>')

    let footer_timestamp = $('<div></div>').append('<p>' + postDate + '</p>');
    let footer = $('<footer></footer>').append(footer_timestamp);

    let article = $('<article></article>').append(header, tweet_body, footer);
    return article;
  }

  $('.toggle').on('click',function () {
    $('.new-tweet').slideToggle("slow", function() {
      $('.text-area').focus();
    });
  });

  $.ajax({
    method: 'GET',
    url: '/tweets',
  }).done(function (tweets) {
    renderTweets(tweets);
  });

  $('#tweet-form').on('submit', function (event) {
    event.preventDefault();
    var newTweet = $('.text-area');
    var newTweetText = newTweet.val();

    if (newTweetText.length > 140) {
      $('.warning p').text('Tweet is too long.')
      return;
    } else if (newTweetText.length === 0 || newTweetText.trim() === '') {
      $('.warning p').text('Uh, nothing here...')
      return;
    } else {
      $('.warning p').text('');
      $.ajax({
      url: '/tweets',
      method: 'POST',
      data: {
        text: newTweetText
      }
      }).done(function () {
      newTweet.val('');
      newTweet.focus();
      $.ajax({
        url: '/tweets',
        dataType: 'json',
        success: function(data) {
          renderTweets([data[data.length - 1]]);
        }
      });
    });
    }
  });
});




