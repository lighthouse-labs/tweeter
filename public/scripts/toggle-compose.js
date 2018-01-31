
$(document).ready(function() {
  $('#compose').on('click', function() {
    $('.new-tweet').toggleClass("down");
    if ($('.new-tweet').hasClass('down')) {
      $('[name="text"]').focus()
    }
  });

});
