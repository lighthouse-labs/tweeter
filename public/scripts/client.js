// Escape Function for Cross-Site Scripting
const escape =  function(str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

// Error message handler (jQuery slideDown transformation)
const showError = function(cls, tag, errMessage) {
  $(`${cls} ${tag}`).text(errMessage);
  $(cls).slideDown("slow", function() {
  });
};

// Create tweet using template literal
const createTweetElement = function(tweet) {
  const newTweet =
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
        <i class="fas fa-flag"></i>
        <i class="fas fa-retweet"></i>
        <i class="fas fa-heart"></i>
      </div>
    </footer>
  </article> `;

  return newTweet;
};

// Render tweets - display newest first
const renderTweets = function(tweets) {
  $('.all-tweets').empty();
  for (let tweet of tweets) {
    $('.all-tweets').prepend(createTweetElement(tweet));
  }
};

// Fetch tweets from http://localhost:8080/tweets
const loadTweets = function() {
  $
    .ajax({
      url: "/tweets",
      method: "GET",
    })
    .then(res => renderTweets(res));
};


$(document).ready(function() {
  // Load default tweets
  loadTweets();

  // Toggle tweet form on click of nav button
  $("#pointer").click(function() {
    $(".new-tweet form").slideToggle("slow", function() {
      $(".new-tweet").css('display', 'flex');
    });
  });

  // Prevent default of form & set up request
  $("form").submit(function(event) {

    event.preventDefault();

    const tweet = $("#tweet-text").val();

    // Remove previous error message on submission of new tweet
    $(".error").slideUp("slow");

    // Error handling with showError function
    if (!tweet) {
      showError(".error", "p", "Invalid Tweet! Please Tweet Again");
      return;
    } else if (tweet.length > 140) {
      showError(".error", "p", "Too Long! Words are Important, Choose Them Wisely");
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