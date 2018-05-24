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
  const $submit = $(".new-tweet form");

  $submit.on('submit', function (event) {
    event.preventDefault();
    const charCount = Number($(".new-tweet .counter")
      .text())
    if (charCount < 0) {
      return alert('Tweets must be under 140 characters long... srry.')
    }
    if (charCount === 140) {
      return alert('you have to enter something...')
    }
    $.post('/tweets', $(this)
      .serialize(),
      () => {
        console.log('success')
      });
      $.getJSON('/tweets', (data)=>{
      
      })
  });

});
