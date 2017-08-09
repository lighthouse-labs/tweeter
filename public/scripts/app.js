$( document ).ready(function() {


function tweetHeaderTemplate(tweet = {}) {

    const user = tweet.user || {};
    const avatars = user.avatars || {};
    const handle = user.handle || {}

    return `
    <header>
      <section class="hashName"><div>${ handle }<div></div></div></section>
      <section class="tweetImg"><img src="${ avatars.small }"></section>
      <section class="name">${ user.name }</section>
    </header>
    `;

}

function tweetFooterTemplate(tweet) {

  return `
    <footer>
      <div class="timeago">${ moment(tweet.created_at).fromNow() }</div>
      <i class="fa fa-heart icon" aria-hidden="true"/>
      <i class="fa fa-retweet icon" aria-hidden="true"/>
      <i class="fa fa-flag icon" aria-hidden="true"/>
    </footer>
  `;

}

function createTweetElement(tweet){

 let $tweet = $('<article>').attr("class", "tweet");
 $tweet.append(tweetHeaderTemplate(tweet));
 $tweet.append($('<div>').attr('class','tweet-body').text(tweet.content.text));
 $tweet.append(tweetFooterTemplate(tweet));

 return $tweet;
}

function renderTweets(tweets){
  tweets.forEach(function (tweet) {
    $('.containerTweet').prepend(createTweetElement(tweet));
  });
};

function loadTweets(){
  $.getJSON('/tweets', renderTweets)
}

function validateForm(){
  if ( form.length > 140 )
    return "aa";
}

$( "form" ).on( "submit", function( event ) {
    event.preventDefault();
    var textarea = $(this).find('textarea');
    var length = textarea.val().length;
    if (length > 140 || length === 0){
      alert("Please do not exceed 140 characters/or write something!")
      //alert(length)
    } else {
      alert("Your tweet has been submitted!");
      $.ajax({
        url: '/tweets',
        method: 'post',
        data: $( this ).serialize()
      }).done (function(){
        textarea.val('');
        loadTweets();
        })
      }
  });

$('.buttonNav').click(function(){
   $('.new-tweet').toggle();
   $('textarea').focus();
});


loadTweets();

});