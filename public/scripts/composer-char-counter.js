$(document)
  .ready(function () {
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
  });
