$(() => {

$( ".compose" ).click(function() {
  $('.new-tweet').slideToggle(400)
  $('textarea').focus();
  console.log("yup")
});

// $('#new-tweet').slideToggle(speed,easing,callback)

$( ".logo" ).click(function() {
  $(".error-message").slideToggle(1000)
});


});