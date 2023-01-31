const data = [
  {
    user: {
      name: "Newton",
      avatars: "https://i.imgur.com/73hZDYK.png",
      handle: "@SirIsaac",
    },
    content: {
      text: "If I have seen further it is by standing on the shoulders of giants",
    },
    created_at: 1461116232227,
  },
  {
    user: {
      name: "Descartes",
      avatars: "https://i.imgur.com/nlhLi3I.png",
      handle: "@rd",
    },
    content: {
      text: "Je pense , donc je suis",
    },
    created_at: 1461113959088,
  },
];

/**
 * This function calculates the year/month/day/hour/minute/seconds passed since createdTime and returns it as a string. If the time is greater than 1, add 's' to show that it is plural.
 *
 * @param {number} createdTime Milliseconds since epoch time the tweeter post was created.
 * @return {string} A string that displays the year/month/day/hour/minute/seconds passed since createdTime.
 */
const displayTimePassed = (createdTime) => {
  const msSincePost = Date.now() - createdTime;

  const seconds = Math.floor(msSincePost / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  if (years) {
    return `${years} year${years > 1 ? "s" : ""} ago`;
  }
  if (months) {
    return `${months} month${months > 1 ? "s" : ""} ago`;
  }
  if (days) {
    return `${days} day${days > 1 ? "s" : ""} ago`;
  }
  if (hours) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  }
  if (minutes) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  }
  if (seconds) {
    return `${seconds} second${seconds > 1 ? "s" : ""} ago`;
  }
};

/**
 * This function takes in an array of tweet data objects and calls the createTweetElement function
 * for each tweet data in the array. Then it appends the return value from the createTweetElement function
 * to the #tweets-container section.
 *
 * @param {array} tweetObjects Array of objects that contain tweet data.
 * @return {undefined} This function does not return any value.
 */
const renderTweets = (tweets) => {
  $("#tweets-container").empty();
  for (const tweet of tweets) {
    const $tweet = createTweetElement(tweet);

    $("#tweets-container").append($tweet);
  }
};

/**
 * This function takes one tweet data object and formats each value in the object in HTML format.
 * The HTML format is the indiviaul article element that displays the username, avatar, handle,
 * tweet content, and the time passed since user uploaded the tweet.
 *
 * @param {object} tweetData Milliseconds since epoch time the tweeter post was created.
 * @return {string} A HTML template literal that renders tweet data inside the article element.
 */
const createTweetElement = (data) => {
  const { user, content, created_at } = data;

  let $tweet = $('<article class="tweet"></article>');
  const header = $(`<header>
    <img src="${user.avatars}" alt="${user.name}'s avatar" />
    <h3>${user.name}</h3>
    <div class="handle">${user.handle}</div>
  </header>`);
  const paragraph = $("<p></p>");
  const footer = $(`<footer>
    <h6>${displayTimePassed(created_at)}</h6>
    <div class="footer-icons">
      <i class="fa-solid fa-flag"></i>
      <i class="fa-solid fa-retweet"></i>
      <i class="fa-solid fa-heart"></i>
  </div>
  </footer>`);
  paragraph.text(content.text);
  $tweet.append(header).append(paragraph).append(footer);

  return $tweet;
};

const loadTweets = () => {
  $.getJSON("/tweets/").then((tweetDataArr) => renderTweets(tweetDataArr));
};

$(function () {
  const $form = $(".new-tweet").children("form");
  $form.on("submit", function (event) {
    event.preventDefault();
    const $error = $(this).children("div.error-container");
    // $error.addClass("hidden");
    const $errorMsg = $error.find(".error-message");
    const $textarea = $(this).children("textarea");
    const $data = $textarea.serialize();

    if (!$textarea.val().trim()) {
      $errorMsg.html("You cannot upload a blank tweet.");
      return $error.removeClass("hidden");
    }
    if ($textarea.val().length > 140) {
      $errorMsg.html("Exceeded the maximum character limit of 140.");
      return $error.removeClass("hidden");
    }

    $textarea.val("");
    const $counter = $(this).children("#tweet-text-bottom").children("output");
    $counter.val(140);
    console.log("Form submitted, performing ajax call...");
    $.post("/tweets/", $data).then(loadTweets);
  });

  const $closeButton = $(".new-tweet").find(".close-button");
  $closeButton.on("click", function (event) {
    event.preventDefault();
    const $error = $(this).closest("div.error-container");
    $error.addClass("hidden");
    const $textarea = $(this)
      .closest("div.error-container")
      .siblings("textarea");
    $textarea.val("");
    const $counter = $(this)
      .closest(".error-container")
      .next("#tweet-text-bottom")
      .children("output");
    $counter.val(140);
    $counter.removeClass("error");
  });

  const $modalBackdrop = $(".new-tweet").find("div.error-container");
  $modalBackdrop.on("click", function (event) {
    if (event.target === this) {
      event.preventDefault();
      const $error = $(this).closest("div.error-container");
      $error.addClass("hidden");
      const $textarea = $(this).siblings("textarea");
      $textarea.val("");
      const $counter = $(this).next("#tweet-text-bottom").children("output");
      $counter.val(140);
      $counter.removeClass("error");
    }
  });

  loadTweets();
});
