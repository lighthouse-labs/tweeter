/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
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
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

// $(document).ready(function () {
//   function createTweetElement(tweet) {
//     const name = tweet.user.name;
//     const avatars = tweet.user.avatars;
//     const handle = tweet.user.handle;
//     const content = tweet.content.text;
    
//     const created = moment(tweet.created_at).fromNow();
//     let $tweet = 
//     `<section class="kuro">
//     <header id="tweetHeader">
//     <div id="avatarName">
//     <img src="${avatars}"/> 
//     <p>${name}</p>
//     </div>  
//     <p id="handle">${handle}</p>    
//     </header>
//     <article id="article">
//       ${content}  
//     </article> 
//     <footer class='footer'>
//     ${created}
//     <div>
//       <i class="fas fa-flag"></i>
//       <i class="fas fa-retweet"></i>
//       <i class="fas fa-heart"></i>
//     </div> 
//     </footer>`;
//     return $tweet;    
//   };
// const $tweet = createTweetElement(initalTweets[0]);
// const $tweet2 = createTweetElement(initalTweets[1]);

//   $('#tweets-container').prepend($tweet); 
//   $('#tweets-container').prepend($tweet2);// to add it to the page so we can make sure it's got all the right elements, classes, etc.
// })


$(document).ready(function () {


const renderTweets = function(data) {
  data.forEach((tweets) => {
    console.log("look at me", tweets)
    const $tempData = createTweetElement(tweets);
    $('#tweets-container').prepend($tempData);
  });
  $(this).val('');
};

const createTweetElement = function(tweet) {
    const name = tweet.user.name;
    const avatars = tweet.user.avatars;
    const handle = tweet.user.handle;
    const content = tweet.content.text;
    const created = moment(tweet.created_at).fromNow()
  let $tweet = `<section class="kuro">
      <header id="tweetHeader">
      <div id="avatarName">
      <img src="${avatars}"/> 
      <p>${name}</p>
      </div>  
      <p id="handle">${handle}</p>    
      </header>
      <article id="article">
        ${content}  
      </article> 
      <footer class='footer'>
      ${created}
      <div>
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div> 
      </footer>
      </section>`;
      return $tweet;    
    }

renderTweets(data)
})

