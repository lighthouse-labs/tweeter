$(document).ready(function() {

  //change character count when a key is pressed in the tweet text area

  $(".new-tweet form #tweetBox").keyup(function(event) {
    let newCount;
    let textLength = $(this)
                    .val()
                    .length;

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