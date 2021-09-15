$(document).ready(function() {
  const charLimit = 140;
  $('#tweet-text').on('input', function() {
    const counter = $('.counter')
const currentLength = $('#tweet-text').val().length;
const remainingChar = charLimit - currentLength;
counter.val(remainingChar);

if (counter.val() < 0) {
  
   counter.css({'color': 'red'})
}else {
  counter.css({'color': 'white'})
   }


  })
});


