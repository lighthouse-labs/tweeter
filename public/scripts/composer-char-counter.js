$(function() {
  $(".new-tweet textarea").keyup(function(){
    var entered = $(".new-tweet textarea").val().length;
    $(".new-tweet .counter").html(140 - entered);
    if(entered > 140) {
      $(".new-tweet .counter").css('color', 'red');
    }
  });
});
