$(document).ready(function() {

$('textarea').keyup(function() {
  let maxLength = 140;
  let length1 = $(this).val().length;
  let length2 = maxLength - length1;
  $(this).siblings('.counter').text(length2);
  if (length2 < 0) {
    $(this).siblings('.counter').addClass('red');
  } else {
    $(this).siblings('.counter').removeClass('red');
  }
});
});

