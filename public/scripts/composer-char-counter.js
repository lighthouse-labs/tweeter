// call document when page loaded
$(document).ready(() => {
  const $textarea = $('#tweet-text');

  $textarea.on("input", function() {
    // find letter counter
    const $counter = $textarea.parent().siblings().find('output.counter');

    let charNum = $textarea.val().length;
    // console.log(charNum);
    let charCount = 140 - charNum;
    // console.log(charCount);

    // black count if > 0, red count is <= 0
    if (charCount > 0) {
      $counter.val(charCount).css({ 'color': 'black' });
    } else if (charCount <= 0) {
      $counter.val(charCount).css({ 'color': 'red' });
    }
  });
});






