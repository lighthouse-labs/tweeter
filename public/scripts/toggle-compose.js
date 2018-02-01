
$(document).ready(function() {
  $('#compose').on('click', function() {

    $('.new-tweet').toggleClass("down");
    $('.new-tweet').slideDown();
    $('[name="text"]').focus();

    if (!$('.new-tweet').hasClass('down')) {
      $('.new-tweet').slideUp();
    }
  });
});
