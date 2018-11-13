$(document).ready(function() {
    // --- our code goes here ---
    console.log('running')

    const $tweetTextarea = $('.tweetTextarea');

    $tweetTextarea.on('input', function() {
        var count = 140 - this.textLength;
        
        $(".counter").text(count);

        if (count >= 0) {
            $(".counter").css('color', 'black');
        }

        if (count < 0) {
            $(".counter").css('color', 'red');
        }
    })

  });


