$(document).ready(function() {

  // hides alert bar
  $('.alert').hide()
  // hides compose new tweet bar
  $('.new-tweet').hide();
  // on clicking 'compose tweet' button toggle new tweet bar
  $("button.header-button").click( function() {
    $('.new-tweet').slideToggle();
    $('textarea').select();
  });

  // on incorrect form submit - alert message is displayed
  // on submitting new tweet form - resets alert, text area and counter
  // posts new tweet to tweeter page
  $('form').submit(function(e) {
    e.preventDefault();
    if ($('span.counter').text() < 0) {
      $('.alert').slideDown();
      $('textarea').val("");
      $('span.counter').text("140").css("color", "black");
    } else if ($('span.counter').text() > 139) {
      $('.alert').slideDown();
      $('textarea').val("");
      $('span.counter').text("140").css("color", "black");
    } else {
      $('.alert').slideUp();
      $('.alert').slideUp();
    var form = $(this);
      $.ajax({
        method: "POST",
        url: "/tweets",
        data: form.serialize(),
        success: function(responseFromServer) {
          $('textarea').val("");
          $('span.counter').text("140");
          console.log(responseFromServer);
          loadTweets();
        }
      })
    }
  })

  //gets all existing tweets and appends new tweet to tweeter page
  function loadTweets() {
    var form = $(this);
    $.ajax({
      method: "GET",
      url: "/tweets",
      data: form.serialize(),
      success: function(responseFromServer) {
      console.log(responseFromServer);
      let newTweets = renderTweets(responseFromServer);
        $('.all-tweets').empty();
        $('.all-tweets').append(newTweets);
      }
    });
  }

  // loops through tweets
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
  function renderTweets(tweets) {
    let allTweets = [];
    for (let i = 0; i < tweets.length; i++) {
      allTweets.unshift(createTweetElement(tweets[i]));
    }
    return allTweets;
  }

  //creates each tweet in three sections
  function createTweetElement (data) {
    const $article = $('<article>');
    $article.addClass('tweet');
    //header
    const $header = $('<header>');
    const $img = $('<img>');
    $img.addClass('tweet-logo');
    $img.prop('src', data.user.avatars.small);
    const $username = $('<div>');
    $username.addClass('tweet-username');
    $username.text(data.user.name);
    const $tweetHandle = $('<span>');
    $tweetHandle.addClass('tweet-handle');
    $tweetHandle.text(data.user.handle);
    $header.append($img);
    $header.append($username);
    $header.append($tweetHandle);
    //body
    const $body = $('<div>');
    $body.addClass('tweet-body');
    const $tweetMessage = $('<span>');
    $tweetMessage.addClass('tweet-message');
    $tweetMessage.text(data.content.text);
    $body.append($tweetMessage);
    //footer
    const $footer = $('<footer>');
    const $timestamp = $('<span>');
    $timestamp.addClass('tweet-timestamp');
    $timestamp.text(data.created_at);
    const $emojiHeart = $('<span>');
    $emojiHeart.addClass("fas fa-heart");
    const $emojiFlag = $('<span>');
    $emojiFlag.addClass("fas fa-flag");
    const $emojiRetweet = $('<span>');
    $emojiRetweet.addClass("fas fa-retweet");
    $footer.append($timestamp);
    $footer.append($emojiHeart);
    $footer.append($emojiFlag);
    $footer.append($emojiRetweet);
    //appends
    $article.append($header);
    $article.append($body);
    $article.append($footer);
    return $article;
    }
    loadTweets();
  })