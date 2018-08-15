/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
const tweetObject = 
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
  }




function createTweetElement(tweetObject){
    /*------------------------------------------------------------
    *This function receives a tweet object and returns an article element
    * with the entire HTML structure of the tweet
    * -----------------------------------------------------------*/
    let $tweet = $('<article>').addClass('tweet');
    //...

    return $tweet;

}

function renderTweets(tweets) {
    // loops through tweets
      // calls createTweetElement for each tweet
      // takes return value and appends it to the tweets container
    
  }





//var $tweet = createTweetElement(tweetData);

// Test / driver code (temporary)
//console.log($tweet); // to see what it looks like

// to add it to the page so we can make sure it's 
// got all the right elements, classes, etc.
//$('#tweetposts').append($tweet); 
     