$(function () {
  function createTweetElement() {
    var name = tweetData.user.name;
    var avatar = tweetData.user.avatars.small;
    var handle = tweetData.user.handle;
    var content = tweetData.content.text;
    var created = tweetData.created_at;
    //to be appended to #tweet-container
    var $tweet = $("<article>").addClass("tweet");//.append(tweetData.context.text);
    //to be appended to $tweet
    var $header = $("<header>");
    var $body = $("<p>").append(content);
    var $footer = $("<footer>");
    //to be appended to $header
    var $tweet_handle = $("<span>").append(handle); //.addClass("handle").append(tweetData.user.handle);
    var $avatar = $("<img>").append(avatar);  //.addClass("img").append(tweetData.user.avatars);
    var $user_name = $("<text>").append(name);
    //append be to $footer
    var $date = $("<p>").append(created)
    var $icon1 = $("<i class='fa fa-heart' aria-hidden='true'>");
    var $icon2 = $("<i class='fa fa-retweet' aria-hidden='true'>");
    var $icon3 = $("<i class='fa fa-flag' aria-hidden='true'>");
    //footer children appended to footer
    ($date).appendTo($footer);
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
  return $tweet;
}
  var tweetData = {
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

  var $tweet = createTweetElement(tweetData);

  console.log($tweet);

  $('#tweets-container').append($tweet);
})



