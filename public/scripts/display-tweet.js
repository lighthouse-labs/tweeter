$(document).ready(function() {

  $('.display-tweet').on('mouseenter', function () {
    $(this).find('.buttons').css({'visibility':'visible'});
  });

  $('.display-tweet').on('mouseleave', function () {
    $(this).find('.buttons').css({'visibility':'hidden'});
  });

});