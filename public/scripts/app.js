/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
var tweetData = {
    "user": {
        "name": "Newton",
        "avatars": {
            "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
            "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
            "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
    },
    "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
}

var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
console.log($tweet); // to see what it looks like
// to add it to the page so we can make sure it's got 
function renderTweets(tweets) {
    let $tweetsOverview = $('<section> id="tweets-container"');
    for (tweet in tweets) {
        $tweetsOverview.append(createTweetELement(tweets[tweet]));
    }
    return $tweetsOverview;
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
}

function createTweetElement(data) {
    const $tweet = $('<article>').addClass('tweet');
    const $header = $('<header>');
    $tweet.append($header);
    const $h2 = $('<h2>').text(data.user.name);
    $header.append($h2);
    const $div = $('<div>');
    $tweet.append($div);
    const $p = $('<p>').text(data.content.text);
    $div.append($p);
    // const $footer = $('<footer>').calculateDaysSincePostDate(Number(data.created_at));
    // $tweet.append($footer);
    return $tweet;

};

function calculateDaysSincePostDate(postDate) {
    let post = new Date(postDate);
    let today = new Date();
    let timeDiff = Math.abs(today.getTime() - post.getTime());
    return Number(Math.ceil(timeDiff / (1000 * 3600 * 24)));
};

$(document).ready(function () {
    $('#tweets-container').append($tweet);
});