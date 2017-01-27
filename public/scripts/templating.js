const escape = (str) => {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
}

const createTweetElement = (tweetData) => {
  let html = `<article>
                <header>
                  <img class="tweet-avatar" src="${escape(tweetData.user.avatars.regular)}">
                  <h2 class="author">${escape(tweetData.user.name)}</h2>
                  <span class="author-handle">${escape(tweetData.user.handle)}</span>
                </header>
                <p>
                  ${escape(tweetData.content.text)}
                </p>
                <footer>
                  <time datetime="${(new Date(tweetData.created_at)).toUTCString()}">${formatTime(tweetData.created_at)}</time>
                  <ul class="tweet-actions">
                    <li><i class="fa fa-flag" aria-hidden="true"></i></li>
                    <li><i class="fa fa-retweet" aria-hidden="true"></i></li>
                    <li><i class="fa fa-heart" aria-hidden="true"></i></li>
                  </ul>
                </footer>
              </article>`
  return $(html);
}