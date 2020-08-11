$(document).ready(function(){
  $('#tweet-container article').on('mouseover', function(){
    $(this).addClass('change');
    $(this).css('opacity','100%');
    $(this).css('border-color','black');
    $('#tweet-container article header .handle').css('display','inline');
  })
  $('#tweet-container article').on('mouseleave', function(){
    $(this).removeClass('change');
    $(this).css('opacity','70%');
    $(this).css('border-color','rgb(104, 101, 101)');
    $('#tweet-container article header .handle').css('display','none');
  })
})