const tweetData = [
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

function renderTweets(tweets) {
  // const $container = $('#tweet-container')
  tweets.forEach(function (tweet, index){
    let $tweet = createTweetElement(tweet);
    $('#tweet-container').append($tweet);
  })
  // return $container;
}

function getUserId(user){

}

function createTweetElement (data) {
  let $tweet = $("<article>").addClass("tweet");
  let $header = $("<header>").addClass("tweet");
  let $span = $("<span>");
  $span.text(data.user.handle);

  let $img = $("<img>");
  $img.attr("src", data.user.avatars.regular);
  let $h1 = $("<h1>");
  $h1.text(data.user.name);

  $header.append($span);
  $header.append($img);
  $header.append($h1);
  $tweet.append($header);



  // let $tweet = $("<article>").addClass("tweet");
  // // $tweet.text(data.content.text);
  // let $header =$("<header>").addClass("tweet").appendTo($tweet);
  // // let $img = $("<img>").prop('src').append(data.user.avatars.regular).appendTo($header);
  // let $h1 = $("<h1>").addClass("tweet").append(data.user.name).appendTo($header);
  // let $span = $("<span>").addClass("tweet").append(data.handle).appendTo($header);

  // // let $h1 = $("<h1>").addClass("tweet");
  // $h1.append(data.user.name);
  // let $img = $("<img>");
  // $img.append(data.user.avatars.regular);
  // let $header = $("<header>").addClass("tweet");
  // let $span = $("<span>").addClass("tweet");
  // $span.text(data.handle);
  // console.log($span)

  // // let $header = $tweet.append($("<header>").addClass("tweet"));
  // $header.append($img);
  // $header.append($h1);
  // $header.append($span);
  // $tweet.append($header);
  // $tweet.append($("<div>").addClass("tweet").text(data.content.text))
  // // $tweet.append($("<div>").addClass("tweet").text(renderTweets(tweetData)));
  // $tweet.append($("<footer>").addClass("tweet"));
  return $tweet;
}


// Test / driver code (temporary)

 // to see what it looks like
// $('#tweet-container').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
// $('$tweet').append($("<header>"))
// $('article').append($("<header>").addClass("tweet"));
// $('article').append($("<div>").addClass("tweet"));
// $('article').append($("<footer>").addClass("tweet"));
renderTweets(tweetData);