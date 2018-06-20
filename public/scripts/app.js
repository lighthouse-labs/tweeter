/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {


function loadTweets() {
  $.ajax ({
    type: 'GET',
    url: '/tweets',
    success: function(data) {
      renderTweets(data);
    }
  });
}




$("form").on( "submit", function(data) {
  event.preventDefault();
  $.ajax ({
    type: 'POST',
    url: '/tweets',
    data: $(this).serialize(),
    success: function(data) {
      renderTweets(data);
    }
  });
});













// const data = [
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
// ];

function createTweetElement(tweet) {

    const icon = tweet['user']['avatars']['small'];

    const name = tweet['user']['name'];

    const handle = tweet['user']['handle'];

    const text = tweet['content']['text'];

    const timestamp = tweet['created_at'];

    const article = `<article class='tweets'>
                      <header>
                        <div>
                          <img class="icon" src='${icon}' height=50px width=50px  style="border-radius: 5px">
                          <h3 class="name">${name}</h3>
                        </div>
                        <p class="handle">${handle}</p>
                      </header>
                      <p class="text">${text}</p>
                      <footer class='clearfix'>
                        <p class="timestamp">${timestamp}</p>
                        <div>
                          <i class="fas fa-flag"></i>
                          <i class="fas fa-retweet"></i>
                          <i class="fas fa-heart"></i>
                        </div>
                      </footer>
                  </article>`



    //$('#tweets-container').append(article);
    return article;
  };

  function renderTweets(tweets) {
    for (tweet of tweets) {
      $('#tweets-container').prepend(createTweetElement(tweet));
    }
  };

  loadTweets();

});