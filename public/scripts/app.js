$( document ).ready(function() {



function renderTweets(tweets) {
  console.log(tweets);
  // const $container = $('#tweet-container')
  tweets.forEach(function (tweet, index){

    let $tweet = createTweetElement(tweet);
    $('#tweet-container').prepend($tweet);
})
  // return $container;
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


// Test / driver code (temporary)

 // to see what it looks like
// $('#tweet-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
// $('$tweet').append($("<header>"))
// $('article').append($("<header>").addClass("tweet"));
// $('article').append($("<div>").addClass("tweet"));
// $('article').append($("<footer>").addClass("tweet"));
// function loadTweets (cb) {
//   $.ajax('/tweets', { method: 'GET' })
//   .then(function (tweetData) {
//     console.log('TWEETSDATA: ', tweetData);
//     cb(tweetData)
//   });
// }

// loadTweets(renderTweets)

function loadTweets (cb) {
  $.ajax('/tweets', { method: 'GET' })
  .then(function (tweetData) {
    console.log('TWEETDATA: ', tweetData);
    cb(tweetData)


    // console.log(tweetData)
    });
  };




function formSubmission (){
  $('form').on('submit', function (event){
    event.preventDefault();
    let $form = $('form');
    console.log($form.content)

    // console.log($form);
    const $formSerialized = $('form').serialize();
    // console.log($formSerialized);
    console.log($('textarea.tweet-text').val());
    if($('textarea.tweet-text').val() === "" || $('textarea.tweet-text').val().length > 140 ){
      alert('tweets cannot be empty or over 140 characters')
    } else {
      $.ajax( "/tweets", {
        method:"POST",
        data: $formSerialized
      })
      .then(function () {
        loadTweets(renderTweets)
      });
    // console.log($form);
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

