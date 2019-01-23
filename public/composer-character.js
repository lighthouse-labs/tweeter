$(document).ready(function() {
  $("textarea").keyup(function() {
    var max = 140;
    var len = $(this).val().length;
    var char = max - len
    if (len >= max) {
      $('.counter').text(char).addClass("warning");
    } else {
      $(".counter").text(char + "characters left").removeClass("warning");
    }
  });








});














