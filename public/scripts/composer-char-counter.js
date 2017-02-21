$(document).ready(function(e){
  let textbox = $('form').closest('.new-tweet').find('textarea');
  textbox.on('input', counterCounter);

// Function calculates the current value of the textbox input and displays it in reverse
// on the Counter display, for the user.
  function counterCounter(){
    let maxValue = 140 -1;
    let count = maxValue - +$(this).val().length;
    $(this).closest('.new-tweet').find('.counter').text(count);
    $(this).closest('.new-tweet').find(".counter").removeClass('negRed');
    $(this).closest('.new-tweet').find(".counter:contains('-')").addClass('negRed');
  }
});