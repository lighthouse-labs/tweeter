$(document).ready(() => {
  $("section.new-tweet").hide();
  $("#nav-bar .compose").on("click", (event) => {
    $("section.new-tweet").slideToggle();
    $("#tweet-field").focus();
  });
});
