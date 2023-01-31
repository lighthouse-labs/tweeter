$(function () {
  let counter = 140;
  $("#tweet-text").on("keyup", function () {
    counter = 140 - $(this).val().trim().length;

    // Although using a unqiue ID would be my personal choice,
    // the assignment required us to use a combination of selectors
    const $counter = $(this)
      .siblings("#tweet-text-bottom")
      .children(".counter");
    $counter.html(counter);
    if (counter < 0) {
      $counter.addClass("error");
    }
    if (counter >= 0) {
      $counter.removeClass("error");
    }
  });
});
