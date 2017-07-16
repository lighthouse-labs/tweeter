$(document).ready(function(){
  var maxLength = 140;
  $(".new-tweet > form > textarea").on ("keyup", function() {
    var counter = $(".new-tweet > form > textarea").siblings(".counter")
    var txtLength = $(this).val().length;
    var txtCurrentLimit = maxLength-txtLength;
    $('.counter').text(txtCurrentLimit);
    if (txtCurrentLimit < 0) {
      counter.css('color', 'red');
    } else {
      counter.css('color', 'black');
    }
  });
});