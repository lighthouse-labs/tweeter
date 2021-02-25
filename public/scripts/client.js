$(document).ready(function() {
  loadTweets();

  $('#send-tweet').on('submit', function(event) {
    event.preventDefault();

    if ($('.error').is(':visible')){
      $('.error').slideUp().empty();
    }

    let serializedData = $(this).serialize();
    if (serializedData === "text=") {
      $('.error').append("No tweet is present!").slideDown();
    } else if ($('.counter').val() < 0) {
      $('.error').append("Your tweet is too long!").slideDown();
    } else {
      $.ajax({ data: serializedData, method: 'POST', url: '/tweets' })
        .then((result) => {
          loadTweets();
          $('.text-area').val('');
          $('.counter').val(140);
        });
    }
  });
});