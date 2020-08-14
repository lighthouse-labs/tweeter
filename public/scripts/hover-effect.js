$(document).ready(function() {
  //when mouse is moving over the tweet:
  $('#tweet-container').on('mouseover','.tweet', function() {
    $(this).addClass('change');
    $(this).css('opacity','100%');
    $(this).css('border-color','black');
    $('#tweet-container article header .handle').css('display','inline');
  });
  //when mouse is moved away from the tweet:
  $('#tweet-container').on('mouseleave','.tweet', function() {
    $(this).removeClass('change');
    $(this).css('opacity','70%');
    $(this).css('border-color','rgb(104, 101, 101)');
    $('#tweet-container article header .handle').css('display','none');
  });
});