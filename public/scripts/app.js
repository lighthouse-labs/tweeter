
function tweetHeaderTemplate(tweet = {}) {
    // let $tweetHeader = $('<header>');
    // let $img = $('<img>').attr('src', tweetUser.avatars.small);
    // let $tweetName = $('<class>').attr('class', 'name').text(tweetUser.name)
    // let $tweetHash = $('<class>').attr('class', 'hashName').text(tweetUser.handle)
    // $tweetHeader.append($img);
    // $tweetHeader.append($tweetName);
    // $tweetHeader.append($tweetHash);
    // return $tweetHeader;

    const user = tweet.user || {};
    const avatars = user.avatars || {};
    const handle = user.handle || {};

    return `
    <header>
      <section class="hashName"><div>${ handle }<div></div></div></section>
      <section class="tweetImg"><img src="${ avatars.small }"></section>
      <section class="name">${ user.name }</section>
    </header>
    `;

}

function tweetFooterTemplate(tweet) {
  // let $tweetFooter = $('<footer>');
  // let $days = $('<class>').attr('class','timeago').text(tweetUser.created_at)
  // let $icons = $('<i>').attr('class','fa fa-heart icon').attr('aria-hidden', 'true');
  // let $icons2 = $('<i>').attr('class','fa fa-retweet icon').attr('aria-hidden', 'true');
  // let $icons3 = $('<i>').attr('class','fa fa-flag icon').attr('aria-hidden', 'true');
  // $tweetFooter.append($days);
  // $tweetFooter.append($icons);
  // $tweetFooter.append($icons2);
  // $tweetFooter.append($icons3);

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
 // TODO: Turn tweetObj into an <article> element

 let $tweet = $('<article>').attr("class", "tweet");
 // Add stuff to my article element using data from my tweetObj
 $tweet.append(tweetHeaderTemplate(tweet));
 $tweet.append($('<div>').attr('class','tweet-body').text(tweet.content.text));
 $tweet.append(tweetFooterTemplate(tweet));


 return $tweet;
}


var tweets = [
    {
   "user": {
     "name": "Newton",
     "avatars": {
       "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
       "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
       "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
     },
     "handle": "@SirIsaac"
   },
   "content": {
     "text": "If I have seen further it is by standing on the shoulders of giants"
   },
   "created_at": 1461116232227
 },
 {
   "user": {
     "name": "Descartes",
     "avatars": {
       "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
       "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
       "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
     },
     "handle": "@rd" },
   "content": {
     "text": "Je pense , donc je suis"
   },
   "created_at": 1461113959088
 },
 {
   "user": {
     "name": "Johann von Goethe",
     "avatars": {
       "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
       "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
       "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
     },
     "handle": "@johann49"
   },
   "content": {
     "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
   },
   "created_at": 1461113796368
 }
]