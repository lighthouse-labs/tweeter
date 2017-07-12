/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
$(function () {

    var data = [
        {
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
        },
        {
            "user": {
                "name": "Descartes",
                "avatars": {
                    "small": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
                    "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
                    "large": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
                },
                "handle": "@rd"
            },
            "content": {
                "text": "<script>alert('uh oh!');</script>"
            },
            "created_at": 1461113959088
        },
        {
            "user": {
                "name": "Johann von Goethe",
                "avatars": {
                    "small": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
                    "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
                    "large": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
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
        const timeRead = new Date(tweetData.created_at * 1000);
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
        <p class="tweet-timestamp">${timeRead.toUTCString()}</p>
        </footer>
    </article>`;
        return html;
    }
    
    function escape(str) {
        var div = document.createElement('div');
        div.appendChild(document.createTextNode(str));
        return div.innerHTML;
    }


    // var $tweet = createTweetElement(tweetData);
    function renderData(data) {
        data.forEach((tweet) => {
            $('#tweets-container').prepend(createTweetElement(tweet))
        })
    };

    renderData(data);
    // }
    // Test / driver code (temporary)
    // console.log($tweet); // to see what it looks like

});
