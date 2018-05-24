//import { get } from "http";

// Test / driver code (temporary). Eventually will get this from the server.
$(() => {
   const safe = (str) => {
     return str
    .replace('&', `&amp;`)
    .replace('<', `&lt;`)
    .replace('>', `&gt;`)
    .replace(`'`, `&qout;`)
    .replace("'", `&#039;`);
   }

    const createTweetElement = (database) => {
      console.log(safe(database.content.text))
      const avatar = `<img src=${database.user.avatars.small}></img>`,
        user_name = `<h2>${database.user.name}</h2>`,
        header = `<header>${avatar}${user_name}<p>${database.user.handle}</p></header>`,
        content = `<div>${safe(database.content.text)}</div>`,
        footer = `<footer>${database.created_at}</footer>`

      return $(`<article class='tweet'>${header}${content}${footer}</article>`)
    }

    const latestTweet = (tweetInfo) => {
      return [tweetInfo[tweetInfo.length -1]];
    }

    const renderTweets = (data) => {
      data.reverse().forEach(function (tweet) {
        $tweet = createTweetElement(tweet);
        $('#tweets-container')
          .prepend($tweet);
      });
    }

    const getTweets = (cb, update) => {
      $.getJSON('/tweets', function (tweetInfo) {
        if(update === 'update'){
          cb(latestTweet(tweetInfo));
        } else {
        cb(tweetInfo);
        }
      });
    }

    $(".new-tweet form").on('submit', function (event) {

      event.preventDefault();
      const charCount = Number($(".new-tweet .counter")
        .text())
      if (charCount < 0) {
        return alert('Tweets must be under 140 characters long... srry.')
      }
      if (charCount === 140) {
        return alert('you have to enter something...')
      }
      $.post('/tweets', $(this)
        .serialize(),
        () => {
          console.log('success')
        });
        getTweets(renderTweets, 'update');
        
        });

    getTweets(renderTweets);
  });
