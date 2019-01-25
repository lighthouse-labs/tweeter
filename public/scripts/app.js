/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 // Test / driver code (temporary). Eventually will get this from the server.



document.addEventListener('DOMContentLoaded', function(event) {

  function createTweetElement(data) {
    let date = new Date(data.created_at);
    let $article = $('<article>').addClass('tweet');

    $article.html(`
      <header>
        <img src=${data.user.avatars.small} alt=${data.user.name}>
        <h2>${data.user.name}</h2>
        <p>${data.user.handle}</p>
      </header>
      <div class="tweet-body">
        <p>${escape(data.content.text)}</p>
      </div>
      <footer>
        <p>${date}</p>
        <div class="footer-icons">
          <img src="https://png.icons8.com/windows/64/000000/flag.png" alt="flag">
          <img src="https://png.icons8.com/windows/64/000000/available-updates.png">
          <img src="https://png.icons8.com/windows/64/000000/hearts.png">
        </div>
      </footer>
      `);
    return $article;
  };

  function renderTweets(data) {
    for (let tweets in data) {
      let tweet = data[tweets];
      let $tweet = createTweetElement(tweet);
      $('#timeline').prepend($tweet);
    }
  };

  // renderTweets(data);



  // Function To Prevent XXS
  function escape(text) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(text));
    return div.innerHTML;
  }



  // Post New Tweet
  $('.new-tweet form').on('submit', function(event){
    event.preventDefault();
    let $text = $(this).serialize();

    // Validate tweet length
    $('.new-tweet .error-msg').slideUp('fast');
     if (validateForm($text)) {
      // fade form and disable submit button until post complete
      $('section.new-tweet').fadeTo(200 , 0.5);
      $('section.new-tweet form input[type=submit]').attr('disabled', 'disabled');
      $.ajax({
        type: "POST",
        url: '/tweets',
        data: $text
      }).done(function() {
        $('section.new-tweet').fadeTo( "fast" , 1);
        $('section.new-tweet form input[type=submit]').removeAttr("disabled");
        $('.new-tweet textarea').val('');
        $('section.new-tweet .counter').text('140');
        $('#timeline').empty();
        loadTweets();
      });
   };
  });



  function validateForm(input) {

    let formText = input.split('=')[1].trim();
    //console.log(formText);
    if (formText.length <= 0) {

      $('.new-tweet .error-msg').slideDown('fast').text(`Tweet can't be empty`);
      return;
    } else if (formText.length > 140 ) {

      $('.new-tweet .error-msg').slideDown('fast').text(`Tweet over 140 characters`)
      return;
    }
    return true;
  }


  //Get Tweets
  function loadTweets() {
    $.ajax({
      method: 'GET',
      url: '/tweets',
    })
    .done(function (tweets) {
      renderTweets(tweets);
    });
  }

  loadTweets();


 // Compose Button
  $('#nav-bar .nav-right .compose-btn').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 'slow');
    $('section.new-tweet').slideToggle( 'fast', function() {
      $('section.new-tweet textarea').select();
    });
  });


});

