
$('document').ready(function () {

  $('.new-tweet').hide();

  $('.compose').on('click', function (event) {
  $('.new-tweet').slideToggle(200);
  $('textarea').focus();
  });

// RENDER TWEETS
function renderTweets(tweetData) {
for ( let user of tweetData) {
    $('#tweets-container').prepend(createTweetElement(user));
  }
} // END OF RENDER TWEETS


// CREATE TWEET
function createTweetElement(tweetData){

  const $article   = $('<article>').addClass('boxTweet');
  const $header    = $ ('<header>').appendTo($article);
  const $p_content = $('<p>').addClass('content').appendTo($article);
  const $footer    = $('<footer>').appendTo($article);

  // HEADER
  const src = tweetData.user.avatars.small;
  $('<img>').attr('src', src).appendTo($header);
  const name = tweetData.user.name;
  $('<h2>').addClass('name').text(name).appendTo($header);
  const handle = tweetData.user.handle;
  $('<p>').addClass('handle').text(handle).appendTo($header);

  // TWEET CONTENT
  const content = tweetData.content.text;
  $('<p>').text(content).appendTo($p_content);


  // FOOTER
  // TIME STAMP
  const created_at = tweetData.created_at;
  const realTime = new Date(created_at).toUTCString().split(' ').slice(0, 4).join(' ');
  $('<p>').addClass('date').text(realTime).appendTo($footer);

  // LOGOS
  $('<div>').addClass('logos').appendTo($footer);
  $('<i>').addClass('logos').addClass('fas fa-flag').appendTo($footer);
  $('<i>').addClass('logos').addClass('fas fa-retweet').appendTo($footer);
  $('<i>').addClass('logos').addClass('fas fa-heart').appendTo($footer);

  return $article;

} // END OF CREATE TWEET


// POST TWEETS ON SAME PAGE. (Using Ajax)
$('#formTweet').on('submit', event => {
  event.preventDefault();

  let $container = $('.errorMessage')
  let $formTweet = $('textarea').val().length; // Checking value of textarea to make sure no more than 140 characters, and not empty tweet

  let emptyTweet = "We're sure you're not trying to post an empty tweet! Try again";
  let overChar   = 'Too many characters!';

  $('.errorMessage').remove();

  if ($formTweet === 0) {

    $('<div>').addClass('errorMessage').text(emptyTweet).appendTo('.new-tweet');

  } else if ($formTweet > 140) {
    $('<div>').addClass('errorMessage').text(overChar).appendTo('.new-tweet');

  } else {
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: $(event.target).serialize(),
      success: function () {
        loadTweets()
        $('textarea').val(null);
        resetCounter(event.target);
      }
    });
  }
}); // END OF POST AJAX


// GET TWEETS AND LOAD ONTO PAGE
function loadTweets() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: function (response) {
        renderTweets(response);
      }
    });
}  // END OF GET AJAX

loadTweets()


function resetCounter(form) {
  $('#formTweet').val(null);
  $(form).find('.counter').text(140);
}

}); // END OF GET READY



