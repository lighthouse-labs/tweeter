$(document).ready(function () {
  $('.new-tweet').on('keyup', function (event) {
    let currentLength = $(this).find('textarea').val().length;
    let remainingChars = 140 - currentLength;
    let counter = $(this).find('.counter');
    counter.text(remainingChars);

    // when textarea value exceeds 140 characters, text background is red, the counter text is red, and an error message is displayed.
    let textarea = $(this).find('textarea');
    if (currentLength > 140) {
      textarea.css('background-color', '#ffcccb')
      $('#tweet-text').addClass('backgroundError')
      counter.addClass('counter-red');
      $('#charactersExceeded').removeClass('hidden');
    }
    // if character count goes below 140, all style changes should revert to default
    else if (currentLength <= 140) {
      $('textarea').css('background-color', '#f4f1ec');
      counter.removeClass('counter-red');
      $('#charactersExceeded').addClass('hidden');
    }
  })



});