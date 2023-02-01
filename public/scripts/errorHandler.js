$(() => {
  const $closeButton = $(".new-tweet").find(".close-button");
  $closeButton.on("click", function (event) {
    event.preventDefault();
    const $error = $(this).closest("div.error-container");
    $error.addClass("hidden");
    const $textarea = $(this)
      .closest("div.error-container")
      .siblings("textarea");
    $textarea.val("");
    const $counter = $(this)
      .closest(".error-container")
      .next("#tweet-text-bottom")
      .children("output");
    $counter.val(140);
    $counter.removeClass("error");
  });

  const $modalBackdrop = $(".new-tweet").find("div.error-container");
  $modalBackdrop.on("click", function (event) {
    if (event.target === this) {
      event.preventDefault();
      const $error = $(this).closest("div.error-container");
      $error.addClass("hidden");
      const $textarea = $(this).siblings("textarea");
      $textarea.val("");
      const $counter = $(this).next("#tweet-text-bottom").children("output");
      $counter.val(140);
      $counter.removeClass("error");
    }
  });
});
