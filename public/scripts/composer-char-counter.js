$(document).ready(function () {
  const MAX_CHARS = 140;
  const tweet = $('.new-tweet form textarea');
  tweet.on('input', function (event) {
    const characters = $(this).val().length;
    const counter = $(this).siblings('.counter');
    const newCount = MAX_CHARS - characters;
    if (newCount < 0) {
      counter.addClass('error');
    } else {
      counter.removeClass('error');
    }
    counter.text(newCount);
  });
});