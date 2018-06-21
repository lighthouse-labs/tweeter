$(document).ready(function() {

  const maxCharacter = 140;

  $(".new-tweet form textarea").on("keyup", function(event) {

    let textLength     = $(this).val().length;
    let counter        = maxCharacter - textLength;
    let counterElement = $(this).siblings(".counter");

    counter < 0 ? $(counterElement).text(counter).css("color", "red") : $(counterElement).text(counter).css("color", "black");

  });
});

