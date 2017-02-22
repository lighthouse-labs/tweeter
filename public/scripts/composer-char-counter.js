$(document).ready(function () {
// changed to from id to class to the id isnt used
    $(".js-tweet-input").on('keyup', function (event) {
        const charsLeft = 140 - $(this).val().length;
        // Array.from is used for emojis that are not converted into unicode
        // const charsLeft = 140 - Array.from(this.value).length;
        // const charsLeft = 140 - ($(event.currentTarget.val()).length;

        var $cntSearch = $(this).parent().find('.counter')
        $cntSearch.html(charsLeft);
        if (charsLeft > -1) {
            $cntSearch.removeClass('negative-chars-remaining');
        } else {
            $cntSearch.addClass('negative-chars-remaining');
        }
    })
});