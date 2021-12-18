$(document).ready(function () {
  console.log("asdasd")
  const $tweet = createTweetElement(tweetData);
  console.log($tweet); // to see what it looks like
  console.log('***###');
  $('.all-tweets').append($tweet);

  // const renderTweets = function (tweets) {
  //   console.log(tweets);
  //   // loops through tweets
  //   // calls createTweetElement for each tweet
  //   // takes return value and appends it to the tweets container

  //   for (let tweet of tweets) {
  //     const $tweet = createTweetElement(tweet);
  //     console.log($tweet);
  //     const $tweetContainer = $(`.all-tweets`);
  //     $tweetContainer.append($tweet);
  //   }


  //   // tweets.forEach(tweet => {
  //   //   //do something
  //   //   })
  // }

  renderTweets(data);
});

const createTweetElement = (tweet) => {

  const $tweet = $(`<article>`).addClass(`tweet`);

  let html = `<header class="Ahmed">
      <div class="userContainer"> <img class="avatar" src="${tweet.user.avatars}">
        <p class="tweet-name">${tweet.user.name}</p>
      </div>
      <div class="tweetusername">
        <p class="username">${tweet.user.handle}</p>
      </div>
    </header>

    <p class="hello-world">${tweet.content.text}</p>


    <!-- <textarea name="text" id="tweet-text"></textarea> -->
    <hr class="bottom-line">

    <footer class="foot">
      <p class="date">${timeago.format(tweet.created_at)}</p>
      <div class="tags">
        <div class="likes"><i class="fas fa-heart"></i></div>
        <div class="retweet"><i class="fas fa-retweet"></i></div>
        <div class="flag"><i class="fas fa-flag"></i></div>
      </div>
    </footer>`;

  let tweetElement = $tweet.append(html);
  return tweetElement;
}

$(document).submit(function (event) {
  event.preventDefault();

  const tweetValue = $('#tweet-text').val();
  console.log($(this).serialize());

  const formData = `text=${tweetValue}`;
  $.ajax({
    type: "POST",
    url: "/",
    data: formData,
  });
});

// gets tweets from the server and renders them on the page
const renderTweets = (tweetArr) => {
  $("#tweets-text").empty();
  for (let tweet of tweets) {
    $('#tweets-text').append(createTweetElement(tweet));
  }
};

// const loadTweets = () => {
//   $.ajax('/tweets/', {
//     type: 'GET',
//   }).then(function (res) {
//     renderTweets(res);
//   });
// };

// $(function () {
//   loadTweets();

//   $('#tweet-form').hide();

//   // Toggles the visibility of the tweet textarea/form 
//   $('#tweets-text').click(function () {
//     $('#tweet-form').slideToggle();
//     $('textarea').focus();
//   });

// });