$(document).ready(function() {
  // target behaviour to toggle the compose button to show or hide the tweet compose box
  $('#tweet-bar-toggle').click(function() {
    $('#toggle-status').slideToggle();
    $('error-box').hide();
    $('textarea').focus();
  });
// END of codes
});
//end of document.ready()