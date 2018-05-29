$(() => {
  const safeText = (str) => {
    return str
      .replace(/&/g, `&amp;`)
      .replace(/</g, `&lt;`)
      .replace(/>/g, `&gt;`)
      .replace(/'/g, `&qout;`)
      .replace(/'/g, `&#039;`);
  }

  const createTweetElement = (database) => {
    console.log(safeText(database.content.text))
    const avatar = `<img src=${database.user.avatars.small}></img>`,
      user_name = `<h2>${database.user.name}</h2>`,
      header = `<header>${avatar}${user_name}<p>${database.user.handle}</p></header>`,
      content = `<div>${safeText(database.content.text)}</div>`,
      footer = `<footer>${database.created_at}</footer>`

    return $(`<article class='tweet'>${header}${content}${footer}</article>`)
  }

  const latestTweet = (tweetInfo) => {
    return [tweetInfo[tweetInfo.length - 1]];
  }

  const renderTweets = (tweetInfo) => {
    tweetInfo.sort((a, b) => {
      return a.created_at - b.created_at
    })
    .forEach(function (tweet) {
      $tweet = createTweetElement(tweet);
      $('#tweets-container')
        .prepend($tweet);
    });
  }

  const getTweets = (cb, update) => {
    $.getJSON('/tweets', (tweetInfo) => {
      update === 'update' ? cb(latestTweet(tweetInfo)) : cb(tweetInfo);
      //update === cb(('update' ? latestTweet : x=>x)(tweetInfo)); // :trollface:
    });
  }

  $(".new-tweet form")
    .on('submit', function (event) {

      event.preventDefault();
      const charCount = 140 - (Number($(".new-tweet textarea").val().length))
        if (charCount < 0 || charCount === 140){
          let err = charCount === 140 ? 'Nothing was typed...' : 'over 140 Char\'s'
        $('.new-tweet p').text(err)
          return
      } else {
      $.post(
        '/tweets', 
        $(this).serialize(),
        () => {
          console.log('success');
          getTweets(renderTweets, 'update');
        }
      );
      $('.new-tweet textarea').val('');
      }
    });
  getTweets(renderTweets);
});