$(document).ready(function(){
  $('#form').submit(function(e){
    e.preventDefault();
    let textBoxLength = Number($('form').closest('.new-tweet').find('textarea').val().length);
    if (textBoxLength === 0){
      alert("The input box has to be greater then 0");
      return;
    } else if (textBoxLength > 140){
      alert("The input box has to be less then 140 Characters, Tweeter, Duuuhhh");
      return;
    } else {
      let data = $( this ).serialize();
      let maxLength = 140 + 5;
      data = unescape(data);
      if (!data || data.length < 0 || data.length > maxLength){
        alert("The input box has to be not NULL, greater then 0 and less then 140 chars");
        return;
      }
      let url = "/tweets";
      $.ajax({
        type: "PUT",
        url: url,
        data: data
      });
      location.reload();
    }
  });
});