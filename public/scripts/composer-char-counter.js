$(() => { // character counter
  $(".new-tweet textarea")
    .keyup(function () {
      const charCount = 140 - $(this)
        .val()
        .length;
const $counter = $(".new-tweet .counter")
      charCount < 0 ? $counter.addClass('err') : $counter.removeClass('err')
      $(".new-tweet .counter")
        .text(charCount)
    });

//compose button toggle
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
