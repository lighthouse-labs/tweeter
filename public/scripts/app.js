/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */



$(document).ready(function () {
  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": {
        "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }

  // function createTweetElement() {
  //   // var $tweet2 = $("<p>" + tweetData.user.name + "</p>");
  //   // return $tweet2
  //   // var returnTweet = '<span class="handle">' + tweetData.user.handle + '</span>'
  //   var returnTweet =

  //     return $(returnTweet)
  // }


  function createTweetElement() {
    let $tweet = $("<article class='tweet'>\
    <header>\
          <span class='avatar'>\
            <img src='" + tweetData.user.avatars.small + "' class='avatar'>\
          </span>\
          <span class='name'>" + tweetData.user.name + "</span>\
          <span class='handle'>" + tweetData.user.handle + "</span>\
        </header>\
        <section class='tweet'>\
          <p>" + tweetData.content.text + "</p>\
        </section>\
        <footer>\
          <span class='date'>" + tweetData.created_at + "</span>\
          <span class='icons'>\
            <i class='fas fa-flag'></i>\
            <i class='fas fa-retweet'></i>\
            <i class='fas fa-heart'></i>\
          </span>\
        </footer>\
      </article>")
    return $tweet
  }
  // function createTweetElement() {
  //   let $tweet = $('<article>').addClass('tweet');
  //   $('<header>');
  //   $('<span>').addClass('avatar');
  //   // $('<img src="' + tweetData.user.avatars.small + '" class="avatar">');
  //   $('<span class="handle">' + tweetData.user.handle + '</span>')
  //   $('</span>');
  //   $('</article>');
  //   return $tweet
  // }

//   var $element1 = $("\
//     <div><h1>" + title + "</h1>\
//         <div class='content'>  \
//         " + content + "        \
//         </div>                 \
//     </div>                     \
// ");
  // var $element2 = $("<div><h1>" + title + "</h1><div class='content'>" + content + "</div></div>");

  // <article class="tweet">
  //     <header>
  //       <span class="avatar">
  //         "<img src=" + tweetData.user.avatars.small + "class="avatar">"
  //       </span>
  //       <span class="name"> + tweetData.user.name + </span>
  //       <span class="handle"> + tweetData.user.handle + </span>
  //     </header>
  //     <section class="tweet">
  //       "<p>" + tweetData.user.content.text + "</p>"
  //     </section>
  //     <footer>
  //       "<span class="date">" + tweetData.user.created_at + "</span>"
  //       <span class="icons">
  //         <i class="fas fa-flag"></i>
  //         <i class="fas fa-retweet"></i>
  //         <i class="fas fa-heart"></i>
  //       </span>
  //     </footer>
  //   </article>



  // var test = "This is working2"

  // tweetData.user.avatars.small
  // tweetData.user.handle
  // tweetData.user.content.text
  // tweetData.user.created_at



  var $tweet = createTweetElement(tweetData);
  // var $tweet = $("<div>" + test + "</div>");
  // var $tweet = $("<p>This is working</p>");
  // var $tweet = $("This is working");

  // alert($tweet)
  console.log($tweet);
  $('#tweets-container').append($tweet);
})
