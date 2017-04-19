# Tweeter Project

A simple single page AJAX webpage resembling Twitter. Utilized jQuery, HMTL5 and CSS3 to familiarize with front end technologies. Given framework of code to be able to implement styling and jQuery; learning how to traverse the DOM.

## Stack
* Express
* Node
* HTML5
* jQuery
* CSS3
* Virtual Machine

## Getting Started

1. Fork and clone your fork of this repository.
2. Install dependencies: `npm install` or `npm i` for short.
3. Start the web server from the command line: `npm run local`
4. Open the app on <http://localhost:8080/> and make sure that it's loading.

## Example Code

```javascript

$(document).ready(function() {
  $('.new-tweet form').on('keydown', 'textarea', function(event) {
    var count = $(this).parent().find('.counter');
    var counter = 140 - $(this).val().length;
    count.html(counter);
      if(counter >= 0) {
        $(count).css('color', 'black');
         } else {
           $(count).css('color', 'red');
        }
  });
});


```

