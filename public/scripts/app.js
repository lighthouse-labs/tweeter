$(function () {

    function createTweetElement(tweetData) {
        const timeRead = new Date(tweetData.created_at);
        const html = `
    <article class="tweet">
        <header class="tweet-header">
        <img class="profile-pic" src=${tweetData.user.avatars.small}>
        <h2 class="tweet-name">${tweetData.user.name}</h2>
        <p class="tweet-handle">${tweetData.user.handle}</p>
        </header>
        <main class="tweet-content">
        <p class="tweet-body">${escape(tweetData.content.text)}</p>
        </main>
        <footer class="tweet-footer">
        <p class="tweet-timestamp">${timeRead}</p>
        <div class="icons">
        <i class="fa fa-flag" aria-hidden="true"></i>
        <i class="fa fa-retweet" aria-hidden="true"></i>
        <i class="fa fa-heart" aria-hidden="true"></i>
        </div>
        </footer>
    </article>`;
        return html;
    }

    function escape(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }

//all tweets are retweeted along with new tweet
    //  let allTweets = "";
    //     for (const oneTweet in tweets) {
    //         const renderedTweet = createTweetElement(tweets[tweet])
    //         allTweets = renderedTweet + allTweets
    //     }
    //         $('#tweets-container').append(createTweetElement(allTweets))
        
    // }
    function renderData(tweets) {
        tweets.forEach((tweet) => {
            $('#tweets-container').prepend(createTweetElement(tweet))
        })
    };

    const $textBox = $('.form-layout');

    function charIsInvalid(characterCheck) {
        const tweetCharNumber = $(characterCheck).children().find(".text-box").context["0"].value.length
        if (tweetCharNumber > 140 || tweetCharNumber === 0) {
            return true
        } else {
            return false
        }
    }
    function generateTweet(event) {
        const $form = $(this);
        event.preventDefault()
        const charValidation = charIsInvalid($form)
        if (charValidation === true) {
            alert("Error! Too long or too short")
        } else {
            $.ajax({
                type: 'POST',
                url: "/tweets",
                data: $form.serialize()
            })
            .done(() => {
                loadtweets(event)
                $form.find("textarea").val("")
                $form.find(".counter").text("140")
            })
        }
    }

    function loadtweets() {
        $.getJSON('/tweets')
            .done((tweets) => {
            })
            .done((tweets) => {
                renderData(tweets)
            })
    }
    
    loadtweets()
    $textBox.on('submit', generateTweet)
    $(".compose-action").click(function () {
        $(".new-tweet").slideToggle(function () {
            if ($(".new-tweet").is(":visible")) {
                $(".new-tweet > form > textarea").focus();
            }
        })
    });
});