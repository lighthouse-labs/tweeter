// escaping input from the user safeguard against xss
const escape = (str) => {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = (tweetData) => {
  let html = `<article class="radius-general" data-this-tweet="${tweetData._id}">
                <header>
                  <img alt="avatar" class="tweet-avatar" src="${escape(tweetData.user.avatars.regular)}" 
                  height="80px" width="80px">
                  <h2 class="author">${escape(tweetData.user.name)}</h2>
                  <address class="author-handle">${escape(tweetData.user.handle)}</address>
                </header>
                <blockquote class="tweet-body" cited="${escape(tweetData.user.name)}">
                  <p>${escape(tweetData.content.text)}</p>
                </blockquote>
                <footer>
                  <time datetime="${(new Date(tweetData.created_at)).toUTCString()}">${formatTime(tweetData.created_at)}</time>
                  <ul class="tweet-actions float-right">
                    <li><i class="fa fa-flag" aria-hidden="true" data-tweetr-action-type="flags" data-tweetr-action-state="on">0</i></li>
                    <li><i class="fa fa-retweet" aria-hidden="true" data-tweetr-action-type="shares" data-tweetr-action-state="on">0</i></li>
                    <li><i class="fa fa-heart" aria-hidden="true" data-tweetr-action-type="likes" data-tweetr-action-state="on">0</i></li>
                  </ul>
                </footer>
              </article>`
  return $(html);
};