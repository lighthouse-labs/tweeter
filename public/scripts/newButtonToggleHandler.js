$(() => {
  $(window).on("scroll", function () {
    const $newTweetButton = $("#new-tweet");
    const $newTweetButtonBottom = $("#new-tweet-bottom");

    if ($(window).scrollTop() === 0) {
      $newTweetButtonBottom.addClass("hide");
      $newTweetButton.removeClass("hide");
    } else if ($(window).scrollTop() >= 120) {
      $newTweetButtonBottom.removeClass("hide");
      $newTweetButton.addClass("hide");
    }
  });
});
