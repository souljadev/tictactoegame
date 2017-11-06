'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  $('#message').text('Signed up succesfully')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  console.log(data)
  store.user = data.user
  $('#message').text('Signed in succesfully')
}

const signInFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign in')
}

const changePasswordSuccess = function (data) {
  console.log(data)
  $('#message').text('Changed password successfully')
}

const changePasswordFailure = function (error) {
  console.error(error)
  $('#message').text('Error on change passwords')
}

const signOutSuccess = function () {
  console.log('Succesfully Signed Out!')
  $('#message').text('Succesfully Signed Out!')
}

const signOutFailure = function (error) {
  console.error(error)
  $('#message').text('Error on signing')
}

const gamesPlayedStats = function (gamesPlayed) {
  console.error(gamesPlayed)
  $('#gameMessage').text(gamesPlayed)
}

const newGameSuccess = function () {
  console.log('New Game Created!')
  $('#message').text('New Game Created!')
}

const newGameFailure = function (error) {
  console.error(error)
  $('#message').text('Error on creating new game!!')
}

const findGameSuccess = function () {
  console.log('Found Stats!')
  $('#message').text('Your Wins!')
}

const findGameFailure = function (error) {
  console.error(error)
  $('#message').text('Error on finding stats!!')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutFailure,
  signOutSuccess,
  newGameFailure,
  newGameSuccess,
  findGameFailure,
  findGameSuccess,
  gamesPlayedStats
}
