$(function() {

console.log("ready")
//document ready callback function inside
// which all our DOM-related logic
//Using jQuery and an appropriate selector,
// register an event handler to the textarea 
//element for the form inside of the .new-tweet section
//http://api.jquery.com/category/events/event-handler-attachment/

// $(".new-tweet").click(function(){
// alert("hello world");

// });

$("#tweet-field").on("keyup", function() {

var maxLength = 140;
var length = this.value.length;
var countLength = maxLength - length;
console.log(countLength);

$(this).parent().find(".counter").html(countLength);

if (countLength < 0){
  $(this).parent().find('.counter').css({ "color": "#ff0000"});
  } else {
  $(this).parent().find('.counter').css({ "color": ""});
  }
});
});









