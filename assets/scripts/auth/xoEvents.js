'use strict'
const store = require('../store')

// hide section
$(document).ready(function () {
  $('section').hide()
  $('nav1').hide()
}
)

// X O pictures
const imgValue = ['x', 'o']
// x first then o picture
const imgSrc = ['https://i.imgur.com/kTwNHOH.jpg', 'https://i.imgur.com/UWb7gM0.jpg']

store.gameOver = false

let i = 'x'

const playerOTurn = function () {
  $('#playerstatus').text('Player 2 Turn')
}

const playerXTurn = function () {
  $('#playerstatus').text('Player 1 Turn')
}

const gameLogic = function (event) {
  // row 1 match player X
  if ($('#box0').val() === $('#box1').val() && $('#box1').val() === $('#box2').val() && $('#box1').val() === 'x') {
    console.log('Player 1 wins')
    store.gameOver = true
  // row 1 match player O
  } else if ($('#box0').val() === $('#box1').val() && $('#box1').val() === $('#box2').val() && $('#box1').val() === 'o') {
    console.log('Player 2 wins')
    store.gameOver = true
    // row 2 match player X
  } else if ($('#box3').val() === $('#box4').val() && $('#box4').val() === $('#box5').val() && $('#box4').val() === 'x') {
    console.log('Player 1 wins')
    store.gameOver = true
  } else if ($('#box3').val() === $('#box4').val() && $('#box4').val() === $('#box5').val() && $('#box4').val() === 'o') {
    console.log('Player 2 wins')
    store.gameOver = true
    //  row 3 match player X
  } else if ($('#box6').val() === $('#box7').val() && $('#box7').val() === $('#box8').val() && $('#box7').val() === 'x') {
    console.log('Player 1 wins')
    store.gameOver = true
  } else if ($('#box6').val() === $('#box7').val() && $('#box7').val() === $('#box8').val() && $('#box7').val() === 'o') {
    console.log('Player 2 wins')
    store.gameOver = true
    // col 1 match player X
  } else if ($('#box0').val() === $('#box3').val() && $('#box3').val() === $('#box6').val() && $('#box3').val() === 'x') {
    console.log('Player 1 wins')
    store.gameOver = true
  } else if ($('#box0').val() === $('#box3').val() && $('#box3').val() === $('#box6').val() && $('#box3').val() === 'o') {
    console.log('Player 2 wins')
    store.gameOver = true
    // col 2 match player X
  } else if ($('#box1').val() === $('#box4').val() && $('#box4').val() === $('#box7').val() && $('#box4').val() === 'x') {
    console.log('Player 1 wins')
    store.gameOver = true
  } else if ($('#box1').val() === $('#box4').val() && $('#box4').val() === $('#box7').val() && $('#box4').val() === 'o') {
    console.log('Player 2 wins')
    store.gameOver = true
    // col 3 match player X
  } else if ($('#box2').val() === $('#box5').val() && $('#box5').val() === $('#box8').val() && $('#box5').val() === 'x') {
    console.log('Player 1 wins')
    store.gameOver = true
  } else if ($('#box2').val() === $('#box5').val() && $('#box5').val() === $('#box8').val() && $('#box5').val() === 'o') {
    console.log('Player 2 wins')
    store.gameOver = true
    // top left to bottom right
    // player X
  } else if ($('#box0').val() === $('#box4').val() && $('#box4').val() === $('#box8').val() && $('#box4').val() === 'x') {
    console.log('Player 1 wins')
    store.gameOver = true
  } else if ($('#box0').val() === $('#box4').val() && $('#box4').val() === $('#box8').val() && $('#box4').val() === 'o') {
    console.log('Player 2 wins')
    store.gameOver = true
    // top right to bottom left
  } else if ($('#box2').val() === $('#box4').val() && $('#box4').val() === $('#box6').val() && $('#box4').val() === 'x') {
    console.log('Player 1 wins')
    store.gameOver = true
  } else if ($('#box2').val() === $('#box4').val() && $('#box4').val() === $('#box6').val() && $('#box4').val() === 'o') {
    console.log('Player 2 wins')
    store.gameOver = true
  } else if (
    ($('#box0').val() === 'x' || $('#box0').val() === 'o') &&
    ($('#box1').val() === 'x' || $('#box1').val() === 'o') &&
    ($('#box2').val() === 'x' || $('#box2').val() === 'o') &&
    ($('#box3').val() === 'x' || $('#box3').val() === 'o') &&
    ($('#box4').val() === 'x' || $('#box4').val() === 'o') &&
    ($('#box5').val() === 'x' || $('#box5').val() === 'o') &&
    ($('#box6').val() === 'x' || $('#box6').val() === 'o') &&
    ($('#box7').val() === 'x' || $('#box7').val() === 'o') &&
    ($('#box8').val() === 'x' || $('#box8').val() === 'o') &&
    store.gameOver === false) {
    console.log('draw')
  } else {
    if (i === 'x') {
      playerOTurn()
      console.log('Player 2 Turn')
    } else {
      playerXTurn()
      console.log('Player 1 Turn')
    }
  }
}

let k = 0
const changePic = function (event) {
  // start of clicking button
  // if there is a zero or 1 end function return false
  if ($(event.target).val() === 'x' ||
       $(event.target).val() === 'o' ||
       store.gameOver === true) {
    return false
  } else {
    // if value is not defined then set attr to boxes
    this.setAttribute('src', imgSrc[k])
    this.setAttribute('value', imgValue[k])
    // function checks if there is a winner
    gameLogic()
    const idString = $(this).attr('id')
    const lastNum = idString.substr(idString.length - 1)
    store.index = Number(lastNum)
    console.log(lastNum)
    // console.log($(event.target).val())
    // if I is 0 make it 1 else make 0
    if (i === 'x') {
      k = 1
      i = 'o'
      return false
    } else {
      i = 'x'
      k = 0
      return false
    }
  }
}

const resetGame = function (event) {
  event.preventDefault()
  // clear box 0
  $('#box0').attr('src', '')
  $('#box0').val('')
  // clear box 1
  $('#box1').attr('src', '')
  $('#box1').val('')
  // clear box 2
  $('#box2').attr('src', '')
  $('#box2').val('')
  // clear box 3
  $('#box3').attr('src', '')
  $('#box3').val('')
  // clear box 4
  $('#box4').attr('src', '')
  $('#box4').val('')
  // clear box 5
  $('#box5').attr('src', '')
  $('#box5').val('')
  // clear box 6
  $('#box6').attr('src', '')
  $('#box6').val('')
  // clear box 7
  $('#box7').attr('src', '')
  $('#box7').val('')
  // clear box 8
  $('#box8').attr('src', '')
  $('#box8').val('')
  store.gameOver = false
  i = 'x'
  k = 0
}

module.exports = {
  resetGame,
  changePic,
  gameLogic,
  playerXTurn,
  playerOTurn
}
