$(function () {
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

  function renderTweets(tweets) {
    tweets.forEach(function (tweet) {
      createTweetElement(tweet);
    })
  }

  function createTweetElement(tweet) {
    var name = tweet.user.name;
    var avatar = tweet.user.avatars.small;
    var handle = tweet.user.handle;
    var content = tweet.content.text;
    var created = tweet.created_at;
    console.log(name);
    console.log(avatar);
    //to be appended to #tweet-container
    var $tweet = $("<article>").addClass("tweet");//.append(tweetData.context.text);
    //to be appended to $tweet
    var $header = $("<header>");
    var $body = $("<p>").append(content);
    var $footer = $("<footer>");
    //to be appended to $header
    var $tweet_handle = $("<span>").append(handle); //.addClass("handle").append(tweetData.user.handle);
    var $avatar = $("<img>").attr("src", avatar);  //.addClass("img").append(tweetData.user.avatars);
    var $user_name = $("<text>").append(name);
    //append be to $footer
    var $date = $("<p>").append(created)
    var $icon1 = $("<i class='fa fa-heart' aria-hidden='true'>");
    var $icon2 = $("<i class='fa fa-retweet' aria-hidden='true'>");
    var $icon3 = $("<i class='fa fa-flag' aria-hidden='true'>");
    //footer children appended to footer
    $date.appendTo($footer);
    ($icon1).appendTo($footer);
    ($icon2).appendTo($footer);
    ($icon3).appendTo($footer);
    //header children appended to
    ($avatar).appendTo($header);
    ($user_name).appendTo($header);
    ($tweet_handle).appendTo($header);
    //append header to tweet article
    ($header).appendTo($tweet);
    ($body).appendTo($tweet);
    ($footer).appendTo($tweet);

    $('#tweets-container').append($tweet);
  }


  renderTweets(data);
})
