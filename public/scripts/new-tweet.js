// When the 'Write New Tweet' button is clicked, it expands the new tweet form. 
// Clicking the Write New Tweet button when scrolled will return you to top of page

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
});