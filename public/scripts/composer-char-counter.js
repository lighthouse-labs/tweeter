$(document).ready(function() {
  const $textBox = $('#tweet-text');
  const counter = $('.counter');
  const maxLength = 140;

  counter.text(`${maxLength}`);

  //user change input
  $($textBox).on('input', function() {
    let chars = $(this).val().length;
    counter.text(`${maxLength - chars}`);

    if (maxLength < char) {
      counter.css('color', 'red');
    } else {
      counter.css('color', 'blue');
    }
  });
});
