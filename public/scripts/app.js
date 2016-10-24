

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

    for (var i = 0; i < tweets.length; i++) {
    tweetObj = tweets[i];
    var $tweet = createTweetElement(tweetObj);
    $('#tweets-container').prepend($tweet);
    console.log($('#tweets-container'))
    }
  }


  $('#newTweet').on("submit", function(event) {
    event.preventDefault();
    if ($('#tweet-field').val() === "") {
      $('#flashmessage').html('Error no text')
      return
    } else if ($('#tweet-field').val() === null) {
      $('#flashmessage').html('Error null')
      return
    } else if (Number($('.counter').text()) < 0) {
      $('#flashmessage').html('Error text over limit')

    } console.log(Number($('.counter').text()))


    $('.button').click(function() {
      $('.new-tweet').slideToggle();
      $('#tweet-field').focus();
    });




    $.ajax({
      method: "POST",
      url: "/tweets",
      data: $(this).serialize()
    }).done(function(data) {
      loadTweets()
    })

  });

  function loadTweets(){

    var allTweets = $.ajax({
      method: "GET",
      url: "/tweets",
      data: $(this).serialize(),
      dataType: 'json'
    });

    allTweets.done(function(data) {
      renderTweets(data)
    });
  }
loadTweets();

});







