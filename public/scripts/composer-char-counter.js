$(function() {

$('.charCount').keyup(function() {
    var maxChars = 140;
    var input = $(this).val().length;

    $(this).parent().find('.counter').html(maxChars - input);

    if (input >= maxChars) {
      $(this).parent().find('span').css('color', 'red');
    } else if
    (input < maxChars) {
      $(this).parent().find('span').css('color', '#008080');
    }
    console.log(input);
  });
});