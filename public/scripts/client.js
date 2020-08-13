/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

const calculateTimeElapsed = function (time) {
  const oneDay = 24 * 60 * 60 * 1000;
  const timeDiffInmili = Date.now() - time;
  const timeDiffInDay = timeDiffInmili / oneDay;
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
                  <div class='content'>${escape(tweet['content']['text'])}</div>
                  <footer>
                    <span> ${calculateTimeElapsed(tweet["created_at"])} days ago</span>
                    <div class="symbol">
                      <div class="icon star">&starf;</div>
                      <div class="icon arrow">&#8633;</div>
                      <div class="icon heart">&#9829;</div>
                    </div>
                  </footer>
                 </article>
                 <br/>`);
  return $tweet;
}

const renderTweets = function (tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for (let tweet of tweets) {
    let renderedElem = createTweetElement(tweet);
    $('#tweet-container').prepend(renderedElem);
  }
}

const escape = function (str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

$(document).ready(function () {

  const $form = $('.container .new-tweet form');

  const loadtweets = function () {
    $.getJSON('/tweets')
      .then((responseData) => {
        console.log('the fetching is successful');
        $('#tweet-container').empty();
        renderTweets(responseData);
      })
  }

  loadtweets();

  $form.submit((event) => {
    event.preventDefault();

    if ($('.new-tweet form textarea').val().length > 140) {
      $('.error').html(`&#9888;Too long, please respect our arbitray length limit of 140 please &#9888;`);
      $('.error').css('display','block');

    }
    if ($('.new-tweet form textarea').val().length === 0) {
      $('.error').html(`&#9888;You cannot submit a tweet without anything written &#9888;`);
      $('.error').slideDown();
      
    }
    if($('.new-tweet form textarea').val().length < 140 && $('.new-tweet form textarea').val().length > 0) {
       $('.error').slideUp();
      const serialized = $form.serialize();
      $.post('/tweets', serialized)
        .then(() => {
          console.log('successfully serizlized and sent to server')
          loadtweets();
        })
    }
  })


  //  loadtweets();

});

