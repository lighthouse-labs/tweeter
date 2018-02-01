


$(document).ready(function() {
  console.log($('.like'))
  $(document).on('click', '.like', function() {
    $('.like').toggleClass('liked')

    if ($('.like').hasClass('liked')) {
      $('.like').css({ 'background-color': 'red' })
    } else {
      $('.like').css({'background-color': 'transparent'})
    }

  })
});
