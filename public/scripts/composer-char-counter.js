$(document).ready(function () {
    var maxLength = 140;
    $("#text").on("input", function () {
        console.log("input");
        var length = $(this).val().length;
        var length = maxLength - length;
        if (length < 0) {
            $('#counter').text(length).addClass("negativeCounter")
            
        } else {
            $('#counter').text(length).removeClass("negativeCounter")
            $('#compose-tweet').text("Compose Tweet").removeClass("negativeCounter")
        
        }
    });
        
    })

