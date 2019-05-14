$(document).ready(function(){
  $('#txt').on('keyup', function(){
    var totalChars = $(this).val().length;
    var charLeft = 140;
    charLeft = charLeft - totalChars;
    //$('.counter').html(charLeft);
    $(this).parent().find('span').html(charLeft);
    if(charLeft < 0){
      $(this).parent().find('span').css("color", "red");
    }
  });
});