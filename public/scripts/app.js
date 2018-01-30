/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// A $( document ).ready() block.
$( document ).ready(function() {

  // Fake data taken from tweets.json
  const data = [
  //   {
  //     "user": {
  //       "name": "Newton",
  //       "avatars": {
  //         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
  //         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
  //         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
  //       },
  //       "handle": "@SirIsaac"
  //     },
  //     "content": {
  //       "text": "If I have seen further it is by standing on the shoulders of giants"
  //     },
  //     "created_at": 1461116232227
  //   },
  //   {
  //     "user": {
  //       "name": "Descartes",
  //       "avatars": {
  //         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
  //         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
  //         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
  //       },
  //       "handle": "@rd" },
  //     "content": {
  //       "text": "Je pense , donc je suis"
  //     },
  //     "created_at": 1461113959088
  //   },
  //   {
  //     "user": {
  //       "name": "Johann von Goethe",
  //       "avatars": {
  //         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
  //         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
  //         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
  //       },
  //       "handle": "@johann49"
  //     },
  //     "content": {
  //       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
  //     },
  //     "created_at": 1461113796368
  //   }
  ];

  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }


  function createTweetElement(tweet) {

    let fullName = tweet.user.name;
    let avatarUrl = tweet.user.avatars.small;
    let atName = tweet.user.handle;
    let tweetContent = tweet.content.text;

    // let utcSeconds = tweet.created_at;
    let timeStamp = Date(tweet.created_at).toString();


    let $tweet = $('<div id="tweet-container"><div class="header"><header><img alt="vanil12" src="' + avatarUrl + '"><span class="full-name"> ' + fullName + ' </span><span class="at-name"> ' + atName + ' </span></header></div><article><p> ' + escape(tweetContent) + ' </p></article><footer><span> ' + timeStamp + ' </span><div class="icons"><i class="fa fa-flag mini-icons" aria-hidden="true"></i><i class="fa fa-retweet mini-icons" aria-hidden="true"></i><i class="fa fa-heart mini-icons" aria-hidden="true"></i></div></footer></div>');

    return $tweet;

  }


  function renderTweets(tweets) {
    // loops through tweets
    for(tweet in tweets){
      // calls createTweetElement for each tweet
      let fullTweet = createTweetElement(tweets[tweet]);

      // takes return value and appends it to the tweets container
      $('#display-tweets').prepend(fullTweet);
    }
  }

  function loadTweets($myTweet){
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: function ($myTweet) {
        renderTweets($myTweet);
      }
    });
  }

  renderTweets(data);

  $( "form" ).on('submit', function( event ) {

    $('.flash').remove();

    let string = $("textarea").val();
    string = string.replace(/\s+/g, '');

    if (string.length <= 0){
       $('.new-tweet').append("<p class='flash'> Alert, message cannot be empty !!!</p>");
       event.preventDefault();
       return;
    }

    if (string.length > 140){
     $('.new-tweet').append("<p class='flash'> Alert, message must be less or equal to 140 characters !!!</p>");
     event.preventDefault();
     return;
    }

    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: $(this).serialize(),
      // error: function() {

      // },
      success: function () {
        loadTweets();
      }
    });

    event.preventDefault();
  });

  $( "#nav-bar button").on('click', function(){
    $(".new-tweet").slideToggle();
    if ($(".new-tweet").is(':visible'))
    {
        $("textarea").focus();
    }
// slideup slidedown
  });




}); // Document ready end
