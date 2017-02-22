$(document).ready(function(){
  $('#form').submit(function(e){
    e.preventDefault();
    let data = $( this ).serialize();
    let url = "/tweets";

    $.ajax({
      type: "POST",
      url: url,
      data: data
    });
    location.reload();
  });
});