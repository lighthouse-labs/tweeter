const toggleForm = () => {
  const $form = $("main").children(".new-tweet").children("form");
  if ($form.is(":hidden")) {
    $form.slideDown("slow");
  } else {
    $form.slideUp("slow");
  }
};

$(() => {
  const $newTweetButton = $("button#new-tweet");
  $newTweetButton.on("click", toggleForm);

  const $newTweetButtonBottom = $("#new-tweet-bottom");
  $newTweetButtonBottom.on("click", toggleForm);
});
