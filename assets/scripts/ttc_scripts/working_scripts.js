//
// <h5>"Which player's turn: <p id="playerstatus"></p>"</h5>
//
//
//
//
//

























// function getValue (event) {
//   const divValue = parseInt(event.target.textContent)
//   boardRow0.push(divValue)
// }
//
// function numberTrack () {
//   const gridItems = $('#box')
//   for (let i = 0; i < gridItems.length; i++) {
//     gridItems[i].onclick = getValue
//   }
// }
//
// console.log(numberTrack())
// console.log(boardRow0)
// let box0click = function () {
//   document.getElementById('box0').click()
//   console.log('it works!')
// }
//   document.body.div..appendChild(img);
/*
const box0 = document.getElementById('clickChange0')

const BoardPic = function (src, width, height, alt) {
  const img = document.createElement('img')
  img.src = src
  img.width = width
  img.height = height
  img.alt = alt
}

const redX = new BoardPic('assets/images/board/pieces/redx.png', '100', '200', 'tic')

const circle = new BoardPic('assets/images/board/pieces/circle.jpg', '100', '200', 'tic')

const blank = new BoardPic('assets/images/board/pieces/blank.jpg', '100', '200', 'tic')

console.log(redX)
console.log(circle)
console.log(blank)
console.log(box0)
*/
//
// $(document).ready(function () {
//   $('.box0').click(function () {
//     console.log('second function')
//   })
// })

// const gameLogic = function (event) {
//   // row 1 match
//   if (($(event.target).val() === '0' || $(event.target).val() === '1') &&
//     $('#box0').val() === $('#box1').val() && $('#box1').val() === $('#box2').val() && $('#box1').val() === '0') {
//     console.log('Player 1 wins')
//     return false
//   } else if ($('#box0').val() === $('#box1').val() && $('#box1').val() === $('#box2').val() && $('#box1').val() === '1') {
//     console.log('Player 2 wins')
//     return false
//     // row 2 match
//   } else if ($('#box3').val() === $('#box4').val() && $('#box4').val() === $('#box5').val() && $('#box4').val() === '0') {
//     console.log('Player 1 wins')
//     return false
//   } else if ($('#box3').val() === $('#box4').val() && $('#box4').val() === $('#box5').val() && $('#box4').val() === '1') {
//     console.log('Player 2 wins')
//     return false
//     //  row 3 match
//   } else if ($('#box6').val() === $('#box7').val() && $('#box7').val() === $('#box8').val() && $('#box7').val() === '0') {
//     console.log('Player 1 wins')
//     return false
//   } else if ($('#box6').val() === $('#box7').val() && $('#box7').val() === $('#box8').val() && $('#box7').val() === '1') {
//     console.log('Player 2 wins')
//     return false
//     // col 1 match
//   } else if ($('#box0').val() === $('#box3').val() && $('#box3').val() === $('#box6').val() && $('#box3').val() === '0') {
//     console.log('Player 1 wins')
//     return false
//   } else if ($('#box0').val() === $('#box3').val() && $('#box3').val() === $('#box6').val() && $('#box3').val() === '1') {
//     console.log('Player 2 wins')
//     return false
//     // col 2 match
//   } else if ($('#box1').val() === $('#box4').val() && $('#box4').val() === $('#box7').val() && $('#box4').val() === '0') {
//     console.log('Player 1 wins')
//     return false
//   } else if ($('#box1').val() === $('#box4').val() && $('#box4').val() === $('#box7').val() && $('#box4').val() === '1') {
//     console.log('Player 2 wins')
//     return false
//     // col 3 match
//   } else if ($('#box2').val() === $('#box5').val() && $('#box5').val() === $('#box8').val() && $('#box5').val() === '0') {
//     console.log('Player 1 wins')
//     return false
//   } else if ($('#box2').val() === $('#box5').val() && $('#box5').val() === $('#box8').val() && $('#box5').val() === '1') {
//     console.log('Player 2 wins')
//     return false
//     // top left to bottom right
//   } else if ($('#box0').val() === $('#box4').val() && $('#box4').val() === $('#box8').val() && $('#box4').val() === '0') {
//     console.log('Player 1 wins')
//     return false
//   } else if ($('#box0').val() === $('#box4').val() && $('#box4').val() === $('#box8').val() && $('#box4').val() === '1') {
//     console.log('Player 2 wins')
//     return false
//     // top right to bottom left
//   } else if ($('#box2').val() === $('#box4').val() && $('#box4').val() === $('#box6').val() && $('#box4').val() === '0') {
//     console.log('Player 1 wins')
//     return false
//   } else if ($('#box2').val() === $('#box4').val() && $('#box4').val() === $('#box6').val() && $('#box4').val() === '1') {
//     console.log('Player 2 wins')
//     return false
//   } else {
//     console.log('draw')
//   }
// }
