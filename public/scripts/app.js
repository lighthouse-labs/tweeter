/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(function() {

  function createTweetElement(tweetObject){
    let $tweet = $("<section>").addClass("newTweetBox");
    let returningHTML = "<div class=\"singleBox\"><header class=\"newTweetHeader\"><div class=\"imageContainer\">";

    returningHTML += "<img src=\"" + tweetObject.user.avatars.small + "\" class=\"newProfile\"></div><h2 class=\"newTweeth2\">" +
            tweetObject.user.name + "</h2><p class=\"newTweetId\">" + tweetObject.user.handle + "</p></header><article class=\"newTweetArticle\">" +
            "<p class=\"newTweetContent\">" + escape(tweetObject.content.text) + "</p></article><footer class=\"newTweetFooter\"><p class=\"newTweetPostTime\">" + tweetObject.created_at +
            "</p><div class=\"hiddenIcons\"><i class=\"fas fa-flag\"></i><i class=\"fas fa-retweet\"></i><i class=\"fas fa-heart\"></i>" +
            "</div></footer></div>";

    $tweet = $tweet.append(returningHTML);

    return $tweet;
  }

  function renderTweets(tweetObjArr){
    let $div = $("<div></div>");
    tweetObjArr.forEach(element => {
      $div = $div.prepend(createTweetElement(element));
    });

    $(".newTweetBox").html($div);


    // for(let i = 0; i < tweetObjArr.length; i++){
    //   let $div = createTweetElement(tweetObjArr[i]);
    //   $(".newTweetBox").prepend($div);
    // }
  }

  function loadTweets () {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      success: function(tweet){
        renderTweets(tweet);
      },
      error: function(){
        console.error("ERROR FOUND.");
      }
    });
   }

   loadTweets();

  $('input').on('click', function (event) {
    event.preventDefault();

    if($("#newTweet").val().length > 0 || $("#newTweet").val().length < 140){
      let data = $('form').serialize();
      $.ajax('/tweets', {
        method: 'POST',
        data: data
      }).done(function (data){
        $(".newTweetBox").load(loadTweets());
        $("form textarea").val("");
        $('section[id="toggle"]').hide();
      });
    }
  });


  $('section[id="toggle"]').hide();
  $("button").click( function () {
    $('section[id="toggle"]').slideToggle();
    $("textarea").focus();
  });

  function escape (str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }
});





























