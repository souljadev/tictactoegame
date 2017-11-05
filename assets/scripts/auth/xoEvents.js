'use strict'

// const getFormFields = require(`../../../lib/get-form-fields`)
// const api = require('./api')
// const ui = require('./ui')

// X O pictures

const imgValue = [0, 1]

const imgSrc = ['https://i.imgur.com/7NjsjJO.png', 'https://i.imgur.com/M9VrAIV.jpg']

let i = 0

const changePic = function (event) {
  // start of clicking button
  // if there is a zero or 1 end function return false
  if ($(event.target).val() === '0' || $(event.target).val() === '1') {
    return false
  } else {
    // if value is not defined then set attr to boxes
    this.setAttribute('src', imgSrc[i])
    this.setAttribute('value', imgValue[i])
    // console.log($(event.target).val())
    // if I is 0 make it 1 else make 0
    if (i === 0) {
      i = 1
    } else {
      i = 0
    }
  }
}

const gameLogic = function (event) {
  // row 1 match
  if ($('#box0').val() === $('#box1').val() && $('#box1').val() === $('#box2').val() && $('#box1').val() === '0') {
    console.log('Player 1 wins')
    return false
  } else if ($('#box0').val() === $('#box1').val() && $('#box1').val() === $('#box2').val() && $('#box1').val() === '1') {
    console.log('Player 2 wins')
    return false
    // row 2 match
  } else if ($('#box3').val() === $('#box4').val() && $('#box4').val() === $('#box5').val() && $('#box4').val() === '0') {
    console.log('Player 1 wins')
    return false
  } else if ($('#box3').val() === $('#box4').val() && $('#box4').val() === $('#box5').val() && $('#box4').val() === '1') {
    console.log('Player 2 wins')
    return false
    //  row 3 match
  } else if ($('#box6').val() === $('#box7').val() && $('#box7').val() === $('#box8').val() && $('#box7').val() === '0') {
    console.log('Player 1 wins')
    return false
  } else if ($('#box6').val() === $('#box7').val() && $('#box7').val() === $('#box8').val() && $('#box7').val() === '1') {
    console.log('Player 2 wins')
    return false
    // col 1 match
  } else if ($('#box0').val() === $('#box3').val() && $('#box3').val() === $('#box6').val() && $('#box3').val() === '0') {
    console.log('Player 1 wins')
    return false
  } else if ($('#box0').val() === $('#box3').val() && $('#box3').val() === $('#box6').val() && $('#box3').val() === '1') {
    console.log('Player 2 wins')
    return false
    // col 2 match
  } else if ($('#box1').val() === $('#box4').val() && $('#box4').val() === $('#box7').val() && $('#box4').val() === '0') {
    console.log('Player 1 wins')
    return false
  } else if ($('#box1').val() === $('#box4').val() && $('#box4').val() === $('#box7').val() && $('#box4').val() === '1') {
    console.log('Player 2 wins')
    return false
    // col 3 match
  } else if ($('#box2').val() === $('#box5').val() && $('#box5').val() === $('#box8').val() && $('#box5').val() === '0') {
    console.log('Player 1 wins')
    return false
  } else if ($('#box2').val() === $('#box5').val() && $('#box5').val() === $('#box8').val() && $('#box5').val() === '1') {
    console.log('Player 2 wins')
    return false
    // top left to bottom right
  } else if ($('#box0').val() === $('#box4').val() && $('#box4').val() === $('#box8').val() && $('#box4').val() === '0') {
    console.log('Player 1 wins')
    return false
  } else if ($('#box0').val() === $('#box4').val() && $('#box4').val() === $('#box8').val() && $('#box4').val() === '1') {
    console.log('Player 2 wins')
    return false
    // top right to bottom left
  } else if ($('#box2').val() === $('#box4').val() && $('#box4').val() === $('#box6').val() && $('#box4').val() === '0') {
    console.log('Player 1 wins')
    return false
  } else if ($('#box2').val() === $('#box4').val() && $('#box4').val() === $('#box6').val() && $('#box4').val() === '1') {
    console.log('Player 2 wins')
    return false
  } else {
    console.log('draw')
  }
}

module.exports = {
  changePic,
  // boardValue,
  gameLogic
}
