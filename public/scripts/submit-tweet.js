


function getForm() {
  let form = $(' .new-tweet [name="tweet"]')
return form
}





function postTweet(form) {

}

$(document).ready(function() {
  let form = getForm()
$(form).on('submit', function(event) {
  event.preventDefault();
  let str = $(form).serialize()
  let text = $(' .new-tweet [name="tweet"] [name="text"]').val()
  if (text == '') {
    alert('Sorry, no Bumping or Saging the thread')
    return false
  }
  if (text.length > 140) {
    alert('Sorry, our tweets are limited to 140 characters');
    return false;
  }
  $.ajax({
    type: 'POST',
    url: '/tweets',
    data: str,
  })

})
})
