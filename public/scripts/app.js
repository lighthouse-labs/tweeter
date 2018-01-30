/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetData = {
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
}



function createHeader(tweetObj) {
  let header = $('<header/>', {
    'class': 'tweet-header'
  })
  let imgBox = $('<div/>', {
    'class': 'image-box'
  })

  let img = $('<img/>', {
    'src': tweetObj['user']['avatars']['small']
  })
  $(imgBox).append(img)

  let title = $('<h2/>', {})
  $(title).append(document.createTextNode(tweetObj['user']['name']))
  let aside = $('<aside/>', {
    'class':'at'
  })
  $(aside).append(document.createTextNode(tweetObj['user']['handle']))
  $(header).append(imgBox);
  $(header).append(title);
  $(header).append(aside);
  return header
}

function createText(tweetObj) {
  let text = $('<p/>', {
    'class': 'text'
  })

$(text).append(document.createTextNode(tweetObj['content']['text']))
  return text
}

function createFooter(tweetObj) {
  let footer = $('<footer/>', {
    'class': 'tweet-footer'
  })
  let date = $('<p/>', {
    'class':'date'
  })

  $(date).append(document.createTextNode(tweetObj['user']['created_at']))
  $(footer).append(date)
  let options = $('<div/>', {
    'class':'options'
  })
  let ul = $('<ul/>', {
    'class':'buttons'
  })

  let logoButtons = ['Flag', 'Re', 'Heart'];
  logoButtons.forEach((logo) => {
    let li = $('<li/>')
    $(li).append(document.createTextNode(logo))
    $(ul).append(li)
  });
  $(options).append(ul);
  $(footer).append(options)
  return footer;
}

function createTweetElement(tweetObj) {
  let tweet = $('<article/>', {
    'class': 'tweet',
  })

  let header = createHeader(tweetObj)
  $(tweet).append(header);
  let text = createText(tweetObj);
  $(tweet).append(text);
  let footer = createFooter(tweetObj);
  $(tweet).append(footer)
  return tweet
}






$(document).ready(function() {
let $tweet = createTweetElement(tweetData)
$('.tweets').append($tweet)

})
