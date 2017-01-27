const bindScroll = () => {
  if ($(window).scrollTop() + $(window).height() >= 
    $('main').offset().top + $('main').height() ) { 
    
    loadTweets();
  } 
}

const newTweetHandler = (e) => {
  e.preventDefault();
  const content = $(this).find('textarea').val();
  if (validateTweet(content)) {
    $.ajax({
      url: '/tweets',
      type: 'post',
      data: $(this).serialize(),
      contentType: 'application/x-www-form-urlencoded'
    }).then(function(tweet) {
        $('.new-tweet form')[0].reset();
        $('.flash').text('').hide();
        $('.counter').text('140');
        renderTweets([tweet], true);
    })
  }
}

const composeToggler = (e) => {
  $('.new-tweet').slideToggle().find('textarea').focus();
  return false;
}
