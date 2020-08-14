$(document).ready(function() {
  // when words is typed into textarea:
  $('.new-tweet form textarea').on('keyup', function(e) {
  //check if numbers of words exceed the limit:
    ($(this).val().length > 140) ?
      $('.new-tweet div .counter').css('color', 'red') : $('.new-tweet div .counter').css('color', '#545149');
    // if delete key is pressed when textrea is empty: the default of 140 does not change:
    if ($('.new-tweet div .counter').val() === '140' && e.which === 8) {
      $('.new-tweet div .counter').val('140');
      return;
    }
    //for each key pressed into textarea, default value of 140 decreases, when delete is pressed, the value increases:
    if (e.which === 8) {
      $('.new-tweet div .counter').val(parseInt($('.new-tweet div .counter').val()) + 1);
    } else {
      $('.new-tweet div .counter').val(parseInt($('.new-tweet div .counter').val()) - 1);
    }
  });
});