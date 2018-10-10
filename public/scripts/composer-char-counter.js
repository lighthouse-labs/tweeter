$(document).ready(function() {
  // look into "input" event
  $( ".text-area" ).on("input", function() {
    let charLength = 140 - ($(this).val().length);
    $(".counter").text(charLength);
  });

});

