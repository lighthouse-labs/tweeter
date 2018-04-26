$(document).ready(function() {


    $("#textarea").keyup( function() {

      const charsLeft = 140 - $(this).val().length;
      const counter = $(this).siblings('.counter');

      counter.html(charsLeft);

      if (charsLeft < 0) {

        $(".counter").css("color", "red");

      } else {

        $(".counter").css("color", "black");
      }

});

})






//       var textLength = $(this).val().length;
//       // console.log(textLength);

//       $(this).siblings('.counter')

//       var remainingChars = 140 - textLength;
//       console.log(remainingChars);


//       if (textLength <= 140) {


//       } else if (textLength > 140) {



//       }
//     })

//   }

//   chartCount();


// });




// Now we need to render this result to the user by updating the counter on the page.

// To target the counter, you could just use $('.counter') but this is also bad practice. Why?
// How should you target the counter instead? Instead of just being more explicit, leverage this again to get to the counter.
// Not sure how? Remember that this points to the textarea. Can you perhaps use jQuery to traverse up the DOM tree from that node/element
// and then back down to a node that matches '.counter' CSS selector? You may need to research this a bit and/or discuss it with your peers.

