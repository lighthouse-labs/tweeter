$(document).ready(function() {
  
  $('.new-tweet form textarea').on('keyup', charCounting);


});

const charCounting = (e)=> {
  let self = $(e.target);
  let counter = self.closest('form').find('.counter');
  let remainingChar = 140 - $(self).val().length;
  counter.text(remainingChar);
  if (remainingChar < 0 )  {
   counter.css('color','red');
   $('.flash').text('too much words :()').show();
  } else {
   counter.css('color','inherit');
   $('.flash').hide();
  }
}