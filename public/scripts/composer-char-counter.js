$(document).ready(function () {
// changed to from id to class to the id isnt used
    $(".tweet-input").on('input', function (event) {
        const charsLeft = TWEET_MAX_LENGTH - $(this).val().length;
        var $cntSearch = $(this).parent().find('.counter')
        $cntSearch.html(charsLeft);
        if (charsLeft > -1) {
            $cntSearch.removeClass('negative-chars-remaining');
        } else {
            $cntSearch.addClass('negative-chars-remaining');
        }
    })
});