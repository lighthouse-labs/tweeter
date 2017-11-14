$(document).ready(function() {

$('textarea').keyup(function() {
  let maxLength = 140;
  let length1 = $(this).val().length;
  let length2 = maxLength - length1;
  $('.counter').text(length2);
});

});

