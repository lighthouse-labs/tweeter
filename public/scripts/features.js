$(document).ready(function () {



  $('.newTweetButton').click(() => {
    $('.new-tweet').slideDown();
    $('.new-tweet').find('textarea').focus();
    if (document.scrollingElement.scrollTop > 600) {
      $('html, body').animate({ scrollTop: 0 }, '500');
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
    $('html, body').animate({ scrollTop: 0 }, '300');
    $('.new-tweet').slideDown();
    $('.new-tweet').find('textarea').focus();
  });




});