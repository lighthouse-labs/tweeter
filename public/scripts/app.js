//Disable cross-site scripting
function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
};
//this function creates the tweet with name/username/tweet/time created
function createTweetElement(tweet) {
    return `<article class="tweet"> 
        <header class="header">
            <figure>
                <img src= "${tweet.user.avatars.small}"/>
                <figcaption>${tweet.user.name}</figcaption>
            </figure>
            <p class="userhandle">${tweet.user.handle}</p>
        </header>
        <p class="tweet-area">${escape(tweet.content.text)}</p>
        <footer class="footer">${jQuery.timeago(tweet.created_at)}</footer>  
    </article>`;
}; 

//Tweet submission validation
$(function () {
    $('#send-tweet').submit(function (event) {
        event.preventDefault();
        if (!$("#text").val()) {
            $('#compose-tweet').text("Please Enter Tweet").addClass("negativeCounter");
            return;
        } else if ($("#text").val().length > 140) {
            $('#compose-tweet').text("Tweet exceeds character limit").addClass("negativeCounter");
            return;
        } else {
            $('#counter').text("140");
        }

        var tweet = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "/tweets",
            data: tweet,
            success: (function () {
                loadTweets();
                $('#send-tweet').trigger("reset");

                console.log('Success');
            })
        });
    });
});    

//Retrieves tweets from database
function loadTweets() {
    $.ajax('/tweets', { method: 'GET' })
    .done(function (data) {
        $('.tweet-container').empty();
        renderTweets(data);
    });
};

//Render tweets from database and adds new tweet 
function renderTweets(tweets) {
    for (let tweetData of tweets) {
        var $tweet = createTweetElement(tweetData);
        $('.tweet-container').prepend($tweet);
    };
};

//Toggles the compose tweet box
$(document).ready(function () {
    loadTweets();
    $(".new-tweet").hide()
    $("button").click(function () {
        $(".new-tweet").toggle(500);
        $("#text").select();
    });
});

