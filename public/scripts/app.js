//import { get } from "http";

// Test / driver code (temporary). Eventually will get this from the server.

$(document)
  .ready(function () {

    const createTweetElement = (database) => {
      const avatar = `<img src=${database.user.avatars.small}></img>`,
        user_name = `<h2>${database.user.name}</h2>`,
        header = `<header>${avatar}${user_name}<p>${database.user.handle}</p></header>`,

        content = `<div>${database.content.text}</div>`,
        footer = `<footer>${database.created_at}</footer>`

      return $(`<article class='tweet'>${header}${content}${footer}</article>`)
    }

    const renderTweets = (data)=> {
      data.forEach(function (tweet) {
        $tweet = createTweetElement(tweet);
        $('#tweets-container')
          .append($tweet);
      });
    }

    const getTweets = (cb) => {
      $.getJSON('/tweets', function (data) {
        cb(data);
      });
    }

    getTweets(renderTweets);

    // Test / driver code (temporary)
    //$('#tweets-container').append($tweet); // to add it to the pag so we can make sure it's got all the right elements, classes, etc.
  });
