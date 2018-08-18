
 /* Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 -----------------------------------------------------------------------------*/
  $(document).ready(function()  {
    function loadTweets(){
      $.ajax('/tweets', { method: 'GET' })
        .then(function  (tweets) {
        renderTweets(tweets); // has to be done within the scope of the ajax call
      });
    };

  /* This section is responsible for changing the character counter.
        using DOM tree traversal techniques.  As the user types
        the character length is recalculated. If value < 0 or
        value > 140 then it changes to red color.
    */
   $("textarea").on("keypress keyup keydown", function () {
    var charsLeft = 140 - $("textarea").val().length;
    $(this).parent(".txtarea").siblings(".new-tweet-lower").children(".counter").text(charsLeft);
    if (charsLeft < 0){
        $(this).parent(".txtarea").siblings(".new-tweet-lower").children(".counter").css("color","red");
    }else{
      $(this).parent(".txtarea").siblings(".new-tweet-lower").children(".counter").css("color","black");
    }
});

  loadTweets();
  
  function calcDaysAgo(timeStamp)
  { //
    let days =  Math.abs((Date.now() - timeStamp) / (1000 * 60 *60* 24));
    days = Math.round(days);
    return  days+" days ago.";
  }


  function createTweetElement(tweetObject){
    /*------------------------------------------------------------------------
    * This function receives a tweet object as a parameter, strips out diff. elements of the object
    * and pushes them into diff. areas of an HTML document.   
    * It then returns the document.
    * ------------------------------------------------------------------------*/
    // Get the elements
    let thename = tweetObject.user.name;
    let usrImg = tweetObject.user.avatars['small'];
    let usrHandle = tweetObject.user.handle;
    let msg = tweetObject.content.text;
    let millisecs = Math.abs(Date.now()) - tweetObject.created_at;
    let datecreated = calcDaysAgo(tweetObject.created_at);
  

    // Create the html template with the elements    
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
/*----------------------------------------------------------------
* loops through tweets, calls createTweetElement for each tweet
* takes return value and appends it to the tweets container
---------------------------------------------------------------*/ 
tweets.forEach((tweet) => {
    $('.container2').append(createTweetElement(tweet));
  });
};
 
  $('.theform').submit(function (e) {
    e.preventDefault();
    let  size = $("#theText").val().length;
    let largeMsgErr = " The tweet exceeds 140 characters.Please redo.";
    let shortMsgErr = " The tweet is too short. Please redo.";
    // more than 140 characters
    if (size > 140) {
      $(".new-tweet-validation").css('color','white');
      $(".new-tweet-validation").css('visibility', 'visible');    // Validation error box is turned on and msg. displayed.
      $(".new-tweet-validation").text(largeMsgErr);

    } else  if (size <= 0) {
          $(".new-tweet-validation").css('color','white');        // Validation error box is turned on and msg. displayed.
          $(".new-tweet-validation").css('visibility', 'visible');
          $(".new-tweet-validation").text(shortMsgErr);
       // });
      }
    else{
      var tweetmsg = $("#theText").val();
      $(".new-tweet-validation").css('visibility','hidden');    // Data valid; hide the error box.
      $.post('/tweets', { text: tweetmsg })
        .then(function() { // async call - wait until posts ends to remove tweet.
        $(".tweetposts").remove();
        loadTweets();
      });        /// remove the contain from view , to empty the display.
    }
  });
  $('.nav-bar-compose').on("click", function (e)  {     // if the compose button is clicked , slide up the newtweet text
    $("section.new-tweet").slideToggle(function(){
      $("#theText").focus();
    })
  });
});