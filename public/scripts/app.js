
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


$(document).ready(function() {


let $tweet = $("<article>").addClass("tweet")


function createTweetElement (tweetObject) {


  const $article = $('<article>').addClass('w3-container');


  $('<img>').addClass('logo').attr("src", tweetObject.user.avatars.small).appendTo($article);


  const $header = $('<header>').addClass('tweetBanner');
  $('<h2>').addClass('tweetHeader').text(tweetObject.user.name).appendTo($header);
  $('<p>').addClass('tweetHandle').text(tweetObject.user.handle).appendTo($header);


  const $footer = $('<footer>').addClass('tweetFoot');

  $('<hr>').appendTo($footer);
  $('<p>').text(tweetObject.created_at).appendTo($footer)


  $article.append($header);

  $('<p>').text(tweetObject.content.text).appendTo($article);
  $article.append($footer);

  return $article;

}

const $createdTweet = createTweetElement(tweetData);
// $('#tweet-container').append($createdTweet); // line 58 - <section id='tweet-container'>


function renderTweets(cb) {
  console.log("tweets are rendered!");

}

// renderTweets(createTweetElement());

});



 // <div class='icons'>
 //            <i class="fas fa-flag"></i>
 //            <i class="fas fa-heart"></i>
 //            <i class="fas fa-retweet"></i>
 //          </div>




