/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(document).ready(function()
  {
    // const data = [
    //   {
    //     "user": {
    //       "name": "Newton",
    //       "avatars": {
    //         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
    //         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
    //         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
    //       },
    //       "handle": "@SirIsaac"
    //     },
    //     "content": {
    //       "text": "If I have seen further it is by standing on the shoulders of giants"
    //     },
    //     "created_at": 1461116232227
    //   },
    //   {
    //     "user": {
    //       "name": "Descartes",
    //       "avatars": {
    //         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
    //         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
    //         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
    //       },
    //       "handle": "@rd" },
    //     "content": {
    //       "text": "Je pense , donc je suis"
    //     },
    //     "created_at": 1461113959088
    //   },
    //   {
    //     "user": {
    //       "name": "Johann von Goethe",
    //       "avatars": {
    //         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
    //         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
    //         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
    //       },
    //       "handle": "@johann49"
    //     },
    //     "content": {
    //       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    //     },
    //     "created_at": 1461113796368
    //   }
    // ];

function serializeData()
{

}

// $('.tweetButton').click(function (e) {
//   e.preventDefault();   // Let us run some validation on the textarea before submitting
//                         // to the server
//   console.log("got the label....")
//   var txtlen = $("txtarea").val();
//   alert(txtlen);
// });

function loadTweets(){
  $.ajax('/tweets', { method: 'GET' })
  .then(function  (tweets) {
    console.log('Success: ', tweets);
    //$button.replaceWith(renderTweets);
    renderTweets(tweets); // has to be done within the scope of the ajax call
    // note to self: multiple calls to load tweets will require that the view be cleared
  });
};

// var $button = $('.tweetlabel');

//   $button.on('click', function () {
//     console.log('Button clicked, performing ajax call...');
    loadTweets();
//  });

function createTweetElement(tweetObject){
    /*------------------------------------------------------------------------
    *This function receives a tweet object and returns an article element
    * with the entire HTML structure of the tweet
    * ------------------------------------------------------------------------*/
    //let $tweet = $('<article>').addClass('tweet');
    //...
    let thename = tweetObject.user.name;
    let usrImg = tweetObject.user.avatars['small'];
    let usrHandle = tweetObject.user.handle;
    let msg = tweetObject.content.text;
    let datecreated = tweetObject.created_at;
    return `
      <div class="tweetposts">
        <div class="tweetposts-userinfo">  
          <img class="tweetposts-userinfo-img" src= "${usrImg}" width="80px" height="80px">
          <label for ="userName" class = "tweetposts-userinfo-username" > ${thename} </label>
          <label for ="tweetName" class = "tweetposts-userinfo-tweetname" >${usrHandle}  </label>
        </div>       
        <div>
          <p class = "tweetposts-postmessage"> ${msg} </p>
        </div>
        <div class = "tweetposts-timeline">
          <label for = "timeline" class="tweetposts-timeline-activity"> ${datecreated}</label>  
          <label for = "hoverarea" class = "tweetposts-timeline-hover">
            <i class="fas fa-flag"> </i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </label>
        </div>
      </div>`
}

function renderTweets(tweets) {
// loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  tweets.forEach((tweet) => {
    $('.container2').append(createTweetElement(tweet));
  });
};

  $('.theform').submit(function (e) {
    e.preventDefault();
    //$("textarea").on("click" , function (e) {
    // var size = $(this).parent().siblings(".counter").val();
    //var size = $(this).children
    let  size = $("#theText").val().length;
    let largeMsgErr = " The tweet exceeds 140 characters.Please redo.";
    let shortMsgErr = " The tweet is too short. Please redo.";
    if (size > 140) {
      $(".new-tweet-validation").css('color','white');
      $(".new-tweet-validation").css('visibility', 'visible');
      $(".new-tweet-validation").text(largeMsgErr);

    } else  if (size <= 0) {
       //alert("Nothing was entered or the tweet is nost present.")
       // $(".tweetButton").slideToggle(function(){s
          $(".new-tweet-validation").css('color','white');
          $(".new-tweet-validation").css('visibility', 'visible');
          $(".new-tweet-validation").text(shortMsgErr);
       // });
      }
    else{
      var tweetmsg = $("#theText").val();
      $(".new-tweet-validation").css('visibility','hidden');
      $('.tweetposts-postmessage').text(tweetmsg);
      $.post('/tweets', { text: tweetmsg })
    }
  });
  $('.nav-bar-compose').on("click", function (e)  {
    $("section.new-tweet").slideToggle(function(){
      $("#theText").focus();
    })
  });





});