$(() => {
  $( ".compose" ).click(function() {
  $('.new-tweet').slideToggle(400)
  $('textarea').focus();
  });
});