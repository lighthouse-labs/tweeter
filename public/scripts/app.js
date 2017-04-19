/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 $(() => {

  // READ
  Handlebars.registerHelper('time_ago', (timestamp) => moment(timestamp).fromNow());
  const templateText = $('#tweet-template').text();
  // because is a function we can call it in map directly
  const template = Handlebars.compile(templateText);

  function renderTweets(tweets) {
    $('#tweets-container').empty();
    $('#tweets-container').append(tweets.reverse().map(template));
  }

  function loadTweets(){
     $.ajax({
        url: '/tweets',
        method: 'GET',
        success: function (tweets) {
          renderTweets(tweets);
        }
      });
  }

  loadTweets();

  // SHOW FORM FOR CREATING NEW TWEETS
  $('.compose').on('click', function(event){
    $('.new-tweet').slideToggle();
    $('.new-tweet').find('textarea').focus();
  });

  // CREATE
  $('.new-tweet form').on('submit', function(event) {
      event.preventDefault();
      const $form  = $(this);
      const $tweetText = $form.find('textarea');
      const $tweetCounter = $form.find('.counter');
      if($tweetCounter.hasClass('error')){
        $('#status').flash_message({
            text: "Too many characters",
            how: 'append'
        });
       return;
      }
      if(!$tweetText.val()){
        $('#status').flash_message({
            text: "The tweet can't be empty",
            how: 'append'
        });
        return;
      }
      $.ajax({
        url: '/tweets',
        method: 'POST',
        data: $form.serialize(),
        success: function(){
          $form.each(function(){
              this.reset();
          });
          loadTweets();
        },
        error: function () {
          console.log('error');
        }
      });
  });
});