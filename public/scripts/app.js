$(document).ready(function () {
  // handle XSS
  function escape(str) {
    const div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

  function createTweetElement(tData) {
    const user = tData.user.name;
    const handle = tData.user.handle;
    const avatar = tData.user.avatars.small;
    const content = escape(tData.content.text);
    const dateAgo = moment(tData.created_at).fromNow();

    return `<article>
            <header>
              <span class='avatar'><img src='${avatar}' width='55px' height='55px'></span>
              <h2>${user}</h2>
              <span class='twt-acct'>${handle}</span>
            </header>
            <div class='content'>${content}</div>
            <footer>
              <span class='postdate'>${dateAgo}</span>
              <div class='social'>
                <span><i class='fa fa-flag' aria-hidden='true'></i></span>
                <span><i class='fa fa-retweet' aria-hidden='true'></i></span>
                <span><i class='fa fa-heart' aria-hidden='true'></i></span>
              </div>
            </footer>
          </article>`;
  }

  function renderTweets(tweets) {
    $('.tweets-container').empty();
    tweets.forEach((element) => {
      const tweet = createTweetElement(element);
      $('.tweets-container').append(tweet);
    });
  }

  function loadTweets() {
    $.ajax({
      url: '/tweets',
      method: 'GET',
      dataType: 'json',
      success: renderTweets
    });
  }

  // initial load
  loadTweets();

  $('form').on('submit', function (event) {
    event.preventDefault();
    $.ajax({
      url: '/tweets',
      method: 'POST',
      data: $(this).serialize(),
      success: () => {
        loadTweets();
        $('textarea').val('');
        $('.counter').text(140);
        $this.siblings('.submit-btn').attr('disabled', 'disabled');
        $this.siblings('.error').text('Write something!');
      }
    });
  });

  $('.compose').on('click', () => {
    $('.new-tweet').slideToggle();
    $('textarea').focus();
  });
});
