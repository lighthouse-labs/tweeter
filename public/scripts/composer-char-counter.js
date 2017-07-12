$(function () {
    console.log("ready!");
    charCounter();
});

function charCounter() {
    $('.text-box').keyup( function (event) {
        var counter = $(this).siblings().find(".counter");
        var countedChar = this.value.length;
        var negativeCountedChar = 140 - countedChar;
        counter.text(negativeCountedChar)
        if (negativeCountedChar < 0) {
            counter.css ('color', 'red')
        } else {
            counter.css('color', 'black')
        }
    })
}
