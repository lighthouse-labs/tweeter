$(function() {

  console.log('char-counter has loaded');
  $("#text").on("input", function(e) {

    var max = 141;
    var current = this.value.length;
    $(this).parent().find(".counter").html(max - current);
    if (current > max) {
      $(this).parent().find(".counter").css({'color': 'red'});
    } else {
      $(this).parent().find(".counter").css({'color': ''});
    }
  });
});
