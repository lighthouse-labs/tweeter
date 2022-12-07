$(document).ready(function(el) {
  console.log("document).ready.working")
  $('textarea').on("input", function() {
    let maxlength = 140
    let currentLength = $(this).val().length;
    let remainingChars = maxlength - currentLength;

    console.log(maxlength - currentLength + " chars left");
    let counter = $(this).parent().siblings('div.newTweetBottom').children('.counter')//'div.newTweetBottom').children('.counter');
    console.log("counter ➤", counter);
    counter.text(remainingChars);

      counter.toggleClass('redText', remainingChars < 0);

  });
});