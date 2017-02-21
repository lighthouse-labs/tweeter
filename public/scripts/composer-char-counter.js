$(document).ready(function(e){


// Function calculates the current value of the textbox input and displays it in reverse
// on the Counter display, for the user.
  function counterCounter(){
    let maxValue = 140;
    let count = maxValue - Number($(this).val().length);
    $(this).closest('.new-tweet').find('.counter').text(count);
    $(this).closest('.new-tweet').find(".counter").removeClass('negRed');
    $(this).closest('.new-tweet').find(".counter:contains('-')").addClass('negRed');
  }
  
  let textbox = $('form').closest('.new-tweet').find('textarea');
  textbox.on('input', counterCounter);
});