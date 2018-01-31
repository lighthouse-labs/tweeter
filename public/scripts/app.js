/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const data = [{
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

/**
 * Create page header content
 *
 * @param Object - individual tweet
 *
 * @return Element
 */
function createHeader(tweetObj) {
  let header = $('<header/>', {
    'class': 'tweet-header'
  });
  let imgBox = $('<div/>', {
    'class': 'image-box'
  });

  let img = $('<img/>', {
    'src': tweetObj['user']['avatars']['small']
  });
  $(imgBox).append(img);

  let title = $('<h2/>', {});
  $(title).append(document.createTextNode(tweetObj['user']['name']));
  let aside = $('<aside/>', {
    'class': 'at'
  });

  $(aside).append(document.createTextNode(tweetObj['user']['handle']));
  $(header).append(imgBox);
  $(header).append(title);
  $(header).append(aside);

  return header;
}

function createText(tweetObj) {
  let text = $('<p/>', {
    'class': 'text'
  });

  $(text).append(document.createTextNode(tweetObj['content']['text']));
  return text;
}

function createFooter(tweetObj) {
  let footer = $('<footer/>', {
    'class': 'tweet-footer'
  });
  let date = $('<p/>', {
    'class': 'date'
  });

  $(date).append(document.createTextNode(tweetObj['created_at']));
  $(footer).append(date);
  let options = $('<div/>', {
    'class': 'options'
  });
  let ul = $('<ul/>', {
    'class': 'buttons'
  });

  let logoButtons = ['Flag', 'Re', 'Heart'];
  logoButtons.forEach((logo) => {
    let li = $('<li/>');
    $(li).append(document.createTextNode(logo));
    $(ul).append(li);
  });
  $(options).append(ul);
  $(footer).append(options);
  return footer;
}

function createTweetElement(tweetObj) {
  let tweet = $('<article/>', {
    'class': 'tweet'
  });

  let header = createHeader(tweetObj);
  $(tweet).append(header);

  let text = createText(tweetObj);
  $(tweet).append(text);

  let footer = createFooter(tweetObj);
  $(tweet).append(footer);

  return tweet;
}

function renderTweets(tweets) {
  tweets.forEach((tweet) => {
    let $tweet = createTweetElement(tweet);
    $('.tweets').append($tweet);
  });

}

/**
  * Fetch Tweets from /tweets page
*/

function loadTweets() {
  $.get('/tweets', function(data) {
    renderTweets(data)
  });
}



$(document).ready(function() {
  loadTweets()

});

