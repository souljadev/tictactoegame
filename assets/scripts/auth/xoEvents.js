'use strict'
//
// const getFormFields = require(`../../../lib/get-form-fields`)
// const api = require('./api')
// const ui = require('./ui')

// X O pictures
// const boxPic0 = document.getElementByClassName('xoBox')
//
// const BoardPic = function (src, alt, value) {
//   const img = document.createElement('img')
//   img.src = src
//   img.alt = alt
//   img.value = value
// }
//
// const redX = new BoardPic('assets/images/board/pieces/redx.png', 'tic', 1)
//
// const circle = new BoardPic('assets/images/board/pieces/circle.jpg', 'tac', 2)
//
// const blank = new BoardPic('assets/images/board/pieces/blank.jpg', 'toe', 0)

const imgValue = [0, 1]

const imgSrc = ['https://i.imgur.com/7NjsjJO.png', 'https://i.imgur.com/M9VrAIV.jpg']

let i = 0

const changePic = function (event) {
  this.setAttribute('src', imgSrc[i])
  this.setAttribute('value', imgValue[i])
  console.log(imgSrc[i])
  console.log(imgValue[i])
  if (i === 0) {
    i = 1
  } else (i = 0)
}

module.exports = {
  changePic
}
