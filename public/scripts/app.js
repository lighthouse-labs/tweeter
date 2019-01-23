/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // Test / driver code (temporary). Eventually will get this from the server.



document.addEventListener('DOMContentLoaded', function(event) {

  function createTweetElement(data) {
    let date = new Date(data.created_at);
    let $article = $('<article>').addClass('tweet');

    $article.html(`
      <header>
        <img src=${data.user.avatars.small} alt=${data.user.name}>
        <h2>${data.user.name}</h2>
        <p>${data.user.handle}</p>
      </header>
      <div class="tweet-body">
        <p>${data.content.text}</p>
      </div>
      <footer>
        <p>${date}</p>
        <div class="footer-icons">
          <img src="https://png.icons8.com/windows/64/000000/flag.png" alt="flag">
          <img src="https://png.icons8.com/windows/64/000000/available-updates.png">
          <img src="https://png.icons8.com/windows/64/000000/hearts.png">
        </div>
      </footer>
      `);
    return $article;
  };

  function renderTweets(data) {
    for (let tweets in data) {
      let tweet = data[tweets];
      let $tweet = createTweetElement(tweet);
      $('#timeline').append($tweet);
    }
  };

  // renderTweets(data);


  // Post New Tweet
  $(".new-tweet form").on("submit", function (event) {
  event.preventDefault();
  let $text = $(this).serialize();


     if (validateForm($text)) {
      $.ajax({
        type: "POST",
        url: '/tweets',
        data: $text
      });
      $('.new-tweet textarea').val('');

      // Clear timeline and load all tweets
      $('#timeline').empty();
      loadTweets();
    }

  });

  // Validate Form
  function validateForm(input) {
    let formText = input.split('=')[0];
    if (formText.length <= 0) {
      alert('You must enter a tweet to send');

      return;

    } else if (formText.length > 140 ) {
      alert('Tweet too long - max 140 characters')

      return;
    }

    return true;

  };



  // Get The Tweet
  function loadTweets() {
    $.ajax('/tweets', { method:
      'GET'})
    .then(function (tweets) {
      console.log("Success Tweets: ", tweets);
      renderTweets(tweets);
    });
  }


  loadTweets();




});


// Example function for reference
// $( "form" ).on( "submit", function( event ) {
//   event.preventDefault();
//   console.log( $( this ).serialize() );
// });



