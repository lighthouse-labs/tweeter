


$(document).ready(function () {
  function renderTweets (tweetArray) {
    console.log(tweetArray);
    tweetArray.forEach(function(element) {
      let currentTweet = $(createTweetElement(element));
      $('.tweet').prepend(currentTweet);
    });
    return $('.tweet');
  }



  function createTweetElement (input) {

    let header_username = $('<div></div>').addClass('username');
    let header_username_p = $('<p></p>');
    $(header_username_p).text(input.user.name);
    $(header_username).append(header_username_p);
    let header_handle = $('<div></div>').addClass('handle');
    let header_handle_p = $('<p></p>');
    $(header_handle_p).append(input.user.handle);
    $(header_handle).append(header_handle_p);
    let header_image = $('<img></img>').attr('src', input.user.avatars.small);
    let header = $('<header></header>');
    $(header).append(header_image, header_username, header_handle);

    let tweet_body = $('<div></div>').addClass('tweet-body');
    let tweet_body_p = $('<p></p>');
    $(tweet_body_p).text(input.content.text);
    $(tweet_body).append(tweet_body_p);

    let footer_timestamp_p = $('<p></p>');
    $(footer_timestamp_p).text(input.created_at);
    let footer_timestamp = $('<div></div>');
    $(footer_timestamp).append(footer_timestamp_p);
    let footer = $('<footer></footer>');
    $(footer).append(footer_timestamp);

    let article = $('<article></article>');
    $(article).append(header, tweet_body, footer);
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
    } else if (newTweetText.length === 0) {
      $('.warning p').text('Goddamn it')
      return;
    }

    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: {
        text: newTweetText
      }

    }).done(function () {
      $('warning p').text('this');
      newTweet.val('');
      newTweet.focus();
      $.ajax({
        url: '/tweets',
        dataType: 'json',
        success: function(data){
          renderTweets([data[data.length - 1]]);
        }
      });
    });
  });
});




