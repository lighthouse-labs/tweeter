$(document).ready(function() {
  // look into "input" event
  $( ".text-area" ).on("input", function() {
    let charLength = 140 - ($(this).val().length);
    $(".counter").text(charLength);
    if (charLength < 0) {
      $(".counter").addClass("counter-negative"); // don't need . if not a selector
      alert("Error: Over character count");
    } else {
      $(".counter").removeClass("counter-negative");
    }
  });

});


    
      
    