//composer-char-counter.js
$(document).ready(function () {
    // --- our code goes here ---
    console.log("dom loaded..");
    // let eventList = ['keypressed','keyup'];
    $("textarea").on("keypress keyup keydown", function () {
        var charsLeft = 140 - $("textarea").val().length;
        $(this).parent().siblings(".counter").text(charsLeft);
        if (charsLeft < 0){
            $(this).parent().siblings(".counter").css("color","red");
        }else{
          $(this).parent().siblings(".counter").css("color","black");
        }
    });
    
   
});