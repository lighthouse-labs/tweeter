/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$('document').ready(function() {

  // Fake data taken from tweets.json
  const data = [
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
      "created_at": 1461126232227
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
      "created_at": 1461123959088
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
      "created_at": 1461123796368
    }
  ];


  //function that creates a dynamic tweet for the single tweet object
  function createTweetElement(tweetObj) {
    let $tweet = $('<article>').addClass('tweet');

    // adding child elements <header>, <p>, and <footer>
    let $header = $('<header>').addClass('tweet-header');
    let $para = $('<p>').addClass('tweetslist');
    let $footer = $('<footer>');

    $tweet.append($header);
    $tweet.append($para);
    $tweet.append($footer);

    //adding child elements to <header>
    //let $iLogo = $('<i>').addClass('far fa-smile');

    let $iLogo = $('<img>');
    $iLogo.attr("src", tweetObj.user.avatars.small);
    $iLogo.attr("align", "top");
    let $label = $('<label>');
    $label.text(tweetObj["user"]["name"]);
    let $span = $('<span>').addClass('tweetid').text(tweetObj["user"]["handle"]);

    $header.append($iLogo);
    $header.append($label);
    $header.append($span);

    //adding value to <p> (value is tweet text)
    $para.text(tweetObj.content.text);

    //adding children to <footer>
    let todayDate = new Date(); //.getDate();
    let createdDate = new Date(tweetObj.created_at); //.getDate();
    let dt = todayDate.getTime() - createdDate; //in milliseconds

    dt = Math.floor(dt / (1000 * 60 * 60 * 24));

    //let dt = todayDate - createdDate;
    //let dt = new Date().getDate() - new Date(tweetObj.created_at).getDate();
    $footer.text(dt + " days ago");

    let $spanFooter = $('<span>').addClass("tweetstats");
    $footer.append($spanFooter);

    //adding children to <span> within a footer
    let $iFlag = $('<i>').addClass("fas fa-flag");
    let $iRetweet = $('<i>').addClass("fas fa-retweet");
    let $iLovetweet = $('<i>').addClass("fas fa-heart");

    $spanFooter.append($iFlag);
    $spanFooter.append($iRetweet);
    $spanFooter.append($iLovetweet);

    return $tweet;
  }


  //function that renders the dynamic tweets on html page for array of tweets object passed to it
  function renderTweets(tweets) {
    //loops through tweets
      //calls createTweetElement for each tweet
      //takes return value and appends it to the tweets container
      for(let tweetObj of tweets) {
        let $tweet = createTweetElement(tweetObj);
        $('#realtweets').append($tweet);
      }
  }




  $('#tweetform').on('submit', (event) => {
    event.preventDefault();

   /* var $form = $(this),
    term = $form.find("textarea[")*/
    if(validateTweetForm()) {
      $.ajax({
        url: '/tweets',
        type: 'POST',
        data: $("form#tweetform").serialize(),
        success: function( datareceived, status, jQxhr ){
          alert("Tweet Sent");
        }
      });
    } else {
      $('#text').focus();
    }
  });


  function loadTweets() {
    $.ajax({
        url: '/tweets',
        type: 'GET',
        success: function( tweetsReceived){
          renderTweets(tweetsReceived);
        }
    });
  }



  function validateTweetForm() {
    let result = true;
    let tweetText = $("#text").val();
    let $li = "";

    $('#errList').html("");

    if(tweetText == null || tweetText.trim() == "") {
      $li = ('<li>No tweet!...Tweet please!</li>');

      $("#errList").append($li);
      result = false;
    }


    if(tweetText.length > 140) {
      $li = ('<li>Tweet limit is 140 characters only!</li>');
      $("#errList").append($li);
      result = false;
    }

    return result;
  }

  //loadTweets();

});   //ready() ends here