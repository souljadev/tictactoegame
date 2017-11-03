'use strict'
//
// const getFormFields = require(`../../../lib/get-form-fields`)
// const api = require('./api')
// const ui = require('./ui')

// X O pictures
// const boxPic0 = document.getElementByClassName('xoBox')

const BoardPic = function (src, alt, value) {
  const img = document.createElement('img')
  img.src = src
  img.alt = alt
  img.value = value
}

const redX = new BoardPic('assets/images/board/pieces/redx.png', 'tic', 1)

const circle = new BoardPic('assets/images/board/pieces/circle.jpg', 'tac', 2)

const blank = new BoardPic('assets/images/board/pieces/blank.jpg', 'toe', 0)

const pics = [blank, circle, redX]

let circleonly = ['assets/images/board/pieces/redx.png', 'assets/images/board/pieces/circle.jpg', 'assets/images/board/pieces/blank.jpg']

// const setAttr = $(function () {
//   $('.xoBox').each(function () {
//     $.each(this.attributes, function (i, a) {
//       console.log(i, a.name, a.value)
//     })
//   })
// })
let i = 0

const changePic = function (event) {
  this.setAttribute('src', circleonly[i])
  i++
  console.log(circleonly[i])
  // if (circleonly[i] > 2) { circleonly = circleonly[0] }
  // console.log(circleonly[i])
}

module.exports = {
  changePic
}
