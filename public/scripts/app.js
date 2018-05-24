$(document).ready(function() {


function createTweetElement(tweet) {
  var $tweet = $("<div>").addClass("tweet");
  var $header = $("<header>").appendTo($tweet);
  $("<img>").addClass("profile-pic").attr("src", tweet.user.avatars.small).appendTo($header);
  $("<h3>").text(tweet.user.name).appendTo($header)
  $("<p>").text(tweet.user.handle).appendTo($header)
  var $article = $("<article>").text(tweet.content.text).appendTo($tweet)
  var $footer = $("<footer>").appendTo($tweet);
  $("<p>").addClass("clock").text(tweet.created_at).appendTo($footer)
  var $span = $("<span>").addClass("icons").appendTo($footer);
  $("<i>").addClass("fa fa-thumbs-o-up").appendTo($span);
  $("<i>").addClass('fa fa-share fa').appendTo($span);
  $("<i>").addClass("fa fa-frown-o").appendTo($span);
  return $tweet;
}

function renderTweets(tweets) {
  $(".newTweet").empty()
  for (var tweet of tweets) {
    let $tweetHtml = createTweetElement(tweet);
    $(".newTweet").append($tweetHtml)
  }
}

function renderPage() {
  $.get("/tweets", function (data) {
    data.reverse()
    renderTweets(data)
  })
};

$(".inputField").on("submit",function(event) {
   var $sendTweet = $(this);
   event.preventDefault();
   var $tweetMessage = $("textarea").val();
   if ($tweetMessage.length > 0 && $tweetMessage.length <140){
    var serializedMessage = $(this).serialize();
    $.post("/tweets", serializedMessage, function() {
      renderPage();
    })
  }else if ($tweetMessage.length > 140) {
   alert("Please make your tweet shorter than 140 characters.")
  }else if ($tweetMessage.length === 0) {
   alert("Please enter a message.")
  }
});
renderPage();
})

$(window).load(function(){
   $(".new-tweet").hide()
  })

$(document).ready(function(){
    $(".compose").click(function(){
        $(".new-tweet").toggle(1000);
    });
 });

  $(document).ready(function (){
     $(".compose").click(function(){
     $('.textInput').focus()
    $('.textInput').select()
});
});








