$(document).ready(function() {
  let charCount = 140;
  $("#newTweet").on("keyup", function(event) {
    let updateTag = $(this).parent().children(".counter");
    console.log(document.getElementsByClassName(updateTag).innerHTML);
    document.getElementsByClassName(updateTag).innerHTML = charCount - event.target.value.length;
  });
});