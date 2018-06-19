$(document).ready(function() {
  let counter = 140;

  $(".new-tweet form #tweetBox").keydown(function(event) {
    let textLength = 0;
    if(event.key === "Backspace"){
      textLength = $(this).val().length - 1;
    } else {
      textLength = $(this).val().length + 1;
    }
    console.log($(this).val().length);
    $(this).parent().children('span').text(140 - textLength);
  })



});