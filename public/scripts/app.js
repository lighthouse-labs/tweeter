/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$('document').ready(function() {


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
    $iLogo.attr("src", tweetData.user.avatars.small);
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



  // Test / driver code (temporary). Eventually will get this from the server.
  let tweetData = {
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
  }


  //tweetData = JSON.parse(tweetData);
  var $tweet = createTweetElement(tweetData);

  // Test / driver code (temporary)
  console.log($tweet); // to see what it looks like
  $('#realtweets').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.



});   //ready() function ends here