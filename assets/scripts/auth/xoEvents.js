'use strict'

// X O pictures
const imgValue = [0, 1]

const imgSrc = ['https://i.imgur.com/7NjsjJO.png', 'https://i.imgur.com/M9VrAIV.jpg']

let gameOver = false

let i = 0

const gameLogic = function (event) {
  // row 1 match
  if ($('#box0').val() === $('#box1').val() && $('#box1').val() === $('#box2').val() && $('#box1').val() === '0') {
    console.log('Player 1 wins')
    gameOver = true
  } else if ($('#box0').val() === $('#box1').val() && $('#box1').val() === $('#box2').val() && $('#box1').val() === '1') {
    console.log('Player 2 wins')
    gameOver = true
    // row 2 match
  } else if ($('#box3').val() === $('#box4').val() && $('#box4').val() === $('#box5').val() && $('#box4').val() === '0') {
    console.log('Player 1 wins')
    gameOver = true
  } else if ($('#box3').val() === $('#box4').val() && $('#box4').val() === $('#box5').val() && $('#box4').val() === '1') {
    console.log('Player 2 wins')
    gameOver = true
    //  row 3 match
  } else if ($('#box6').val() === $('#box7').val() && $('#box7').val() === $('#box8').val() && $('#box7').val() === '0') {
    console.log('Player 1 wins')
    gameOver = true
  } else if ($('#box6').val() === $('#box7').val() && $('#box7').val() === $('#box8').val() && $('#box7').val() === '1') {
    console.log('Player 2 wins')
    gameOver = true
    // col 1 match
  } else if ($('#box0').val() === $('#box3').val() && $('#box3').val() === $('#box6').val() && $('#box3').val() === '0') {
    console.log('Player 1 wins')
    gameOver = true
  } else if ($('#box0').val() === $('#box3').val() && $('#box3').val() === $('#box6').val() && $('#box3').val() === '1') {
    console.log('Player 2 wins')
    gameOver = true
    // col 2 match
  } else if ($('#box1').val() === $('#box4').val() && $('#box4').val() === $('#box7').val() && $('#box4').val() === '0') {
    console.log('Player 1 wins')
    gameOver = true
  } else if ($('#box1').val() === $('#box4').val() && $('#box4').val() === $('#box7').val() && $('#box4').val() === '1') {
    console.log('Player 2 wins')
    gameOver = true
    // col 3 match
  } else if ($('#box2').val() === $('#box5').val() && $('#box5').val() === $('#box8').val() && $('#box5').val() === '0') {
    console.log('Player 1 wins')
    gameOver = true
  } else if ($('#box2').val() === $('#box5').val() && $('#box5').val() === $('#box8').val() && $('#box5').val() === '1') {
    console.log('Player 2 wins')
    gameOver = true
    // top left to bottom right
  } else if ($('#box0').val() === $('#box4').val() && $('#box4').val() === $('#box8').val() && $('#box4').val() === '0') {
    console.log('Player 1 wins')
    gameOver = true
  } else if ($('#box0').val() === $('#box4').val() && $('#box4').val() === $('#box8').val() && $('#box4').val() === '1') {
    console.log('Player 2 wins')
    gameOver = true
    // top right to bottom left
  } else if ($('#box2').val() === $('#box4').val() && $('#box4').val() === $('#box6').val() && $('#box4').val() === '0') {
    console.log('Player 1 wins')
    gameOver = true
  } else if ($('#box2').val() === $('#box4').val() && $('#box4').val() === $('#box6').val() && $('#box4').val() === '1') {
    console.log('Player 2 wins')
    gameOver = true
  } else if (
    ($('#box0').val() === '0' || $('#box0').val() === '1') &&
    ($('#box1').val() === '0' || $('#box1').val() === '1') &&
    ($('#box2').val() === '0' || $('#box2').val() === '1') &&
    ($('#box3').val() === '0' || $('#box3').val() === '1') &&
    ($('#box4').val() === '0' || $('#box4').val() === '1') &&
    ($('#box5').val() === '0' || $('#box5').val() === '1') &&
    ($('#box6').val() === '0' || $('#box6').val() === '1') &&
    ($('#box7').val() === '0' || $('#box7').val() === '1') &&
    ($('#box8').val() === '0' || $('#box8').val() === '1') &&
    gameOver === false) {
    console.log('draw')
  } else {
    if (i === 0) {
      console.log('Player 2 Turn')
    } else {
      console.log('Player 1 Turn')
    }
  }
}

const changePic = function (event) {
  // start of clicking button
  // if there is a zero or 1 end function return false
  if ($(event.target).val() === '0' ||
       $(event.target).val() === '1' ||
       gameOver === true) {
    return false
  } else {
    // if value is not defined then set attr to boxes
    this.setAttribute('src', imgSrc[i])
    this.setAttribute('value', imgValue[i])
    // function checks if there is a winner
    gameLogic()
    const board = [ $('#box0').val(), $('#box1').val(), $('#box2').val(), $('#box3').val(), $('#box4').val(), $('#box5').val(), $('#box6').val(), $('#box7').val(),
      $('#box8').val()]
    console.log(board)
    // console.log($(event.target).val())
    // if I is 0 make it 1 else make 0
    if (i === 0) {
      i = 1
    } else {
      i = 0
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
  gameOver = false
}

module.exports = {
  resetGame,
  changePic
}
