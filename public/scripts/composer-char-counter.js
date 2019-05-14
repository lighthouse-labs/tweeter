$(document).ready(function(){
  $('#txt').on('input', function(){
    var totalChars = $(this).val().length;
    var charLeft = 140;
    charLeft = charLeft - totalChars;
    $(this).parent().find('span').html(charLeft);
    if(charLeft < 0){
      $(this).parent().find('span').css("color", "red");
    } else {
      $(this).parent().find('span').css("color", "black");
    }
  });
});