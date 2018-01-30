// A $( document ).ready() block.
$( document ).ready(function() {
  console.log("I AM LOADED");

  // This is the tweet character counter, turns red when <= 0
  $('.new-tweet textarea').on('keyup', function(){
    let tweetLength = $(this).val().length;
    let maximumLength = 140 - tweetLength;

    $(this).parent().children('.counter').text(maximumLength);

    if(maximumLength <= 0){
      $(this).parent().children('.counter').addClass('maximumChar');
    }

  });

}); // Document ready end


