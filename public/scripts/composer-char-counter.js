$(document).ready(function() {

  $('#new-tweet-form').on("input", function(event) {

    const target = $(event.currentTarget);
    const currentLength = target.find('textarea').val().length;
    const characterCounter = target.find('.counter');
    const maxLength = 140;

    let count = maxLength - event.target.textLength;
    console.log(characterCounter);
    console.log(target);

    characterCounter.html(count);

    if (count < 0) {
      console.log("zaeroo")
      characterCounter.css("color", "red");
      } else {
        characterCounter.css("color", "#334853")
      }
    })
  });
// $('div').css('background-color', 'red').css('font-size', 6rem');