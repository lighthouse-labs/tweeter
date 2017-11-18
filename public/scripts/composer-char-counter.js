$(document).ready(function() {
  let charLength = 140;
  $(".new-tweet form").on("keyup", "textarea", function(event) {
    const counter = $(".new-tweet .counter");
    counter.text(charLength - $(this).val().length);
    if ($(this).val().length > charLength) {
      console.log("too long!");
      counter.addClass("error");
    } else {
      counter.removeClass("error");
    }
  });


});
