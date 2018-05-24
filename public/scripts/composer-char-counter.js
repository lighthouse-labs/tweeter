$(() => {
  $(".new-tweet textarea")
    .keyup(function () {
      const charCount = 140 - $(this)
        .val()
        .length;
      let charCountColor = (charCount < 0) ? "red" : "";
      $(".new-tweet .counter")
        .text(charCount)
      $(".new-tweet .counter")
        .css("color", charCountColor)
    });
    let hidden = 'not started';
    $("#nav-bar .compose")
    .click( function () {
      $(".new-tweet").slideToggle( 'slow' );
      hidden = hidden ? false : true;
      if(hidden){
        $(".new-tweet textarea").focus()
      }
    });
});
