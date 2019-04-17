
function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
}

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
        <footer class="footer">${tweet.created_at}</footer>  
    </article>`;
} 

$(function () {
    $('#send-tweet').submit(function (event) {
        event.preventDefault();
        if (!$("#text").val()) {
            alert("Please enter a tweet");
            return
        } else if ($("#text").val().length > 140) {
            alert("Tweet exceeds 140 characters");
            return
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

function loadTweets() {
    $.ajax('/tweets', { method: 'GET' })
        .done(function (data) {
            renderTweets(data)
        });
}


function renderTweets(tweets) {
    for (let tweetData of tweets) {
        var $tweet = createTweetElement(tweetData);
        $('.tweet-container').prepend($tweet);
    }
}

$(document).ready(function () {
    loadTweets();
    $(".new-tweet").hide()
    $("button").click(function () {
        $(".new-tweet").toggle(500);
        $("#text").select();
    });
});
