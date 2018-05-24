$(() => {
    $(".tweet").fadeTo('slow', 0.75);
    $(".tweet").hover(function (){
      $(this).fadeTo('slow', 1);
      },function () {    
      $(this).fadeTo('slow', 0.75);
    });
});