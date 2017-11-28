$(document).ready(function() {


  $("#tweets-container").on("click",".like", function(event) {
    event.preventDefault();
    var id = $(this).data('id')
    console.log(id)
    // if (getlikes(this)) {
      $.ajax({
      url: `/tweets/${id}`,
      method: "POST",
      data: $(this).serialize(),
      // on success, pass in the loadTweets function and remove text from the textarea
      success: function (tweet) {
        console.log("Made it back to likes.js")
        $(".like").toggleClass("activated").toggleClass("unactivated")
        $(`.like-counter[data-id=${tweet._id}]`).text(tweet.likes);
        }
      });
      // }
    });
  })


