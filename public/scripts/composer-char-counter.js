
$(document).ready(function() {

  let charCount = 140;

  $('textarea').on('keyup', function (event) {

    let charAmount = $(this).val().length;

    let counter = charCount - charAmount;

    $(this).siblings('.counter').text(counter);

    if (counter <= 0) {

      $('.new-tweet span').addClass('redCounter');

    } else {

      $('.new-tweet span').removeClass('redCounter');

    } // END OF IF/ELSE STATEMENT

  }); // END OF $('.textarea') KEYUP FUNCTION

}); // END OF DOCUMENT.READY FUNCTION