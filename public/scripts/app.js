$(function() {

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
      console.log(i);
      $('#tweet-container').append($tweet);
    }
  }


  $('form[action="/tweets"]').on("submit", function(event){
    event.preventDefault();
    var $theTweet = $(this).find("textarea").serialize();
    console.log($theTweet);
  });

  (function loadTweets() {
    var allOfTheTweets = $.ajax({
      method: 'get',
      url: '/tweets',
      data: $(this).serialize(),
      dataType: 'json'
    });

    allOfTheTweets.done(function(data){
      console.log(data);
      renderTweets(data);
    });
  })();

});




