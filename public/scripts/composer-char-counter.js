// $(document).ready(function() {
//   console.log('HEY.');
// });

// $(document).ready(function() {
//   console.log($('span'))
// });







$(function () {
 $("section.new-tweet textarea").on("input", function (count) {
   var txtLength = $("textarea").val().length;
   var maxLength = 140;
   var txtCounter = $(".counter").text(140 - txtLength);
   if (txtLength > maxLength ) {
     $(".counter").css("color", "tomato");
   } else {
    $(".counter").css("color", "black");
   }
 })
});

// const state = {
//   message: ''
// }

// var paragraph = document.createElement('p')
// document.body.appendChild(paragraph)

// paragraph.appendChild(document.createTextNode(state.message))

// button.addEventListener('click', (event) => {
//   state.message = 'Good morning'
//   paragraph.text(state.message)
// })

// <html>
//   <head></head>
//   <body>
//     <p>Good morning</p>
//   </body>
// </html>


// const state = {
//   message: ''
// }

// shouldComponentUpdate(props) {

// }

// handleClick(event) {
//   this.setState({
//     message: 'Good morning'
//   })
// }

// render() {
//   return (
//     <html>
//       <head></head>
//       <body>
//         <p>{ state.message }</p>
//         <button onClick={ handleClick }>
//       </body>
//     </html>
//   )
// }