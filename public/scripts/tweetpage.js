const renderTweets = (tweetsArr, current) => {
  tweetsArr.forEach((tweetObj) => {
    const $tweet = createTweetElement(tweetObj);
    if(current) {
      $('#tweets').prepend($tweet);
    } else {
        $('#tweets').append($tweet);
    }
    updateTime();
  })
}

const validateTweet = (content) => {
  if (content && content.length < 141 && content.match(/\w/)) {
    return true;
  }
  if (content.length > 140) {
    $('.flash').text('too much words :()').show();
  } else {
    $('.flash').text('too little words :(').show();
  }
}

const paginate = () => {
  let page = 1;
  return function() {
    $.ajax({
      url: `/tweets?page=${page}`,
      type: 'get',
      contentType: 'json'
    }).then(function(response) {
        renderTweets(response);
    });
    page++;
  }
}

const loadTweets = paginate();