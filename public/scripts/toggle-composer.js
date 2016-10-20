$(function() {
  $(".compose").on('click', function() {
    $(".new-tweet").slideToggle("slow");
    $('textarea').select();
    $('html, body').animate({scrollTop:0},500);
  });
});

