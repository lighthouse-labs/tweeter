$(document).ready(function () {
  $('.new-tweet form textarea').on('keyup', function (e) {

    ($(this).val().length > 140) ?
      $('.new-tweet div .counter').css('color', 'red') : $('.new-tweet div .counter').css('color', '#545149');

    if ($('.new-tweet div .counter').val() === '140' && e.which === 8) {
      $('.new-tweet div .counter').val('140');
      return;
    }

    if (e.which === 8) {
      $('.new-tweet div .counter').val(parseInt($('.new-tweet div .counter').val()) + 1);
    } else {
      $('.new-tweet div .counter').val(parseInt($('.new-tweet div .counter').val()) - 1);
    }
  })
})