$(document).ready(function() {
  $('.tweet-text').on('keyup', function(event) {
    console.log(event.target.value.length);
    const count = 140 - event.target.value.length;
    // console.log($('span.counter').text());
    $('span.counter').text(count);
    // $('span.counter').text(count);
  })
});

