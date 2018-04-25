$(document).ready(function() {

  $('.new-tweet textarea').keyup(function() {
    var max = 140;
    var txtLen = $(this).val().length;
    var remainChars = max - txtLen;

    if(remainChars >= 0) {
      $('.counter').css("color", "#000000");
    } else {
      $('.counter').css("color", "#ff0000");
    }

    $('.counter').text(remainChars);
  });



  //function to toggle slide compose tweet area
  $('#nav-bar #btnCompose').on('click', (event) => {
    $(".new-tweet").slideToggle("fast");
    $("#text").focus();
  });


});



