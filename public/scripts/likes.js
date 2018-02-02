$(document).ready(function() {
  console.log($('.like'));
  $(document).on('click', '.like', function() {
    $(this).toggleClass('liked');

    if ($(this).hasClass('liked')) {
      $(this).css({ 'background-color': 'red' });
    } else {
      $(this).css({ 'background-color': 'transparent' });
    }
  });
});
