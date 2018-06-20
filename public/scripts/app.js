/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 $('document').ready(function () {


 function renderTweets(tweets) {

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
  console.log('hello');
  $.ajax({
    url: '/tweets',
    method: 'POST',
    data: $(event.target).serialize(),
    success: function () {
      console.log('success!');
    }

  });
});

function loadTweets() {
  $.ajax({
    url: '/tweets',
    method: 'GET',
    success: function (content) {
      renderTweets(content[0]);
      $('.tweet-container').prepend(createTweetElement(content[0]));
      $('.tweet-container').prepend(createTweetElement(content[1]));


    }
  });
}

loadTweets();




});







































