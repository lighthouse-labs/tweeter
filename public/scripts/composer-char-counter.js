$(document).ready(() => {
  const $textarea = $('#tweet-text');

  $textarea.on("input", function() {
    // find letter counter
    const $counter = $textarea.parent().siblings().find('output.counter');

    let charNum = $textarea.val().length;
    let charCount = 140 - charNum;

    // black if > 0 letters. red if < 0 letters
    if (charCount > 0) {
      $counter.val(charCount).css({ 'color': 'black' });
    } else if (charCount <= 0) {
      $counter.val(charCount).css({ 'color': 'red' });
    }
  });
});






