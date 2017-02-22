/*
$ Handles the slide toggle switch on the Compose button in the Nav Bar
*/

$(document).ready(function(){
  $('#nav-comp-box').on('click', function(e){
    $('section.new-tweet').slideToggle();
    $('section textarea').focus();
  });
});