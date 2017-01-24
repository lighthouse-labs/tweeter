$(document).ready(function() {
const charCounter = $('.new-tweet').find('.counter');

  function checkCounter(counter) {
    if (counter < 0) {
     charCounter.attr('id', 'invalid');
    } else {
      charCounter.removeAttr("id", 'invalid');
    }
    return;
  }

  $('.new-tweet').find('textarea').on('keydown', function () {
      let counter = 139 - $(this).val().length;
      charCounter.text(counter);
      checkCounter(counter);
  });

});