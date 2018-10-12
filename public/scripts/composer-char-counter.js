$(document).ready(function() {
  // look into "input" event
  $( ".text-area" ).on("input", function() {
    event.preventDefault();
    let charLength = 140 - ($(this).val().length);
    $(".counter").text(charLength);
    if (charLength < 0) {
      $(".counter").addClass("counter-negative"); // don't need . if not a selector
    } else {
      $(".counter").removeClass("counter-negative");
      $("#error, #errormessage").slideUp()
    }
  });
});

// } else if($(".text-area").val().length > 140){
//   $('#error').show({complete: function() {
//     $('#errormessage').text("You're over character limit")
//     }
//   });

// } else if (!empty) {
//   $("#error, #errormessage").slideUp(400, function(){
//     $("#errormessage")
//   });
    
    // if (overCharCount) {
    //   $("#error, #errormessage").slideDown(400, function() {
    //     $("#errormessage").text("Exceed character limit: Ain't nobody got time for that!");
    //   })
    // }
      
    