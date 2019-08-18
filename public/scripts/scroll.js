$(document).ready(function() {
  
  $(window).scroll(function() {
    if ($(window).width() > 759 && $(window).scrollTop() > 100) {
      // toggle pops up for tablet and desktop
      $('#toggleTop').removeClass('no-show-status');
      $('#tweet-bar-toggle').addClass('no-show-status');
    } else if ($(window).width() <= 759 && $(window).scrollTop() > 50) {
      // toggle pops up for mobile
      $('#toggleTop').removeClass('no-show-status');
      $('#tweet-bar-toggle').addClass('no-show-status');
    } else {
      // toggle at setup      
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