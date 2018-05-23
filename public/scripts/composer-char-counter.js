  $(function() {

    var maxLength = 140;
    $('textarea').keyup(function() {
      var length = $(this).val().length;
      length = maxLength-length;
      $('.counter').text(length);
    });
  });