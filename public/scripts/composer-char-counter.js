
//when typing in new tweet bar -- character counter goes down as characters are typed
$(function () {
 $("section.new-tweet textarea").on("input", function (count) {
   var txtLength = $("textarea").val().length;
   var maxLength = 140;
   var txtCounter = $(".counter").text(140 - txtLength);
   if (txtLength > maxLength ) {
     $(".counter").css("color", "tomato");
   } else {
    $(".counter").css("color", "black");
   }
 })
});
