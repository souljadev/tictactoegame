'use strict'
//
// const getFormFields = require(`../../../lib/get-form-fields`)
// const api = require('./api')
// const ui = require('./ui')

// X O pictures
const boxPic0 = document.getElementById('box0')

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

const pics = [blank, circle, redX]
console.log(pics)

const changePic = function () {
  const output = document.getElementById('box0')
  output.on('click', function () {
    console.log('Hello World')
  })
}

module.exports = {
  changePic
}
