$(document).ready(function() {

  console.log('ready!');
  document.getElementById("text").addEventListener("input", function(e) {

    var max = 140;
    var current = this.value.length;
    $(this).parent().find(".counter").html(max - current);
    if (current > max) {
      console.log(max - current);
      $(this).parent().find(".counter").css({'color': 'red'});
    } else {
      console.log(max - current);
    }
  })
});
