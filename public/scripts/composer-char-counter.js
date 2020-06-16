$(document).ready(function() {

  $('#tweet-text').keyup(function() {
    let counter = $(this).next().children()[1];
    $(counter).text(140 - $(this).val().length);

    if ($(counter).text() < 0) {
      $(counter).addClass("neg-counter");
    } else {
      $(counter).removeClass("neg-counter");
    }
  });
});

