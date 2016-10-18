$(document).ready(function(){
  $('.new-tweet').on('keyup', 'textarea', function(){
    var length = $(this).val().length;
    var maxLength = 140;
    var charCount = maxLength - length;

    $(this).parent().find('.counter').html(charCount);

    if (charCount < 0){
      $(this).parent().find('.counter').css({ "color": "#ff0000"});
    } else {
      $(this).parent().find('.counter').css({ "color": ""});
    }
  });
});

