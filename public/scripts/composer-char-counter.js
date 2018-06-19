$(document).ready(function() {
  let charCount = 140;
  $("#newTweet").on("keyup", function(event) {
    let updateTag = $(this).parent().children(".counter")[0];
    console.log(updateTag);
    //console.log(document.getElementsByClassName(updateTag).textContent);
    updateTag.textContent = charCount - Array.from(event.target.value).length;

    if(charCount - Array.from(event.target.value).length < 0){
      $(updateTag).css("color", "red");
    }

  });
});