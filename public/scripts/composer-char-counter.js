// call document when page loaded
console.log('before document')
$(document).ready(() => {
  console.log('hello')


  const $textarea = $('#tweet-text') 

  // $textarea.on("input", (event) => {
  //   console.log(event.originalEvent);
  // })

  $textarea.on("input", function() {

    // find letter counter
    const $counter = $textarea.parent().siblings().find('output.counter')
  
    let charNum = $textarea.val().length
    console.log(charNum)
    let charCount = 140 - charNum
    console.log(charCount)
  })

});






