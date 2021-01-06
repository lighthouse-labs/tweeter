// The small purple arrow in the bottom right corner of the screen allows the user
// to return easily back to the top of the page. 

$(document).ready(function () {
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