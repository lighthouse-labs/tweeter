
$( document ).ready(function() {

  var maxLength = 140;
  $('textarea').keyup(function() {
    var length = $(this).val().length;
    length = maxLength-length;
    $('.counter').text(length + ' characters');

    if ( length < 0 ){
      $('.counter').css('color', 'red');
    }
    else {
      $('.counter').css('color', 'black');
    }
});
});

