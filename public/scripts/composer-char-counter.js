function getCharRemaining() {
  $(this).siblings('.counter').text(140 - (Array.from(this.value).length));

  // color warning if over char limit
  if ($(this).val().length > 140)  {
    $(this).siblings('.counter').css('color', 'red');
    $(this).siblings('.submit-btn').attr('disabled', 'disabled');
    $(this).siblings('.error').text('Exceeded character limit');

  } else if ($(this).val().length < 1) {
    $(this).siblings('.submit-btn').attr('disabled', 'disabled');
  } else {
    $(this).siblings('.counter').css('color', 'black');
    $(this).siblings('.submit-btn').removeAttr('disabled', 'disabled');
    $(this).siblings('.error').text('');
  }
}

$(document).ready(function () {
  $('.new-tweet textarea').on('input', getCharRemaining);
});