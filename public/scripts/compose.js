$(function(){
  $('.compose').on("click", function(){
    $('.new-tweet').slideToggle(function(){
      $('#text').focus();
    });
  })
  $('.delete').on("click", function(){
    $('html').remove();
    console.log("Ha!");
  })

})
