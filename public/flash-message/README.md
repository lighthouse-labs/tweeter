## Flash Message Plugin

A tiny jQuery plugin to show flash messages

This is a modified version of [jquery-flash](https://github.com/joelmoss/jquery-flash), originally created by [Joel Moss](https://github.com/joelmoss).


#### Usage

Simply call the following to show a flash message with the text "This is my message":

    $.flash('This is my message');

If you have Firefox and Firebug installed, or some other quality browser that has a
javascript command line, try running the above line of code to see the flash in action.

Or you can call it on an element, where the flash message will be populated from the
contents of the element:

    $('#my-element').flash();


#### Installation

To install, just include this javascript file and the accompanying CSS file into your
HTML page. And that's it!

Oh and don't forget the 'close' image.