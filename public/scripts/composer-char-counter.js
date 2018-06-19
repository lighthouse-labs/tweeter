
$(document).ready(function() {

  let charCount = 10;

  $('textarea').on('keyup', function () {

    let charAmount = $(this).val().length;

    let counter = charCount - charAmount;

    let textCount = $(this).siblings('.counter').text(counter);

    if (counter <= 0) {
      $('.new-tweet span').addClass('redCounter');
    } else {
      $('.new-tweet span').removeClass('redCounter');
    }

  }); // END OF $('.textarea') KEYUP FUNCTION

}); // END OF DOCUMENT.READY FUNCTION