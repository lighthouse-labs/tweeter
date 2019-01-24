


// console.log($tweet);
$(document).ready(function() {

  /*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



const tweetData = {
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
    "text": "If I have seen further it is by standing on the shoulders of giants"
  },
  "created_at": 1461116232227
}


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
      "text": "If I have seen further it is by standing on the shoulders of giants"
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
      "text": "Je pense , donc je suis"
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
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

/* Validation -

*/

  $('new-tweet').hide();


  $('form').submit(function(e) {
    e.preventDefault();

  if ($('span.counter').text() < 0 || $('span.counter').text == 140) {
    alert("ERROR! WRONG AMOUNT OF TEXT!");
  } else {


    var form = $(this);

    $.ajax({
      method: "POST",
      url: "/tweets",
      data: form.serialize(),
      success: function(responseFromServer) {

        console.log(responseFromServer);
        loadTweets();
      }

    })
  }
  })



  function loadTweets() {


    var form = $(this);

      $.ajax({
              method: "GET",
              url: "/tweets",
              data: form.serialize(),
              success: function(responseFromServer) {
              console.log(responseFromServer);
              let newTweets = renderTweets(responseFromServer);


                  $('.all-tweets').empty();
                  $('.all-tweets').append(newTweets);

            }
      });
  }



  function renderTweets(tweets) {
  // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container

    let allTweets = [];
    for (let i = 0; i < tweets.length; i++) {
      allTweets.unshift(createTweetElement(tweets[i]));

    }

  return allTweets;

}



  function createTweetElement (data) {
  // alert(`OH NO!`);

    const $article = $('<article>');
    $article.addClass('tweet');




    const $header = $('<header>');

    const $img = $('<img>');
    $img.addClass('tweet-logo');
    $img.prop('src', data.user.avatars.small);

    const $username = $('<div>');
    $username.addClass('tweet-username');
    $username.text(data.user.name);

    const $tweetHandle = $('<span>');
    $tweetHandle.addClass('tweet-handle');
    $tweetHandle.text(data.user.handle);

    $header.append($img);

    $header.append($username);

    $header.append($tweetHandle);





    const $body = $('<div>');
    $body.addClass('tweet-body');

    const $tweetMessage = $('<span>');
    $tweetMessage.addClass('tweet-message');
    $tweetMessage.text(data.content.text);

    $body.append($tweetMessage);




    const $footer = $('<footer>');

    const $timestamp = $('<span>');
    $timestamp.addClass('tweet-timestamp');
    $timestamp.text(data.created_at);
    $timestamp.addClass("fas fa-heart");

    $footer.append($timestamp);




    $article.append($header);

    $article.append($body);

    $article.append($footer);





    return $article;
  }



loadTweets();
  // var $tweet = renderTweets(data);  // var $tweet = renderTweets(data);
  // console.log('$tweet', $tweet)
  // console.log('loaded!');
  // $('.all-tweets').append($tweet);
})