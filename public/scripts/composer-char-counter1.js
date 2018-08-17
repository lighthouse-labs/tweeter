//composer-char-counter.js
$(document).ready(function () {
    // --- our code goes here ---
    console.log("dom loaded..");
    // let eventList = ['keypressed','keyup'];
    $("textarea").on("keypress keyup keydown", function () {
        var charsLeft = 140 - $("textarea").val().length;
        $(this).parent(".txtarea").siblings(".new-tweet-lower").children(".counter").text(charsLeft);
        if (charsLeft < 0){
            $(this).parent(".txtarea").siblings(".new-tweet-lower").children(".counter").css("color","red");
        }else{
          $(this).parent(".txtarea").siblings(".new-tweet-lower").children(".counter").css("color","black");
        }
    });
    
   
});