$(document).ready(function() {
  const $textBox = $('#tweet-text');
  const counter = $('.counter');
  const maxL = 140;

  counter.text(`${maxL}`);

  //user change input
  $($textBox).on('input', function() {
    let chars = $(this).val().length;
    counter.text(`${maxL - chars}`);

    if (maxL < chars) {
      counter.css('color', 'red');
    } else {
      counter.css('color', 'blue');
    }
  });
});
