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

    return $tweet;
  }


  function renderTweets(arr) {
    // console.log(arr);
    for (i in arr){
      tweetObj = arr[i];
      var $tweet = createTweetElement(tweetObj);
      $('#tweet-container').prepend($tweet);
    }
  }


  $('form[action="/tweets"]').on("submit", function(event) {
    event.preventDefault();

    var tweetLength = $(this).find('textarea').val().length;

    // refactor to resuse composer-char-counter.js?
    if (tweetLength  === 0 ) { //fix: spaces can be entereed and will be posted; may in future need to update to test for null content if we add images, etc.
      $.flash('Your tweet is empty!'); //npm flash-message plugin
    } else if (tweetLength > 140) {
      $.flash('Your tweet is too long!');
    } else {
      var tweetSubmit = $.ajax({
        method: 'post',
        url: '/tweets',
        data: $(this).serialize(),
        dataType: 'json'
      });
      loadTweets(false);
      $(this).find('textarea').val("").change();
    }
  });

  function loadTweets(allTweets) {
    var allOfTheTweets = $.ajax({
      method: 'get',
      url: '/tweets',
      data: $(this).serialize(),//not sure what's up
      dataType: 'json'
    });

    allOfTheTweets.done(function(data) {
      var dL = data.length;
      console.log(data);
      // var start = dL-1;
      var singleTweet = [data[data.length-1]];
      console.log('single tweet', singleTweet);
      console.log("the data",data);
      if (allTweets === true) {
      renderTweets(data);
      } else if (allTweets === false){
      renderTweets(singleTweet);
      }
    });
  };

  loadTweets(true);

});

  //validation
    // console.log($(this).serialize());
    // var $theTweet = $(this).find("textarea"); //.serialize()
    // console.log($theTweet);
    //

    // console.log($theTweet);


