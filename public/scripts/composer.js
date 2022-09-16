$(document).ready(() => {
  const topButton = $('#scroll-nav');
  const bottomButton = $('#scroll-top');

  // hide bottom button when at top of page
  bottomButton.hide();

  // activation by scroll. 5px down will active button to appear.
  $(window).scroll(function() {
    if ($(this).scrollTop() > 5) {
      $(bottomButton).fadeIn();
    } else {
      $(bottomButton).fadeOut();
    }
  });

  // active on clicking it
  // enable text area automatically after scroll up
  topButton.on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('#tweet-text').focus();
  });

  bottomButton.on("click", function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    $('#tweet-text').focus();
  });

});
