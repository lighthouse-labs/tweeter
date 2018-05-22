/* $(document).ready(function () {
  $(".new-tweet").find("form").find("textarea").click(function () {
    // alert("working")
    // event.stopImmediatePropagation
  })
  $(".new-tweet").find("textarea").keypress(function () {
    alert(this)
  })
  // });
});
 */

$(document).ready(function () {
  $(".new-tweet").find("textarea").keyup(function () {
    // $(".counter").text(140 - $(this).val().length);
    ($(this).parent().children(".counter")).text(140 - $(this).val().length);
    if (($(this).val().length) > 140) {
      // $(".new-tweet").find("textarea").addClass("invalid")
      $(this).addClass("invalid")
    } else {
      // $(".new-tweet").find("textarea").removeClass()
      $(this).removeClass()
    }
  });
})

// this.parent().children(".counter")
