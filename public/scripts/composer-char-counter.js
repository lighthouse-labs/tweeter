// jquery for document.ready()
$(() => {

  // counts number of chars in form
  const $textarea = $('#tweet-text');
  $textarea.on('keypress', () => {
    const $count = $('.form-counter');
    $count.text(140 - $textarea.val().length);

    // changes counter to red when negative
    $textarea.val().length > 140 
    ? $count.addClass("red")
    : $count.removeClass("red");
  });

});


// note: use 'keypress' as the event for input fields such as in the new tweet form. 
// The 'keydown' would count special keys inputed, such as the enter key, and we don't want that.
// Example:  https://howtodoinjava.com/jquery/jquery-difference-between-keypress-and-keydown-events/