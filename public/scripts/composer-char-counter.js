$(document).ready(function() {
  console.log("noiiice");

  $('textarea').on("paste keydown", function(event) {
    console.log(140 - event.target.textLength);
  });
});