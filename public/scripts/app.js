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


$(function () {
console.log('DOM fully loaded and parsed');

  function createTweetElement(tweetObj) {
  	var $tweet = $("<article>").addClass("tweet");
  	var $header = $("<header>");
  	var $avatar = $("<img>").addClass("avatar").attr("src", tweetObj.user.avatars.small);
  	var $username = $("<h2>").addClass("user").text(tweetObj.user.name);
  	var $handle = $("<span>").addClass("handle").text(tweetObj.user.handle);
  	var $content = $("<div>").text(tweetObj.content.text);
    var days_elapsed = Math.floor((Date.now() - tweetObj.created_at)/(1000*60*60*24));
    var $footer = $("<footer>");
  	var $createdAt = $("<span>").text(days_elapsed + " days ago");
  	
  	$header.append($avatar);
    $header.append($username);
    $header.append($handle);
    $tweet.append($header);
    $tweet.append($content);
    $tweet.append($footer);

    var testHTML = $tweet;

  	return testHTML;

  }

  function renderTweets(tweets) {

    for (var i = 0; i < data.length; i++) {
    tweetObj = data[i];
    var $tweet = createTweetElement(tweetObj);
    $('#tweets-container').prepend($tweet);
    console.log($('#tweets-container'))
    }
  }

renderTweets(data);

$('#newTweet').on("submit", function(event) {
  event.preventDefault();
  $.ajax({
    method: "POST",
    url: "/tweets",
    data: $(this).serialize()
  })
});


});







