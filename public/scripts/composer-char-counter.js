// call document when page loaded
console.log('before document')
$(document).ready(() => {
  console.log('hello')


  const $textarea = $('#tweet-text') 

  $textarea.on("keypress", (event) => {
    console.log(event);
  })

  // find letter counter
  const $counter = $textarea.parent().siblings().find('output.counter')



});






