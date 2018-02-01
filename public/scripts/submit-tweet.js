function getForm() {
  let form = $(' .new-tweet [name="tweet"]');
  return form;
}

$(document).ready(function() {
  let form = getForm();
  $(form).on('submit', function(event) {
    event.preventDefault();
    let str = $(form).serialize();
    let text = $(' .new-tweet [name="tweet"] [name="text"]').val();

    // fail form submission for empty tweets or ones that are too long.
    if (text === '') {
      alert('Sorry, no Bumping or Saging the thread');
      return false;
    }
    if (text.length > 140) {
      alert('Sorry, our tweets are limited to 140 characters');
      return false;
    }
    // post tweet to mongodb and when finished insert it into the tweet sections.
    $.ajax({
      type: 'POST',
      url: '/tweets',
      data: str
    }).done($.get('/tweets', function(data) {
      console.log(data);
      let post = data[data.length - 1];
      let newTweet = createTweetElement(post);
      $('.tweets').prepend(newTweet);
    }));
  });
});
