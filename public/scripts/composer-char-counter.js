$(document).ready(function() {
  let charLength = 140;
  $(".new-tweet form").on("keyup", "textarea", function(event) {
    // console.log(140 - $(this).val().length);
    $(this).parent().children(".counter").text(charLength - $(this).val().length);
    if ($(this).val().length >= charLength) {
      console.log("too long!");
      $(this).parent().children(".counter").addClass("too-many-chars");
    } else {
      $(this).parent().children(".counter").removeClass("too-many-chars");
    }
  });


});
