$(document).ready(function() {
  $('.tweet-text').on('keyup', function() {
    const count = 140 - this.value.length;
    // console.log($('span.counter').text());

    $('span.counter').text(count);

    if(count < 0){
      $('span.counter').addClass('wrongText');
    }
    // $('span.counter').text(count);

  })

});

