/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

 $(() => {

  // Fake data taken from tweets.json
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
          "text": "<script>alert('uh oh!');</script>"
        },
        "created_at": 1461113796368
      }
    ];


    function timeAgo(miliseconds){
      const today = new Date().getTime();
      const milisecondsAgo = today - miliseconds;
      const days = Math.floor(milisecondsAgo / (1000*60*60*24));

      return `${days} days ago`;
      //diff.asHours();
      //diff.asMinutes();
    }


    function renderTweets(tweets) {
      // loops through tweets
        // calls createTweetElement for each tweet
        // takes return value and appends it to the tweets container
        tweets.forEach((tweet) => {
          const $htmlTweet = createTweetElement(tweet);
          $('#tweets-container').append($htmlTweet);
        });
    }

   function createTweetElement(tweet) {

      // const tweet = JSON.parse(tweetJSON);
      const $tweet = $("<article>").addClass("tweet");
      // HEADER
      const $header = $("<header>");
      const $avatar = $("<img>").attr("src", tweet.user.avatars.small).addClass("avatar");
      const $name = $("<span>").addClass("name").text(tweet.user.name);
      const $userName = $("<span>").addClass("username").text(tweet.user.handle);
      $header.append($avatar);
      $header.append($name);
      $header.append($userName);
      $tweet.append($header);
      // CONTENT
      const $content = $("<p>");
      $content.text(tweet.content.text);
      $tweet.append($content);
      //FOOTER
      const $footer = $("<footer>");
      const $timeAgo = $("<span>").text(timeAgo(tweet.created_at));
      const $actions = $("<div>").addClass("actions");
      const $actionFlag = $("<img>").attr("src", "/images/symbol.png");
      const $actionRetweet = $("<img>").attr("src", "/images/arrows.png");
      const $actionFav = $("<img>").attr("src", "/images/shapes.png");
      $actions.append($actionFlag);
      $actions.append($actionRetweet);
      $actions.append($actionFav);
      $footer.append($timeAgo);
      $footer.append($actions);
      $tweet.append($footer);
      return $tweet;
    }

  renderTweets(data);

 });




