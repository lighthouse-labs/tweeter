$(document).ready(() => {
  const topButton = $('#scroll-nav');
  const bottomButton = $('#scroll-top');

  // hide bottom button when at top of page
  bottomButton.hide();

  // activation by scroll
  $(window).scroll(function() {
    if ($(this).scrollTop() > 5) { // scroll down 5px from top of page
      $(bottomButton).fadeIn();
    } else {
      $(bottomButton).fadeOut(); //
    }
  });

  // active on clicking it
  topButton.on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('#tweet-text').focus(); // enable text area automatically after scroll up
  });

  bottomButton.on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('#tweet-text').focus(); // enable text area automatically after scroll up
  });

});
