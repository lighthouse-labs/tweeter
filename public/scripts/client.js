/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function(){
  
  const calculateTimeElapsed = function(time){
    const oneDay = 24 * 60 * 60 *1000;
    const timeDiffInmili = Date.now() - time;
    const timeDiffInDay = timeDiffInmili /oneDay;
    // if(timeDiffInDay >= 365){
    //  timeDiffInDay /= 365;
    // }else{
    //   timeDiffInDay;
    // }
    return timeDiffInDay.toFixed(0);
  };

  const createTweetElement = function (tweet) {
    let $tweet = $(`<article class="tweet">
                  <header>
                    <span class='avator'><img src= ${tweet['user']["avatars"]}>
                    <span>${tweet['user']['name']}</span>
                    </span>
                    <span class='handle'>${tweet['user']['handle']}</span>
                  </header>
                  <div class='content'>${tweet['content']['text']}</div>
                  <footer>
                    <span> ${calculateTimeElapsed(tweet["created_at"])} days ago</span>
                    <div class="symbol">
                      <div class="icon star">&starf;</div>
                      <div class="icon arrow">&#8633;</div>
                      <div class="icon heart">&#9829;</div>
                    </div>
                  </footer>
                 </article>`);
     return $tweet;
  }

  const renderTweets = function(tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
   for(const tweet of tweets){
     let renderedElem = createTweetElement(tweet);
     $('#tweet-container').append(renderedElem);
     $('#tweet-container').append(`<br>`)
   }
  }
  
  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": "https://i.imgur.com/73hZDYK.png"
        ,
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
        "avatars": "https://i.imgur.com/nlhLi3I.png",
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    }
  ];
  
  // renderTweets(data);

  const $form = $('.container .new-tweet form');
  $form.on('submit', (event)=>{
    event.preventDefault();
    const serialized = $form.serialize();
    console.log(serialized);
    
     $.post('/tweets', serialized)
      .then(()=>{
        console.log('successful!!!')
        loadtweets();
      })
  })

  const loadtweets = function(){
    $.getJSON('/tweets')
    .then((responseData)=>{
      console.log('the fetching is successful');
      // $('#tweet-container').html();
      renderTweets(responseData);

    })
  }
  loadtweets();

});

