$(document).ready(function(){
var maxLength = 140;
$(".new-tweet > form > textarea").on ("keyup", function() {
  var counter = $(".new-tweet > form > textarea").siblings(".counter")
  var txtLength = $(this).val().length;
  var txtCurrentLimit = maxLength-txtLength;
  $('.counter').text(txtCurrentLimit);
  if (txtCurrentLimit < 0) {
    counter.css('color', 'red');
  } else {
    counter.css('color', 'black');
  }
});
});




//
//
//
//
//
// $(document).ready(function(){
//   //txtarea where you post tweet function
//   $(".new-tweet > form > textarea").on( "keyup", function() {
//     var txtar = $(".new-tweet > form > textarea");
//     // console.log(copy[0].value);
//     console.log(txtar.val());
//   //counter function
//     var counter = txtar.siblings(".counter");
//     var leng = txtar.val().length;
//     var numchar = (140 - leng);
//     counter.text(numchar);
//     if (numchar < 0 ) {
//       counter.css('color', 'red');
//     } else {
//       counter.css('color', 'black');
//     }
//   })
// }); //end of ready function
