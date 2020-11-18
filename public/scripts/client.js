$(document).ready(function() {
  // escape function for Cross-Site Scripting
  const escape =  function(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  // Render tweet
  const renderTweets = function(tweets) {
    $('.all-tweets').empty();
    const $addTweet = `${tweets.map(tweet => createTweetElement(tweet)).join("")}`;
    $('.all-tweets').append($addTweet);
  }

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

    // Error handling
    if ($("#tweet-text").val().length === 0 || $("#tweet-text").val() === null) {
      alert("Please enter a valid tweet");
      return;
    }
  
    if ($("#tweet-text").val().length > 140) {
      alert("Character limit exceeded");
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