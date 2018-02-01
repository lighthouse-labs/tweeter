$(document).ready(function() {
  $('#compose').on('click', function() {

    $('.new-tweet').toggleClass("down");
    $('.new-tweet').slideDown();
    $('[name="text"]').focus();

    // will slide the compose tweet div up if div is already down
    if (!$('.new-tweet').hasClass('down')) {
      $('.new-tweet').slideUp();
    }
  });
});

