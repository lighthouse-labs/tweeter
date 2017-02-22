/*
$ Function calculates the current value of the textbox input and displays it in reverse
$ on the Counter display, for the user.
*/

function counterCounter(){
  let maxValue = 140;
  let count = maxValue - Number($(this).val().length);
  let tweetbox = $(this).closest('.new-tweet');
  tweetbox.find('.counter').text(count);
  tweetbox.find('.counter').removeClass('negRed');
  tweetbox.find('.counter:contains("-")').addClass('negRed');
}

$(document).ready(function(e){
  let textbox = $('form').closest('.new-tweet').find('textarea');
  textbox.on('input', counterCounter);
});