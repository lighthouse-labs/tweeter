"use strict";

function someMilliseconds() {
  return Math.floor(Math.random() * 400) + 100;
}

module.exports = function simulateAsync(callback) {
  setTimeout(callback, someMilliseconds());
}

