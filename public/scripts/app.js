/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
// var tweetData = {
//     "user": {
//         "name": "Newton",
//         "avatars": {
//             "small": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//             "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//             "large": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//         },
//         "handle": "@SirIsaac"
//     },
//     "content": {
//         "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
// }

// var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
// console.log($tweet); // to see what it looks like
// to add it to the page so we can make sure it's got 
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

// function createTweetElement(data) {
//     const $tweet = $('<article>').addClass('tweet');
//     const $header = $('<header>');
//     $tweet.append($header);
//     const $h2 = $('<h2>').text(data.user.name);
//     $header.append($h2);
//     const $div = $('<div>');
//     $tweet.append($div);
//     const $p = $('<p>').text(data.content.text);
//     $div.append($p);
//     // const $footer = $('<footer>').calculateDaysSincePostDate(Number(data.created_at));
//     // $tweet.append($footer);
//     return $tweet;
// };

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
        alert("Load was performed.");

    })
}

$(document).ready(function () {
// TODO $('new-tweet').hide();

    loadTweets();
    // $('#tweets-container').append($tweet);
    $(".new-tweet form").submit(function (event) {
        event.preventDefault();
        // need to select path then select the data to post which should be the tweet

        let $textarea = $(this).find('textarea');
        let $inputLength = $textarea.val().length;
        let text = $('[action="/tweets"]').serialize();
        if ($inputLength === 0) {
            alert('Please type in the box below the "Compose Tweet"');
            return
        }
        else if ($inputLength > 140) {
            alert('You have typed over the 140 text limit.');
            return
        } else {
            // TODO change to $('#tweets-container').empty();
            $textarea.val('');
        }

        $.post("/tweets",
            $(this).serialize(),
            function (data, status) {
                alert("Data: " + data + "\nStatus: " + status);
            }
        ).then(function (data) {
            loadTweets();
        });
    });
});