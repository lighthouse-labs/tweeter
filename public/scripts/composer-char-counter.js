function charCount() {
  let textarea = document.getElementsByTagName('textarea');

  $(textarea).on('keydown', function() {
    let text = $(this).val();
    let length = text.length;
    let counter = $(this).siblings('.counter');

    $(counter).html(140 - length);
    if ((140 - length) < 0) {
      $(counter).css({ 'color': 'red' });
    }
    if ((140 - length) >= 0) {
      $(counter).css({ 'color': 'black' });
    }
  });
}

$(document).ready(function() {
  charCount();
});

