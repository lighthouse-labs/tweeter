const bindScroll = function() {
  let windowsDimension = $(window).scrollTop() + $(window).height();
  let contentDimension = $('main').offset().top + $('main').height();
  if (windowsDimension >= contentDimension) {    
    loadTweets();
  } 
};

const newTweetHandler = function(e) {
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
    });
  }
};

const composeToggler = function() {
  $('.new-tweet').slideToggle().find('textarea').focus();
  return false;
};

const charCounting = function(e) {
  const $this = $(this)
  let counter = $this.closest('form').find('.counter');
  let remainingChar = 140 - $this.val().length;
  counter.text(remainingChar);
  if (remainingChar < 0 )  {
   counter.css('color','red');
   $('.flash').text('too much words :()').show();
  } else {
   counter.css('color','inherit');
   $('.flash').hide();
  }
};