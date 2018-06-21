/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 $('document').ready(function () {


 function renderTweets(tweets) {
    $('.tweet-container').empty();
    for(singleTweet of tweets) {
      $('.tweet-container').prepend(createTweetElement(singleTweet));
    }
 }

 function createTweetElement(tweetData) {

  const $article = $('<article>');
  const $header = $('<header>');
  const $avatar = $('<img>').attr('src', tweetData.user.avatars.small);
  const $user = $('<h1>').text(tweetData.user.name);
  const $handle = $('<p>').addClass("handle").text(tweetData.user.handle);
  const $textBody = $('<div>').addClass("tweet-text");
  const $actualTweet = $('<p>').text(tweetData.content.text);
  const $footer = $('<footer>');
  const $icons = $('<div>').addClass("tweet-icons");
  const $retweet = $('<i class="fas fa-retweet">');
  const $flag = $('<i class="fab fa-font-awesome-flag">');
  const $heart = $('<i class="fas fa-heart">');
  const $footerDate = $('<p>').text(tweetData.created_at);


  $header.append($avatar).append($user).append($handle);
  $textBody.append($actualTweet);
  $icons.append($retweet).append($flag).append($heart);
  $footer.append($footerDate).append($icons);
  $article.append($header).append($textBody).append($footer);


  return $article;
 }

 // var $tweet = createTweetElement(tweetData);

 // console.log($tweet);

 // $('.tweet-container').append($tweet);

    //****Date - TimeStamp
 // const created_at = tweetData.created_at;
 //  const realTime = new Date(created_at).toUTCString().split(' ').slice(0, 4).join(' ');
 //  $('<p>').addClass('date').text(realTime).appendTo($footer);

 //renderTweets(data[0]);

//Form Submission using AJAX to load tweets dynamically
$('#tweet-form').on('submit', event => {
  event.preventDefault();
  const tweetLength = $('textarea').val();
  const $divError = $('<div>').addClass('error');
  const $errorMsg = $('<p>').text('Please enter some text to continue.');
  const $errorMsg2 = $('<p>').text('Your tweet may not exceed 140 characters.');

  if (tweetLength.length === 0) {
     $('#tweet-form').append($divError).append($errorMsg);
  } else if (tweetLength.length > 140) {
     $('#tweet-form').append($divError).append($errorMsg2);
    console.log('Your tweet may not exceed 140 characters.');
  } else {
  $.ajax({
    url: '/tweets',
    method: 'POST',
    data: $(event.target).serialize(),
    success: function () {
      loadTweets();
      $('textarea').val(null);
    }
  });
  }
});

function loadTweets() {
  $.ajax({
    url: '/tweets',
    method: 'GET',
    success: function (content) {
      renderTweets(content);
      $('textarea').val(null);
    }
  });
}

loadTweets();

$('.nav-button').click(function () {
  $('.new-tweet').slideToggle(150);
  $('textarea').focus();
});


});







































