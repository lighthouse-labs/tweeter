$(document).ready(function() {


    $("#textarea").keyup( function() {

      const charsLeft = 140 - $(this).val().length;
      const counter = $(this).siblings('.counter');

      counter.html(charsLeft);

      if (charsLeft < 0) {

        $(".counter").css("color", "red");

      } else {

        $(".counter").css("color", "black");
      }

});

})