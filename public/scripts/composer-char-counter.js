$(document).ready(function(e){


// Function calculates the current value of the textbox input and displays it in reverse
// on the Counter display, for the user.
  function counterCounter(){
    let maxValue = 140;
    let count = maxValue - Number($(this).val().length);
    let what = $(this).closest('.new-tweet');
    what.find('.counter').text(count);
    what.find('.counter').removeClass('negRed');
    what.find('.counter:contains("-")').addClass('negRed');
  }
  
  let textbox = $('form').closest('.new-tweet').find('textarea');
  textbox.on('input', counterCounter);
});