$(document).ready(function() {
  // --- our code goes here ---
  $("#tweet-text").keyup(function(){
    
      let remaining = 140 - (this).value.length;
      const counter = $(this).siblings("div").children(".counter");
      counter.val(140 - (this).value.length);
      // counter.text(remaining)
      console.log(counter)
      if (remaining < 0) {
        counter.css("color", "red");
      } else {
        counter.css("color", "black");
      }
  })
});