$(function() {
  console.log('app.js has loaded');

  var maxLength = 141;
  var message = "";

  function createTweetElement(tObj) {
    var time = Math.floor((Date.now() - tObj.created_at)/8.64e+7);
    var newTweet = $("<article>").addClass("tweet");

    newTweet.append("<header>");
    newTweet.append(`<main>${escape(tObj.content.text)}`);
    newTweet.append("<footer>");

    newTweet.children("header").append(`<img src=${tObj.user.avatars.regular} />`);
    newTweet.children("header").append(`<span class="name">${escape(tObj.user.name)}`);
    newTweet.children("header").append(`<span class="handle">${escape(tObj.user.handle)}`);

    newTweet.children("footer").append(`<p>${time} days ago...`);
    newTweet.children("footer").append("<i class='fa fa-heart'>");
    newTweet.children("footer").append("<i class='fa fa-retweet'>");
    newTweet.children("footer").append("<i class='fa fa-flag'>");

    return newTweet;
  }

  function showMessage() {
    $("#message").css({'visibility':'visible'});
    setTimeout(function(){
      $("#message").css({'visibility':'hidden'});
    },1500);
  }

  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function renderTweet(arr) {
    for(var i in arr) {
      var $tweet = createTweetElement(arr[i]);
      $('#feed').prepend($tweet);
    }
  }

  function validateForm(formData) {
    formData = formData.trim();
    if(formData.length > maxLength) {
    message = "Message too long!";
      return false;
    } else {
      switch (formData) {
        case '':
          message = "Please type something...";
          return false;
          break;
        case null:
          message = "null";
          return false;
          break;
        default:
          message = "Tweet posted! Holla!";
          return true;
      }
    }
  }


  $('form').on("submit", function(event) {
    var text = $("#text").val();
    if(validateForm(text)) {
      $("#message").html(message);
      showMessage();
      event.preventDefault();
      $.ajax({
        method: "POST",
        url: "/tweets",
        data: $(this).serialize(),
        dataType: 'json'
      })
      loadTweets(false);
      $("#text").val("");
      $(".counter").html(maxLength);
      $(".counter").css({'color': ''});
    } else {
      $("#message").html(message);
      showMessage();
      event.preventDefault();
    }
  })
  function loadTweets(loadAll){
    $.ajax({
      method: "GET",
      url: "/tweets",
      data: $(this).serialize(),
      dataType: 'json'
    }).done(function(data) {
      if(loadAll){
        renderTweet(data);
      } else {
      $('#feed').prepend(createTweetElement(data[data.length - 1]));
      }
    });
  };
  loadTweets(true);
})
