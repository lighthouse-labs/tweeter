$(document).ready(function(){

  var data = [
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

function renderTweets(tweets) {
tweets.forEach(function(item){

$('#tweets-container').prepend(createTweetElement(item)); // to add it to the page so we can make sure it's got all the right elements, classes, etc.

})
}


function createTweetElement (data) {
  const createdTime = new Date(data.created_at*1000)

  function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
  }

  var $tweet = `

              <article class="tweet">
                <header>
                  <img class="userlogo" src=${data.user.avatars.small}>
                  <h3>${escape(data.user.name)}</h3>
                  <span class="shortUsername">${escape(data.user.handle)}</span>
                </header>
                <article class="tweetMessage">${escape(data.content.text)}
                </article>
                <footer>
                  ${'Created on ' + escape(createdTime.toUTCString(data.created_at))}
                  <img class="hoverIcons" src="/images/Bolt.png">
                  <img class="hoverIcons" src="/images/Reload.png">
                  <img class="hoverIcons" src="/images/Heart.png">
                </footer>
              </article>
              `


return $tweet;

// Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
}
renderTweets(data);

document.getElementById("tweetSubmit").addEventListener("click", function(event) {
  event.preventDefault()
});

function loadTweets {
  $.ajax({
    type: 'GET'
    url: '/tweets'

  })
}

});
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
