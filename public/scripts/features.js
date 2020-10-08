$(document).ready(function () {

  // Tweet hover: show box-shadow and user @handle
  $('.tweet').on('mouseover', (event) => {
    $(event.target).find('.handle').removeClass('hidden');
  });
  $('.tweet').on('mouseleave', (event) => {
    $(event.target).find('.handle').addClass('hidden');
  });

  $('.newTweetButton').click(() => {
    $('.new-tweet').slideDown();
    if (document.scrollingElement.scrollTop > 600) {
      $('html, body').animate({scrollTop: 0}, '300');
    }
  })
  $('.exitTweet').click(() => {
    $('.new-tweet').slideUp();
  })

  $(document).on('scroll', () => {
    
    if ($(window).width() >= 1024) {
    if (document.scrollingElement.scrollTop > 400) {
      $('.arrowToTop').css('display', 'block');
    } else if (document.scrollingElement.scrollTop <= 400) {
      $('.arrowToTop').css('display', 'none');

    }
  } else if ($(window).width() < 1024) {
    if (document.scrollingElement.scrollTop > 900) {
      $('.arrowToTop').css('display', 'block');
    } else if (document.scrollingElement.scrollTop <= 900) {
      $('.arrowToTop').css('display', 'none');
    }
  }
  });
  $('.arrowToTop').click((event) => {
    event.preventDefault();
    $('html, body').animate({scrollTop: 0}, '300');
    $('.new-tweet').slideDown();
  });

  


});