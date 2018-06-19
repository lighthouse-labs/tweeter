$(document).ready(function() {

  //change character count when a key is pressed in the tweet text area

  $(".new-tweet form #tweetBox").keydown(function(event) {
    let textLength = 0;
    let newCount;

    //if the key is backspace, text length is minus 1 (unless length is 0)

    if(event.key === "Backspace"){
      textLength = $(this)
                    .val()
                    .length - 1;

      if(textLength < 0){
        textLength = 0;
      }
    } else {

      textLength = $(this)
                    .val()
                    .length + 1;
    }

    //update value of the counter

    let element = $(this).siblings('.counter');
    newCount = 140 - textLength;

    element.text(newCount);


    //if counter goes negative, add class to make it red

    if(newCount < 0){

      console.log("HERE")
      element.addClass('overLimit');
    } else {

      element.removeClass('overLimit');
    }
  })



});