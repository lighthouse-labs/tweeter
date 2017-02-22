$(document).ready(function(){
  $('#nav-comp-box').on('click', function(e){
    $('section.new-tweet').slideToggle();
    $('section textarea').focus();
  });
});