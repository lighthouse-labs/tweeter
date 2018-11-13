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
};


/*
<article>
  <header class='tweet'>
    <img class="propic" src="/images/rd.png">
    <h2 class="name">Rene Descartes</h2>
    <h3 class="handle">@rd</h3>
  </header>
  <p class="tweetp">
    It is not enough to have a good mind; the main thing is to use it well.
    Divide each difficulty into as many parts as is feasible and necessary to resolve it.
    The greatest minds are capable of the greatest vices as well as of the greatest virtues.
  </p>
  <footer>
    <h6 class="submitted">11 days ago</h6>
  </footer>
</article>
          */



let createTweetElement = function(twt) {
  let $tweet = $("<article>");

  let $header = $('<header>').addClass('tweet');
  let $img = $('<img>').addClass('propic');

  let $h2 = $('<h2>').addClass('name');
  let $h3 = $('<h3>').addClass('handle');


  let $p = $('<p>').addClass('tweetp');

  let $footer = $('<footer>');
  let $h6 = $('<h6>').addClass('submitted');

  $tweet.append($header);
  $header.append($img);
  console.log('twt',twt);
  $img.attr("src",twt.user.avatars.regular)
  $header.append($h2);
  $header.append($h3);
  $h2.text(twt.user.name);
  $h3.text(twt.user.handle);
  $tweet.append($p);
  $p.text(twt.content.text);
  $tweet.append($footer);
  $footer.append($h6)
  $h6.text(twt.created_at);

  return $tweet;
  
};



// --------------------------------------------------------------------------------------------------------------------





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

const $tweetContainer = $('.tweetContainer');

let renderTweets = function(tweets) {
  $(document).ready(function() {
    for (var ea in tweets) {
      var $tweet = createTweetElement(tweets[ea])
      $tweetContainer.append($tweet);
    }
  }
)};
// renderTweets(data);

let submitHandler = function(event) {
  $(document).ready(function() {
    event.preventDefault();
    $.ajax({data: $(this).serialize() ,url:'/tweets', method: "POST"})
    .success(function(data){
      console.log(data);
    
    })
    .done(function() {
      $('textarea').val('');
      $('.counter').text(140);
    })
  });
  const $form = $('form')
  $form.submit(submitHandler);
};

let loadTweets = function() {
  $(document).ready(function() {
    $.ajax({url:'/tweets',
      method: "GET",
      success: (function(result){
        console.log(result)
        renderTweets(result);
      })
    })
  }
)};

loadTweets()