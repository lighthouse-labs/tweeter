$(document).ready(function() {
  let counter = 140;

  $(".new-tweet form #tweetBox").keydown(function(event) {
    let textLength = 0;
    let newCount;

    if(event.key === "Backspace"){
      textLength = $(this).val().length - 1;
      if(textLength < 0){
        textLength = 0;
      }
    } else {
      textLength = $(this).val().length + 1;
    }
    console.log($(this).val().length);

    if(textLength === 0){
      newCount = 140;
    } else {
    newCount = 140 - textLength;
    }
    let element = $(this).parent().children('.counter');

    element.text(newCount);

    if(newCount < 0){
      console.log("HERE")
      element.addClass('overLimit');
    } else {
      element.removeClass('overLimit');
    }
  })



});