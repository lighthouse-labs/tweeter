/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

//  calculate the time passed since tweet is posted:
const calculateTimeElapsed = function(time) {
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
//  render each tweet through data sent from server:
const createTweetElement = function(tweet) {
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
                      <div class="icon star">&#x1F3F4;</div>
                      <div class="icon arrow">&#8633;</div>
                      <div class="icon heart">&#9829;</div>
                    </div>
                  </footer>
                 </article>
                 <br/>`);
  return $tweet;
};
// used to render all the tweets including the previously typed ones:
const renderTweets = function(tweets) {
  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  for (let tweet of tweets) {
    let renderedElem = createTweetElement(tweet);
    $('#tweet-container').prepend(renderedElem);
  }
};
// used to prevent cross- site programming:
const escape = function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};
//when page is opened, two tweets are already rendered:
$(document).ready(function() {

  const $form = $('.container .new-tweet form');

  const loadtweets = function() {
    $.getJSON('/tweets')
      .then((responseData) => {
        console.log('the fetching is successful');
        $('#tweet-container').empty();
        renderTweets(responseData);
      });
  };

  loadtweets();
  //when tweet is submitted, it stays on the same page, it respond different based on length of text input:
  $form.submit((event) => {
    event.preventDefault();

    if ($('.new-tweet form textarea').val().length > 140) {
      $('.error').html(`&#9888; The tweet message is exceeded by ${$('.new-tweet form textarea').val().length - 140} words, please respect our word limit of 140 &#9888;`);
      $('.error').slideDown();

    }
    if ($('.new-tweet form textarea').val().length === 0) {
      $('.error').html(`&#9888;You cannot submit a tweet without anything written &#9888;`);
      $('.error').slideDown();
      
    }
    if ($('.new-tweet form textarea').val().length < 140 && $('.new-tweet form  textarea').val().length > 0) {
      $('.error').slideUp();
      //  $('.new-tweet form textarea').val() = '';
      const serialized = $form.serialize();
      $.post('/tweets', serialized)
        .then(() => {
          console.log('successfully serizlized and sent to server');
          loadtweets();
        });
      $('.new-tweet form textarea').val('');
      $('.new-tweet div .counter').val('140');
    }
  });

});

