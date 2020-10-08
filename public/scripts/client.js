/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// momentjs

const escape = function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = function (data, retweeter) {
  const date = new Date(data.created_at);
  const displayDate = moment(date).fromNow();
 let $tweet =
    `<article class="tweet" id="${data.id}"> 
     <header>`

     if (retweeter) {
       $tweet += `<div class="retweetText"><i class="fas fa-retweet" style="margin-right: 0.3em"></i>${retweeter} retweeted</div>`
     }
     
 $tweet += `<div class="user">
      <img src='${data.user.avatars}' alt="${data.user.name}'s avatar">
        <span>${data.user.name}</span>
       
      </div>
      <div class="handle hidden">${data.user.handle}</div>
    </header>
    <p>${escape(data.content.text)}</p>
    <footer>
      <div>Posted ${displayDate}</div>
      <div class="tweet-buttons"><button class="likePost tweet-button-unclicked"><span class="likes"></span><i class="fas fa-heart"></i></button><button class="retweetPost tweet-button-unclicked"><span class="retweets">${data.retweets}</span><i class="fas fa-retweet"></i></button><button class="reportPost tweet-button-unclicked"><i class="fas fa-flag"></i></button></div>
    </footer>
  </article>`

  return $tweet;
}

const renderRetweets = function (tweets, num) {
  for (const tweet of tweets) {

    $('#' + tweet).find('.retweets').text(num);
  }
  
}

const renderButtons = function () {
  $('.likePost').click(function (event) {
    console.log('LIK')
    
    const divId = event.currentTarget.closest('.tweet').id;

    $.ajax(`/tweets/${divId}/like`, {method: 'POST'}).then((liked) => {
      let tweet = $('#' + divId).find('.likes')
     if (liked === true) {
      $(this).addClass('tweet-button-clicked')
      tweet.text('Liked')
     } else if (liked === false) {
      $(this).removeClass('tweet-button-clicked')
      tweet.text('')
     }
    });
    
  });

  $('.retweetPost').click(function (event) {
    const id = event.currentTarget.closest('.tweet').id;
    $.ajax(`/tweets/${id}/retweet`, {method: 'POST'}).then(tweet => {
     
      $('.tweets-container').prepend(createTweetElement(tweet, tweet.retweeter));
      return tweet;
    }).then((tweet) => {
      renderRetweets(tweet.retweet_array, tweet.retweets)
    }).then(() => {
      renderButtons();
    })
  })

}

const renderElements = function (array) {
  for (const tweet of array) {
    $('.tweets-container').prepend(createTweetElement(tweet, tweet.retweeter, tweet.retweets));
  }
};

const loadTweets = function () {
  $.ajax('/tweets', {method: 'GET'}).then((tweets) => {
    renderElements(tweets);
  }).then(() => {
    renderButtons();
  }).then(() => {

  })
};


$(document).ready(() => {

loadTweets();

  $('#submit-tweet').submit(event => {
    event.preventDefault();
    let text = $(event.currentTarget).find('textarea').val()

    if (text.length === 0) {
      $('.error').html('<i class="fas fa-exclamation-triangle" style="color: red"></i><span>Tweet is empty. Please enter some more characters.</span><i class="fas fa-exclamation-triangle" style="color: red"></i>');
      $('.error').slideDown();

    } else if (text.length > 140) {
      $('.error').html('<i class="fas fa-exclamation-triangle" style="color: red"></i><span>Tweet is too long. Please check urself before u wreck urself</span><i class="fas fa-exclamation-triangle" style="color: red"></i>');
      $('.error').slideDown();
    } else {
      $('.error').slideUp();
      let textarea = $(event.currentTarget).serialize()
      $.post('/tweets', textarea).then((tweet) => {
        $('.tweets-container').prepend(createTweetElement(tweet));
        $(event.currentTarget).find('textarea').val('')
        renderButtons();
      })
    }
    
  })


})

