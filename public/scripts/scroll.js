$(document).ready(function() {
  
  $(window).scroll(function() {
    console.log("in scroll loop", $(window).scrollTop());
    if ($(window).scrollTop() > 100) {
      $('#toggleTop').removeClass('no-show-status');
      $('#tweet-bar-toggle').addClass('no-show-status');
    } else {
      $('#toggleTop').addClass('no-show-status');
      $('#tweet-bar-toggle').removeClass('no-show-status');
    }
  });
  //end of window scroll event setup

  //scroll to the top of the page and turn the tweet-bar-toggle on
  $('#toggleTop').click(function() {
    $(window).scrollTop(0);
    $('#toggleTop').addClass('no-show-status');
    $('#tweet-bar-toggle').removeClass('no-show-status');
    $('#toggle-status').slideToggle();
    $('textarea').focus();
  });
  //end of toggle button
});
//end of document.ready()