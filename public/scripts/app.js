/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

document.addEventListener("dblclick", (event) => {
  console.log(event.screenX + ',' + event.screenY);
});

navigator.geolocation.getCurrentPosition(function(geo) {
  console.log(geo.coords.latitude + ', ' + geo.coords.longitude);
});