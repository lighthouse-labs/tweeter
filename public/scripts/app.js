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


$(document).ready(function() {


  $(function() {
    var $form = $('#tweetForm');
    var $textarea = $('#textarea');

    $form.on('submit', function (event) {

      if (($textarea).val() === "" ) {

        alert('Cannot post empty tweet!')

      } else if (($textarea).val().length > 140 ) {

        alert('Tweets must be less than 140 characters!')


      } else {


        let $formData = $(this).serialize();
        $.ajax({
          url: '/tweets',
          method: 'POST',
          data: $formData,
          success: function () {
            loadTweets();
            console.log('Success')

          }
        });
      };
      event.preventDefault();
    });
  });


  function loadTweets () {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: function (fetchedData) {
        renderTweets(fetchedData);
      }
    });
  }



loadTweets();


function renderTweets(tweets) {

  tweets.forEach(function( tweet) {
    $('#tweet-container').prepend(createTweetElement(tweet));
  });
}

renderTweets(data);


  function createTweetElement (tweetObject) {

    let $tweet = $("<article>").addClass("tweet")

    const $article = $('<article>').addClass('w3-container');

    const $header = $('<header>').addClass('tweetBanner').addClass('clearfix');


    $('<img>').addClass('logo').attr("src", tweetObject.user.avatars.small).appendTo($header);
    $('<h2>').addClass('tweetHeader').text(tweetObject.user.name).appendTo($header);
    $('<p>').addClass('tweetHandle').text(tweetObject.user.handle).appendTo($header);


    const $footer = $('<footer>').addClass('tweetFoot').addClass('clearfix');

    $('<p>').text(tweetObject.created_at).appendTo($footer)

    const $icons = $('<div>').addClass('icons');


    $('<i>').addClass('fas').addClass('fa-flag').appendTo($icons);
    $('<i>').addClass('fas').addClass('fa-heart').appendTo($icons);
    $('<i>').addClass('fas').addClass('fa-retweet').appendTo($icons);

    $article.append($header);

    $('<div>').addClass('content').text(tweetObject.content.text).appendTo($article);
    $footer.append($icons)
    $article.append($footer);

    return $article;

  }  // createTweetElement

});


