console.log('char counter has loaded');

$(document).ready(function () {
  console.log('document has loaded');

  $('.text-area').on('keyup', function() {
    let remaining = 140 - $('.text-area').val().length;
    console.log(remaining);
    let charCounter = $(this).parent().children('span.counter')
    charCounter.text(remaining);
    if (remaining < 0) {
      charCounter.css('color', 'red');
    }
  });
});



