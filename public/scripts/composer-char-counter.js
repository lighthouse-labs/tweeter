$("#tweet-text").keyup(function() {
  const text = 140 - $(this).val().length;
  const counter = $(this).parents().find(".counter");

  $(counter).val(text);
  
  if (text < 0) {
    $(counter).css("color", "red");
  }
});