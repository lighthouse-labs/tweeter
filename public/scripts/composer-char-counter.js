$(document).ready(function(el) {
  console.log("document).ready.working");
  $('textarea').on("input", function() {
    let maxlength = 140;
    let currentLength = $(this).val().length;
    let remainingChars = maxlength - currentLength;

    console.log(maxlength - currentLength + " chars left");
    let counter = $(this).parent().siblings('div.newTweetBottom').children('.counter');//'div.newTweetBottom').children('.counter');
    counter.text(remainingChars);

    counter.toggleClass('redText', remainingChars < 0);

    let errBox = $(this).parent().siblings('div.errorBox');
    if ($(this).serialize().length < 6) {
      $errBox.text('Your Tweet has no characters').slideDown();
    } else if ($(this).serialize().length > 145) {
      errBox.text('Your Tweet exceeds the maximum characters').slideDown();
    } else {
      errBox.slideUp(400).text('');
    }

  });

});