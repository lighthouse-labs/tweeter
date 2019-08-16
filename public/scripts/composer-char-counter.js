$(document).ready(function() {
  const maxLen = 140;

  //listen to both the key up and down activity on the textarea to ensure issues with delete, shift, and/or enter were eliminated to allow for more robust experience

  //set color based: if longer than 140 the difference in length of string and max. length allowed, turn red by adding class
  //counter class has the red font
  $('textarea').keydown(function() {
    if ($(this).val().length >= maxLen) {
      $('#span_counter').removeClass('counter');
      $('#span_counter').addClass('counter_red');
    } else {
      $('#span_counter').addClass('counter');
      $('#span_counter').removeClass('counter_red');
    } 

    $('#span_counter').text(maxLen - $(this).val().length);
  });

  $('textarea').keyup(function() {
    if ($(this).val().length >= maxLen) {
      $('#span_counter').removeClass('counter');
      $('#span_counter').addClass('counter_red');
    } else {
      $('#span_counter').addClass('counter');
      $('#span_counter').removeClass('counter_red');
    } 

    $('#span_counter').text(maxLen - $(this).val().length);
  });

// END of codes
});
//end of document.ready()