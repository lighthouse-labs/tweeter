$(function () {
  $('.tweet-new > form > textarea').on('keyup', function(event) {
    var value = 140 - $(this).val().length;
    var counter = $(this).siblings('.counter').text(value);
    $(counter).css('color', (value > 0 ) ? 'black' : 'red');
  });
});

//keydown can change what happens 