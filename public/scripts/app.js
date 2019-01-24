$(document).ready(function() {

    /*
     * Client-side JS logic goes here
     * jQuery is already loaded
     * Reminder: Use (and do all your DOM work in) jQuery's document ready function
     */


    // Test / driver code (temporary). Eventually will get this from the server.

    const data = [{
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
                "text": "Je pense , donc je suis"
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




    function createTweetElement(tweet) {

        const renderedTweet =
            `<article class="article-tweet">
          <header>

            <div class= "img">
              <img src="https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png" alt="av" />
            </div>

            <h2>Bill Fields</h2>
            <span> @Mr.Fields </span>
          </header>
          <p>${tweet.content.text}</p>
              <hr>
          <footer class= "b">
                10 days ago
          </footer>
        </article>`

        return renderedTweet

    }


    function renderTweets(tweets) {
        tweets.forEach(function(tweet) {
            // Create a new p tag
            var newTweetElement = createTweetElement(tweet)

            $('#tweet-container').append(newTweetElement)
        });


    }

    // renderTweets(data);

    // form submission assignment found below


    $("form").submit(function(event) {
        event.preventDefault();
        var form = $(this);
        var url = form.attr('action');

        $.ajax({
            type: "POST",
            url: url,
            data: form.serialize(), // serializes the form's elements.
            success: function(data) {
                loadTweets(); // show response from the script.
            }
        });




    });

    // AJAX GET Request

    function loadTweets() {
        $.ajax({
            url: '/tweets',
            type: 'GET',
            dataType: 'json',
            success: function(tweets) {
                (renderTweets(tweets));
            }
        })
    }


    // function for the toggle button below:
    $('#nav-bar button').click(function() {
        $('.new-tweet').slideToggle(150),
            function() {
                $('.new-tweet textarea').focus();
            };

    });







    // $("#submit").validate({
    //    rules: {
    //        sender: {
    //            required: true,
    //            minlength: 3,
    //          lettersonly: true
    //        },
    //        receiver: {
    //            required: true,
    //            minlength: 3,
    //            lettersonly: true
    //        },
    //        message: {
    //          required: true,
    //          minlength: 5,
    //          maxlength: 30,
    //          lettersonly: true
    //        },
    //      },
    //     messages: {
    //                sender: {required:"Please enter your name"},
    //                receiver: { required: "Please enter receiver name up to 3 characters" },
    //                message: {required: "Enter your message 3-20 characters"},
    //          },
    // });
    // jQuery("#forms).validate({
    //       rules: {
    //          firstname: 'required',
    //          lastname: 'required',
    //          u_email: {
    //             required: true,
    //             email: true,//add an email rule that will ensure the value entered is valid email id.
    //             maxlength: 255,
    //          },
    //       }
    //    });


});