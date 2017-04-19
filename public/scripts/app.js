/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

function createTweetElement(tData) {
  // handle XSS
  function escape(str) {
    let div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  let tweet = '';

  const user = tData.user.name;
  const handle = tData.user.handle;
  const avatar = tData.user.avatars.small;
  const content = escape(tData.content.text);
  const created = new Date(tData.created_at);
  const createdYY = created.getFullYear();
  const createdMM = created.getMonth();
  const createdDD = created.getDate();

  tweet = `<article>
            <header>
              <span class='avatar'><img src='${avatar}' width='55px' height='55px'></span>
              <h2>${user}</h2>
              <span class='twt-acct'>${handle}</span>
            </header>
            <div class='content'>${content}</div>
            <footer>
              <span class='postdate'>${createdYY}/${createdMM}/${createdDD}</span>
              <div class='social'>
                <span><i class='fa fa-flag' aria-hidden='true'></i></span>
                <span><i class='fa fa-retweet' aria-hidden='true'></i></span>
                <span><i class='fa fa-heart' aria-hidden='true'></i></span>
              </div>
            </footer>
          </article>`;

  return tweet;
}

function renderTweets(tweets) {
  tweets.forEach(function (element) {
    let tweet = createTweetElement(element);
    $('.tweets-container').append(tweet);
  });
}

// Test / driver code (temporary). Eventually will get this from the server.
// Fake data taken from tweets.json
var data = [{
    "user": {
      "name": "Newton",
      "avatars": {
        "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
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
        "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
];

$(document).ready(function () {
  renderTweets(data);
});