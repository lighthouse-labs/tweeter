$(document).ready(function() {
  let counter = 140;

  $(".new-tweet form #tweetBox").keydown(function(event) {
    let textLength = $(this).val().length;
    console.log($(this).val().length);
    $('.counter').text(140 - textLength);
  })



});