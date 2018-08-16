$(document).ready(function() {

  $("textarea").keyup(function(event){

   let counter = 140 - $(this).val().length;

   let $counterNode = $(this).siblings(".counter");
   $counterNode.text(counter);
   if(counter < 0){
    $counterNode.css("color", "#ff0000");
   } else {
    $counterNode.css("color", "#000000");
   }

   if(event.which === 13){
    $(this).parent("form").submit();
   }

  });

});

