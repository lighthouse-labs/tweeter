// Escape Function for Cross-Site Scripting
const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

// Render Tweets - newest first
const renderTweets = function(tweets) {
  $('.all-tweets').empty();
  for (let tweet of tweets) {
    $('.all-tweets').prepend(createTweetElement(tweet));
  }
}

// Slide down error message handler
const slideDown = function(cls, tag, errMessage) {
  $(cls).slideDown("slow", function() {
    $(this).css('display', 'flex');
    $(`${cls} ${tag}`).text(errMessage);
  });
}

$(document).ready(function() {

  // Fetch tweets from http://localhost:8080/tweets
  const loadTweets = function() {
      $
        .ajax({
          url: "/tweets",
          method: "GET",
        })
        .then(res => renderTweets(res));
  };

  // Create tweet
  createTweetElement = function(tweet) {
    let newTweet = 
    `<article>
      <header>
        <div class="tweet-user">
          <img src= ${escape(tweet.user.avatars)}> 
          <p>${escape(tweet.user.name)}</p>
        </div>
        <div>
          <p class="username">${escape(tweet.user.handle)}</p>
        </div>
      </header>
  
      <span>
        <p>${escape(tweet.content.text)}</p>
        <hr>
      </span>
  
      <footer>
        <div>
          <p>${moment(tweet.created_at).fromNow()}</p>
        </div>
        <div>
          <!-- This is a flag -->
          <i class="fas fa-flag"></i>
          <!-- This is a retweet -->
          <i class="fas fa-retweet"></i>
          <!-- This is a heart -->
          <i class="fas fa-heart"></i>
        </div>
      </footer>
    </article> `;
  
    return newTweet;
  }

    // Prevent default of form & set up request
    $("form").submit(function(event) {
    event.preventDefault();
    const tweet = $("#tweet-text").val();

    //remove error message
    $(".error").slideUp("slow");

    // Error handling using slideDown function and slideDown jQuery
    if (!tweet) {
      slideDown(".error", "p", "Invalid Tweet! Please Tweet Again");
      return;
    } else if (tweet.length > 140){
      slideDown(".error", "p", "Too Long! Words are Important, Choose Them Wisely");
      return;
    }

    $
      .ajax({
        url: "/tweets",
        method: "POST",
        data: $('form').serialize(),
      }).then(res => {
        $("#tweet-text").val('');
        $(".counter").val(140);
        loadTweets();
      });
  });
});           