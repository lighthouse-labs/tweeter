//this section the function called from within loadTweets 
   // So This function it receives from the database and for each record calls the createTweetElement to render
   // the tweet that are on  the list panel
const renderTweets = function (tweets) {
  let $allTweets = $('#all-tweets');
  $allTweets.empty();
  
  for (let tweet of tweets.reverse()) {
    $allTweets.append(createTweetElement(tweet));
  }
}

  //this is the XSS with Escaping 
const escape = function (str) {
  let div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

  //This is the  HTML Markup to display it render the tweets from the database 
const createTweetElement = function (tweet) {
  let $tweet = `
      <article class="tweet">
        <div class="user-name">
          <div class="userContainer">
            <img class="avatar" src="${tweet.user.avatars}">
            <p class="tweet-name">${tweet.user.name}</p>
          </div>
          <div class="tweetusername">
            <p class="username">${tweet.user.handle}</p>
          </div>
        </div>

        <p class="hello-world">${escape(tweet.content.text)}</p>

        <hr class="bottom-line">

        <footer class="foot">
          <p class="date">${timeago.format(tweet.created_at)}</p>
          <div class="tags">
            <div class="likes"><i class="fas fa-heart"></i></div>
            <div class="retweet"><i class="fas fa-retweet"></i></div>
            <div class="flag"><i class="fas fa-flag"></i></div>
          </div>
        </footer>
      </article><br>`;

  return $tweet;
}


//this section is the function that the client tweets for, too long tweets and empty tweets
$(document).ready(function () {
  console.log("onReady")

  const loadTweets = () => {
    console.log("loadTweets()")
    $.ajax('/tweets', {
      type: 'GET',
    }).then(function (res) {
      console.log(res);
      renderTweets(res);
    });
  };

  loadTweets();

  $("#compose").submit(function (event) {
    event.preventDefault();
    $('.emptyErr').hide()
    $('.longErr').hide()
    
    const text = $('#tweet-text').val();
    const formData = $(this).serialize();

    console.log(text)
    console.log(formData)

    if (text === "") {
      return $('.emptyErr').slideDown();
    }

    if (text.length > 140) {
      return $('.longErr').slideDown();
    }

    $.ajax({
      type: "POST",
      url: "/tweets",
      data: formData,
      success: function (data) {
        console.log("heeelo")
        $('#tweet-text').val("");
        loadTweets();
      }
    });
  });
});


