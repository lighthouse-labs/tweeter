console.log('char counter has loaded');

$(document).ready(function () {
  console.log('document has loaded');

  $('.text-area').on('keyup', function() {
    let remaining = $('.text-area').val();
    console.log(remaining);
  });
});



