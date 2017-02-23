const createTweetElement = function (tweetData) {

    $tweet = $("<article>").addClass("tweet");

    const $header = $("<header>").addClass("tweet-header")
    const profileSrc = tweetData.user.avatars.small;
    $header.append($("<img>").addClass("profile-pic").attr("src", profileSrc));

    $header.append($("<h2>").addClass("name").html(tweetData.user.name));
    $header.append($("<p>").addClass("username").html(tweetData.user.handle));
    $tweet.append($header);

    $tweetBody = $("<section>").addClass("tweet-body");
    $tweetBody.append($("<p>").html(tweetData.content.text));
    $tweet.append($tweetBody);

    $footer = $("<footer>").addClass("tweet-footer");
    const tweetAge = convertDate(tweetData.created_at);
    $footer.append($("<p>").addClass("tweet-age").html(tweetAge + ' days ago'));

    $footer.append($("<i>").addClass("icon fa fa-retweet fa-lg").attr('aria-hidden', "true"));
    $footer.append($("<i>").addClass("icon fa fa-flag fa-lg").attr('aria-hidden', "true"));
    $footer.append($("<i>").addClass("icon fa fa-heart fa-lg").attr('aria-hidden', "true"));

    $tweet.append($footer);

    return $tweet;
};