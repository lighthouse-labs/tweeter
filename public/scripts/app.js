$(document).ready(function(){

function createTweetElement (data) {
  const createdTime = new Date(data.created_at*1000)

  function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
  }

  var $tweet = `

              <article class="tweet">
                <header>
                  <img class="userlogo" src=${data.user.avatars.small}>
                  <h3>${escape(data.user.name)}</h3>
                  <span class="shortUsername">${escape(data.user.handle)}</span>
                </header>
                <article class="tweetMessage">${escape(data.content.text)}
                </article>
                <footer>
                  ${'Created on ' + escape(createdTime.toUTCString(data.created_at))}
                  <img class="hoverIcons" src="/images/Bolt.png">
                  <img class="hoverIcons" src="/images/Reload.png">
                  <img class="hoverIcons" src="/images/Heart.png">
                </footer>
              </article>
              `


return $tweet;

// Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
}


function renderTweets(tweets) {
  $('tweets-container').children().remove();
  tweets.forEach(function(item){
  $('#tweets-container').prepend(createTweetElement(item)); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
})
}

// document.getElementById("tweetSubmit").addEventListener("click", function(event) {
//   event.preventDefault()
// });



function loadTweets () {
  $.getJSON('/tweets')
  .done((tweets) => {
    console.log(tweets)
  })
  .done((tweets) => {
    renderTweets(tweets)
  })
}

function formValidation () {
  var text = $('.new-tweet > #tweetSubmit > textarea')
  if (!text.val().length) {
    alert('Enter message!')
    return false
  }
  if (text.val().length > 140) {
    alert('Please shorten your message')
    return false
  }
  return true
}


function createTweets () {
  event.preventDefault();
  if (formValidation()) {
    const $form = $(this);
    $.ajax({
      type: 'POST',
      url: '/tweets',
      data: $form.serialize()
    })
    .done(() => {
      loadTweets()
    })
  }
}

const $form = $('#tweetSubmit');
$form.on('submit', createTweets)
loadTweets()


$( ".button" ).click(function() {
  $( ".new-tweet" ).slideToggle( "slow", function() {
  });
  $("#tweetTextArea").focus()
});



});
/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
