const bindScroll = function() {
  let windowsDimension = $(window).scrollTop() + $(window).height();
  let contentDimension = $('main').offset().top + $('main').height();
  if (windowsDimension >= contentDimension) {    
    loadTweets();
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

const likesHandler = function(e) {
  const $this = $(e.target);
  const tweetID = $this.closest('article').data('this-tweet');

  $.ajax({
    url: `/tweets/${tweetID}/likes`,
    type: 'post',
    data: `tweet=${tweetID}`
  }).then(function(currentCount) {
    $this.text(currentCount);
  });

  $(e.target).toggleClass('off');
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


const showForm = function(formName) {
  return function(e) {
    $('#modal').css('display', 'flex')
    .find('form').hide().parent()
    .find(`.form-${formName}`).show()
    .find('#email').focus();    
    return false
  }
}

const showRegistration = showForm('register');
const showLogin = showForm('login');
