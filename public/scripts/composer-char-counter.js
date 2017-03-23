$(document).ready(function() {
  $('.new-tweet form').on('keydown', 'textarea', function(event) {
  var count = $(this).parent().find('.counter');
  var counter = 140 - $(this).val().length;
  count.html(counter);
    if(counter >= 0) {
      $(count).css('color', 'black');
       } else {
         $(count).css('color', 'red');
      }
  })
});

