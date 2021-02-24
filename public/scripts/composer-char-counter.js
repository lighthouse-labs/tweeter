$(document).ready(function() {
  console.log('ready');

  $("#tweet-text").on('keyup', function() {
    let numOfCharacters = $("#tweet-text").val().length;
    const tweetCounter = $(this).parent().find(".counter");
    $(tweetCounter).html(140 - numOfCharacters);
    if (numOfCharacters > 140) {
      $(tweetCounter).css("color", "red");
    }
  })
});

