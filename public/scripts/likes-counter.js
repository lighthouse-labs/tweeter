$(document).ready(() => {
  setTimeout(() => {
    $("span.heart").click((event) => {
      let heart = $(event.currentTarget);
      let likes = parseInt(heart.children(".heart").text());
      if (heart.children(".heart").hasClass("fa-heart-o")) {
        heart.children(".heart").removeClass("fa-heart-o").addClass("fa-heart");
        heart.children(".heart").text(likes + 1);

      } else if (heart.children(".heart").hasClass("fa-heart")) {
        heart.children(".heart").removeClass("fa-heart").addClass("fa-heart-o");
        heart.children(".heart").text(likes - 1);
      }
    });
  }, 500);
})
