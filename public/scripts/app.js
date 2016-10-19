$(function () {
// Fake data taken from tweets.json
  var data = [
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



  function createTweetElement(td) {
    var $tweet = $("<article>").addClass("tweet");
    var $header = $("<header>");
    var $avatar = $("<img>").addClass("avatar").attr("src", td.user.avatars.regular);
    var $user = $("<h2>").addClass("user").text(td.user.name);
    var $handle = $("<span>").addClass("handle").text(td.user.handle);
    var $content = $("<div>").text(td.content.text);
    var days_elapsed = Math.floor((Date.now() - td.created_at)/(1000*60*60*24));
    var $footer = $("<footer>");
    var $createdAt = $("<span>").text(days_elapsed + " days ago");
    var $iconHeart = $("<i>").attr({"class": "fa fa-heart", "aria-hidden": "true"});
    var $iconRetweet = $("<i>").attr({"class": "fa fa-retweet", "aria-hidden": "true"});
    var $iconFlag = $("<i>").attr({"class": "fa fa-font-awesome", "aria-hidden": "true"});

    $header = $header.append($avatar).append($user).append($handle);
    $footer = $footer.append($createdAt).append($iconHeart).append($iconRetweet).append($iconFlag);

    $tweet = $tweet.append($header).append($content).append($footer);

    return $tweet
  }


  function renderTweets(arr) {
    for (i in arr){
      tweetObj = arr[i];
      var $tweet = createTweetElement(tweetObj);
      $('#tweet-container').append($tweet);
    }
  }


  renderTweets(data);


  $('form[action="/tweets"]').on("submit", function(event){
    event.preventDefault();
    var $theTweet = $(this).find("textarea").serialize();
    console.log($theTweet);
  });

    // function submitNewTweet(theTweet){

  // }

});




