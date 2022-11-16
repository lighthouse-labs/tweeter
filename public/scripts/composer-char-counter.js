$(document).ready(function() { //DOM ready
  $("#tweet-text").keyup(function(event) {
     const maxLength = 140;
     const textLength = $(this).val().length;
     const charRemain = maxLength - textLength;
     const $counterElement = $(this).parent().find('.counter');
     $counterElement.text(charRemain);

if (charRemain < 0) {
  $counterElement.addClass("short")
} else {
  $counterElement.removeClass("short")
}
 
  })
});