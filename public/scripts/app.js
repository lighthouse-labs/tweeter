/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$('document').ready(function () {

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


function renderTweets(tweetData) {

for ( let user of tweetData) {
    $('#tweets-container').prepend(createTweetElement(user));
  }
} // END OF RENDER TWEETS


function createTweetElement(tweetData){

  const $article  = $('<article>').addClass('boxTweet');
  const $header   = $ ('<header>').appendTo($article);
  const $p_content = $('<p>').addClass('content').appendTo($article);
  const $footer = $('<footer>').appendTo($article);

  // HEADER
  const src = tweetData.user.avatars.small;
  $('<img>').attr('src', src).appendTo($header);
  const name = tweetData.user.name;
  $('<h2>').addClass('name').text(name).appendTo($header);
  const handle = tweetData.user.handle;
  $('<p>').addClass('handle').text(handle).appendTo($header);

  // TWEET CONTENT
  const content = tweetData.content.text;
  $('<p>').text(content).appendTo($p_content);

  // FOOTER
  const created_at = tweetData.created_at;
  const realTime = new Date(created_at).toUTCString().split(' ').slice(0, 4).join(' ');
  $('<p>').addClass('date').text(realTime).appendTo($footer);

  $('<div>').addClass('logos').appendTo($footer);
  $('<i>').addClass('logos').addClass('fas fa-flag').appendTo($footer);
  $('<i>').addClass('logos').addClass('fas fa-retweet').appendTo($footer);
  $('<i>').addClass('logos').addClass('fas fa-heart').appendTo($footer);

  // RETURN
  return $article;

} // END OF FUNCTION

//POST TWEETS on same page
  $('#formTweet').on('submit', event => {
    event.preventDefault();
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: $(event.target).serialize(),
      success: function () {
        console.log('Success');
      }
    });
});


// GET TWEETS AND LOAD ONTO PAGE
function loadTweets() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: function (response) {
        renderTweets(response);
      }
    });
}

loadTweets();

}); // END OF GET READY



