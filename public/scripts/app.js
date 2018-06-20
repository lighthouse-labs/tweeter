/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

const createTweetElement = function(tweet) {


  const newTweet = $("<article>").addClass("tweet")


  //create header and all its children

  const newHeader = $("<header>");

  const newImg = $("<img>")
                 .addClass('avatar')
                 .attr("src", tweet['user']['avatars']['small'])
                 .appendTo($(newHeader));

  const newName = $("<h1>" + tweet['user']['name'] + "</h1>")
                  .appendTo($(newHeader));

  const newHandle = $("<p>" + tweet['user']['handle'] + "</p>")
                    .appendTo($(newHeader));

  //append header to tweet
  $(newHeader).appendTo($(newTweet));




  //create tweet div

  const newDiv = $("<div><p>" + tweet['content']['text'] + "</p></div>")
                 .appendTo($(newTweet));




  //create footer and all its children

  const newFooter = $("<footer>");

  const newTimeStamp = $("<p>" + tweet['created_at'] + "</p>")
                       .appendTo($(newFooter));

  const newIconDiv = $("<div>")

  const newFlag = $("<i>")
                  .addClass('fas fa-flag')
                  .appendTo($(newIconDiv));

  const newRetweet = $("<i>")
                  .addClass('fas fa-retweet')
                  .appendTo($(newIconDiv));

  const newHeart = $("<i>")
                  .addClass('far fa-heart')
                  .appendTo($(newIconDiv));


  $(newIconDiv).appendTo($(newFooter));

  $(newFooter).appendTo($(newTweet));


  //return a tweet <article> element
  return newTweet

  }


  const loadTweets = function() {


      event.preventDefault();

      // const tweetContent = $('.new-tweet textarea').serialize();

      console.log("Fetching tweets...");
      $.ajax({
        url: '/tweets',
        method: 'GET',
        success: function (allTweets) {
          console.log('success', allTweets);
          renderTweets(allTweets);
        },
        error: function(errormessage){
          console.log('error', errormessage);
        }
      })
    }

// })

const renderTweets = function(arrTweets) {

  $('#tweet-feed').empty();

  arrTweets.forEach(function(tweet) {
    let tweetToAdd = createTweetElement(tweet);
    $(tweetToAdd).prependTo($('#tweet-feed'));
  });

}

const $submitTweet = $('.new-tweet input');
$submitTweet.on('click', function(event) {

  event.preventDefault();


  const tweet = $('.new-tweet textarea').serialize();

  if((tweet.length - 5) > 140){
    alert("too many chars there bud...");
  } else if ((tweet.length - 5) < 1){
    alert("can't tweet nothingness");
  } else {

    console.log("Tweet submitted! Posting now...");
    console.log(tweet);

    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: tweet,
      success: function (tweet) {
        console.log('success OVER HERE' + tweet);
        loadTweets();
        $('.new-tweet textarea').val("");
        $('.new-tweet .counter') = 140;
      },
      error: function(errormessage){
        console.log('error', errormessage);
      }
    })
  }

})


// const $submitTweet = $('.new-tweet input');
// $submitTweet.on('click', function(event) {
//   loadTweets();
// });

// renderTweets(data);


});


