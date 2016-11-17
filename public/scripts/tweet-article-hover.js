//=============TWEET ARTICLES==================//
//==IF HOVERED OVER HEADER TEXT COLOR GREEN======//
//=============ELSE TEXT IS GREY==================//
$(function(){
  $(".tweet header").hover(function() {
     $("text", this).css("color", "#00a087");
  }, function() {
     $("text", this).css("color", "#757575");
  });
});

//=============TWEET ARTICLES==================//
//==IF HOVERED OVER HEADER TEXT COLOR GREEN======//
//=============ELSE TEXT IS GREY==================//
$(function(){
  $(".tweet footer").hover(function() {
     $("i", this).css("color", "#00a087");
  }, function() {
     $("i", this).css("color", "#757575");
  });
});