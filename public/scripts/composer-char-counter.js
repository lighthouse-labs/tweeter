$(document).ready(function()
{
  $(".new-tweet form textarea").keyup(function(){
    var input = $(this).val().length;
    var countVal = $(this).parent().find(".counter");
    var count = 140 - input;
    countVal.text(count);

   if(count < 0) {
      countVal.addClass("error");
    }else {
      countVal.removeClass("error");
    }
  });
});