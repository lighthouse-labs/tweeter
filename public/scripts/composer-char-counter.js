// jquery for document.ready()
$(() => {

  // counts number of chars in form
  const $textarea = $('#tweet-text');
  $textarea.on('keydown', () => {
    const $count = $('.form-counter');
    $count.text(140 - $textarea.val().length);

    // changes counter to red when negative
    $textarea.val().length > 140 
    ? $count.addClass("red")
    : $count.removeClass("red");
  });

});