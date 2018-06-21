/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function() {

  const frown   = `<i class="far fa-frown"></i>`
  const cringe  = `<i class="far fa-meh"></i>`

  function createTweetElement(tweet) {

    function escape(str) {
      var div = document.createElement('div');
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    }

    const icon      = tweet['user']['avatars']['small'];

    const name      = tweet['user']['name'];

    const handle    = tweet['user']['handle'];

    const text      = tweet['content']['text'];

    const timestamp = tweet['created_at'];

    const timeAgo   = Math.round(((((Date.now() - timestamp) / 1000) / 60) / 60) /24)

    const article   = `<article class='tweets'>
                        <header>
                          <div>
                            <img class="icon" src='${icon}' height=50px width=50px  style="border-radius: 5px">
                            <h3 class="name">${name}</h3>
                          </div>
                          <p class="handle">${handle}</p>
                        </header>
                        <p class="text">${escape(text)}</p>
                        <footer class='clearfix'>
                          <p class="timestamp">${timeAgo} days ago</p>
                          <div>
                            <i class="fas fa-flag"></i>
                            <i class="fas fa-retweet"></i>
                            <i class="fas fa-heart"></i>
                          </div>
                        </footer>
                    </article>`

    return article;
  };

  function renderTweets(tweets) {
    for (tweet of tweets) {
      $('#tweets-container').prepend(createTweetElement(tweet));
    }
  };

  function loadTweets() {
    $.ajax ({
      type: 'GET',
      url: '/tweets',
      success: renderTweets
    });
  }

  loadTweets();

  $(".right").on('click', function() {

    $(".new-tweet").slideToggle();
    $("textarea").focus();

  })


  $("form").on( "submit", function(data) {

    event.preventDefault();

    if ($('textarea').val().length === 0) {
      $(".alert").append(`Hey! You gotta type something before you can tweet it ${frown}`).fadeOut(7000);
      $(".alert").val('').delay(7000);
    } else if ($('textarea').val().length > 140) {
      $(".alert").append(`Uh oh... looks like you've got too much to say ${cringe}`).fadeOut(7000)
      $(".alert").val('').delay(7000);
    } else {
      $.ajax ({
        type: 'POST',
        url: '/tweets',
        data: $(this).serialize(),
        success: function(data) {
          $('#tweets-container').prepend(createTweetElement(data));
          $('textarea').val('');
          $('.counter').val(140);
          console.log(".counter");
        }
      });
    }
  });


});