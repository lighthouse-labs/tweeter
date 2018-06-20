 $(document).ready(function() {

  var charMax = 140;

  $('textarea').on('keyup', function() {
    var textLength = $(this).val().length;
    var remainingText = charMax - textLength;

    var textCounter = $(this).siblings('.counter').text(remainingText);

    if (remainingText < 0) {
      $('.new-tweet span').addClass('color');
    } else if (remainingText > 0) {
      $('.new-tweet span').removeClass('color');
    }
  });

});
