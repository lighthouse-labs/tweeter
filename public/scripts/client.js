//js code for submitting and loading tweets from a given url

const createTweetElement = function(tweetData) {
        //when tweet was created (10 days ago)
        const time = timeago.format(tweetData.created_at);
        //escaping text input for any script tag in tweet
        const safeHTML = `${escape(tweetData.content.text)}`;

        //render tweets data
        const $tweet = $(`<article class="art-tweet">

                <header>
                    <i class="far fa-user"></i>
                    <span> ${tweetData.user.name}</span>
                    <span id="at-rate"> ${tweetData.user.handle}</span>
                </header>
                <div>
                    <p>${safeHTML}</p>
                </div>
                <footer>
                ${time};
                    <span id="icons">
          <i class="far fa-flag"></i>
          <i class="fas fa-retweet"></i>
          <i class="far fa-heart"></i>
        </span>
                </footer>
            </article>`);

        return $tweet;
    }
    //creating a new tweet and adding to twwets container
const renderTweets = function(tweets) {
    // remove tweets from tweets container before adding a new tweet
    $('.tweetContainer').empty();

    for (user of tweets) {
        let $tweetData = createTweetElement(user);
        $('.tweetContainer').prepend($tweetData);
    }

}

//load tweets from specified url
const loadTweets = function() {
        const url = "/tweets";
        $.ajax({
                url: url,
                method: 'GET',

            })
            .then((results) => {
                renderTweets(results);
            })
    }
    //escaping any malicious content from tweet input
    //like <script>alert("hi");</script>
const escape = function(str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
};

$(document).ready(function() {
    loadTweets();

    //eventlistener for submit(tweet) button
    $("#tweetform").submit(function(event) {

        // prevent from submitting a form
        event.preventDefault();

        //create a URL encoded text string for transmitting 
        // like hello%20user
        const str = $(this).serialize();

        //length of input text in tweet text area
        const currentLength = $('#textarea').val().length;

        //error message initially hidden
        $("#error").hide();

        //show error messgae if input text length>140
        if (currentLength > 140) {
            $("#error").show().html(" Characters limit Exceeded");
        }

        //show error messgae if no input 
        if (currentLength === 0) {
            $("#error").show().html("No Input");
        }

        //ajax request for submitting and loading tweets
        const url = "/tweets";
        $.ajax({
                url: url,
                method: 'POST',
                data: str

            })
            .then((results) => {
                loadTweets();

                //clear text area once tweet submitted
                $('#textarea').val('');
                $('#counter').val(140);
            })
    });
});