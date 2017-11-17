$(document).ready(function() {
  // $("#tweets-container").on("click", ".like", function(e) {



  $("#tweets-container").on("click",".like", function(event) {
    event.preventDefault();
    if (getlikes(this)) {
      $.ajax({
      url: "/:id",
      method: "POST",
      data: $(this).serialize(),
      // on success, pass in the loadTweets function and remove text from the textarea
      success: function () {
        $(".like").toggleClass("activated").toggleClass("unactivated")
        }
      });
      }
    });
  })
// })

