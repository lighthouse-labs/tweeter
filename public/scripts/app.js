$( document ).ready(function() {

$('.error').hide();
$('section.new-tweet').hide();



function renderTweets(tweets) {
    $('#tweet-container').empty();
  tweets.forEach(function (tweet, index){
    let $tweet = createTweetElement(tweet);
    $('#tweet-container').prepend($tweet);
})
}

function timeSince(date) {
    var seconds = Math.floor((new Date() - date) / 1000);
    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
      return interval + " years ago";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
      return interval + " months ago";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
      return interval + " days ago";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
      return interval + " hours ago";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
      return interval + " minutes ago";
    }
    return Math.floor(seconds) + " seconds ago";
  }

function createTweetElement (data) {
  let $tweet = $("<article>").addClass("tweet tweethover");
  let $header = $("<header>").addClass("tweet tweethover");
  let $span = $("<span>").addClass("headerSpan");
  $span.text(data.user.handle);

  let $img = $("<img>").addClass("img");
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


  let $footer = $("<div>").addClass("footer")
  let $spanFooter = $("<span>").addClass("tweet");
  let $footerImgFlag = $("<span>").addClass("fas fa-flag");
  let $footerImgLike = $("<span>").addClass("fas fa-thumbs-up");
  let $footerImgRetweet = $("<span>").addClass("fas fa-retweet");
  let $footerSpanForFloat = $("<div>").addClass("floatRight")
  let $hr = $("<hr>")
  $spanFooter.text(timeSince(data.created_at));
  $footer.append($spanFooter);
  $footerSpanForFloat.append($footerImgFlag);
  $footerSpanForFloat.append($footerImgLike);
  $footerSpanForFloat.append($footerImgRetweet);
  $footer.append($footerSpanForFloat);
  $footer.prepend($hr);
  $tweet.append($footer);


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

