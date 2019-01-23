/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // Test / driver code (temporary). Eventually will get this from the server.
 const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "How did the hipster burn his tongue? He drank his coffee before it was cool"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "This is a random tweet."
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "This is a random tweet."
    },
    "created_at": 1461113796368
  }
];


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


    $.ajax({
        type: "POST",
        url: '/tweets',
        data: $text
    });


  });

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



