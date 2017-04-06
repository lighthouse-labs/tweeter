/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


// Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// to add it to the page so we can make sure it's got 
const TWEET_MAX_LENGTH = 140;

function renderTweets(tweets) {
    let $tweetsOverview = $("#tweets-container");
    for (tweet of tweets) {
        console.log(tweet);
        // tweets can be taken out 
        $tweetsOverview.prepend(createTweetElement(tweet));
        // TODO render the tweets and include .empty() for duplicate items
        // TODO do the append and add the classes elements underneath here
    }
    return $tweetsOverview;
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
}

// createTweetElement moved to a js file

// conveting to days old
function convertDate(postDate) {
    let post = new Date(postDate);
    let today = new Date();
    let timeDiff = Math.abs(today.getTime() - post.getTime());
    return Number(Math.ceil(timeDiff / (1000 * 3600 * 24)));
};

function loadTweets() {
    $.get("/tweets", function (data) {
        renderTweets(data);
    })
}
$(document).ready(function () {
// TODO $('new-tweet').hide();
loadTweets();
$(".new-tweet form").submit(function (event) {
    event.preventDefault();
    let $textarea = $(this).find('textarea');
    let $inputLength = $textarea.val().length;
    let text = $('[action="/tweets"]').serialize();
    if ($inputLength === 0) {
        alert('Please type in the box below the "Compose Tweet"');
        return
    } else if ($inputLength > TWEET_MAX_LENGTH) {
        alert(`You have typed over the ${TWEET_MAX_LENGTH} text limit.`);
        return;
    }

    $.post("/tweets",
        $(this).serialize()
    ).then(function (data) {
        loadTweets();
    });
    $textarea.val('').trigger('input');

});
$("#compose-button").click(function () {
    $(".new-tweet").slideToggle("slow");
    $("#tweet-input").focus();
});

// loadTweets();
// })
});