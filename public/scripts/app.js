$( document ).ready(function() {

$('.error').hide();
$('section.new-tweet').hide();



function renderTweets(tweets) {
  tweets.forEach(function (tweet, index){

    let $tweet = createTweetElement(tweet);
    $('#tweet-container').prepend($tweet);
})
}


function createTweetElement (data) {
  let $tweet = $("<article>").addClass("tweet");
  let $header = $("<header>").addClass("tweet tweethover");
  let $span = $("<span>");
  $span.text(data.user.handle);

  let $img = $("<img>");
  $img.attr("src", data.user.avatars.regular);
  let $h1 = $("<h1>");
  $h1.text(data.user.name);

  $header.append($span);
  $header.append($img);
  $header.append($h1);
  $tweet.append($header);

  let $div = $("<div>").addClass("tweet");
  $div.text(data.content.text);
  $tweet.append($div);

  let $spanFooter = $("<span>");
  $spanFooter.text(data.created_at);
  $tweet.append($spanFooter);


  return $tweet;
}

function loadTweets (cb) {
  $.ajax('/tweets', { method: 'GET' })
  .then(function (tweetData) {
    console.log('TWEETDATA: ', tweetData);
    cb(tweetData)
    });
  };
loadTweets(renderTweets);



function formSubmission (){
  $('form').on('submit', function (event){
    event.preventDefault();
    let $form = $('form');
    const $formSerialized = $('form').serialize();
    if($('textarea.tweet-text').val() === "" || $('textarea.tweet-text').val().length > 140 ){
       $(".error").slideDown();
    } else {
      $('.error').slideUp();
      $.ajax( "/tweets", {
        method:"POST",
        data: $formSerialized
      })
      .then(function () {
        loadTweets(renderTweets)
      });
    $form[0].reset();
    }
  })
}
formSubmission();

$(function (){
  $('button.nav').click(function (){
    $('section.new-tweet').slideToggle();
    $('textarea').focus();
  })
})



});

