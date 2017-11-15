/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 var data = [
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
 ];

function createTweetElement(tweetData) {
  let newTweet = $("<article class='tweet'>").append($("<header>"));
  let header = newTweet.children("header");
  header.append($("<img />", { src: tweetData.user.avatars.small, class: "avatar", alt: "avatar" }));
  header.append($("<div class='user-name'>").text(tweetData.user.name));
  header.append($("<div class='handle'>").text(tweetData.user.handle));
  // create content
  newTweet.append($("<div class='tweet-content'>").text(tweetData.content.text));
  // create footer
  newTweet.append($("<footer class='tweet-footer'>"));
  let footer = newTweet.children("footer");
  footer.append($("<p>").text(tweetData.created_at));
  footer.append($("<div class='icons'>"));
  // create icons
  let icons = footer.children("div");
  icons.append($("<i class='flag fa fa-flag-o'>"));
  icons.append($("<i class='retweet fa fa-retweet'>"));
  icons.append($("<i class='heart fa fa-heart-o'>"));

  return newTweet;
}

function renderTweets(array) {
  array.forEach((item) => {
    let tweet = createTweetElement(item);
    $("#tweets").append(tweet);
  });
}


$(document).ready(() => {
  renderTweets(data);
});
