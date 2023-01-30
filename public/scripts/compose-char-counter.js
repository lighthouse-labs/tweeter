$(document).ready(() => {
  let counter = 140;
  $("#tweet-text").on("keyup", function () {
    counter = 140 - $(this).val().length;
    // Although using a unqiue ID would be my personal choice,
    // the assignment required us to use a combination of selectors
    $(this).next("#tweet-text-bottom").children(".counter").html(counter);
    if (counter < 0) {
      $(this).next("#tweet-text-bottom").children(".counter").addClass("error");
    }
    if (counter >= 0) {
      $(this)
        .next("#tweet-text-bottom")
        .children(".counter")
        .removeClass("error");
    }
  });
});
