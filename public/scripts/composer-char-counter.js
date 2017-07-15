const MAX_CHARACTER = 140;

$(function () {
    $(".counter").text(MAX_CHARACTER)
    console.log("ready!");
    charCounter();
});

function charCounter() {
    $('.text-box').keyup( function (event) {
        var counter = $(this).siblings().find(".counter");
        var countedChar = this.value.length;
        var negativeCountedChar = MAX_CHARACTER - countedChar;
        counter.text(negativeCountedChar)
        if (negativeCountedChar < 0) {
            counter.css ('color', 'red')
        } else {
            counter.css('color', 'black')
        }
    })
}
