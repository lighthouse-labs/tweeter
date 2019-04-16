$(document).ready(function () {
    var maxLength = 140;
    $("#text").keyup(function () {
        var length = $(this).val().length;
        var length = maxLength-length;
        if (length < 0) {
            $('#counter').text(length).css('color', 'red');
        } else { 
            $('#counter').text(length).css('color', 'black');
    }
});

});