$(document).ready(function() {
    $('#textarea').keyup(updateCount);
    // update counter for character input
    function updateCount() {

        //find length of textarea input
        const count = $(this).val().length;
        const allowed = 140 - count;

        //add or remove warning based on characetr count
        if (allowed > 0) {
            $("#counter").removeClass('warning').text(allowed);
        } else {
            $("#counter").addClass('warning').text(allowed);
        }
    }

});