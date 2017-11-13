'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  $('#message').text('Signed up succesfully, welcome to the agency. Please Sign In')
}

const signUpFailure = function () {
  $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  store.user = data.user
  $('nav1').show(800)
  $('nav').hide(500)
  $('#message').text('Signed in succesfully, hello 007')
}

const signInFailure = function () {
  $('#message').text('Error on sign in')
}

const changePasswordSuccess = function (data) {
  $('#message').text('Changed password successfully')
}

const changePasswordFailure = function () {
  $('#message').text('Error on change passwords')
}

const signOutSuccess = function () {
  $('section').hide()
  $('nav1').hide()
  $('nav').show(500)
  $('#message').text('Goodbye 007, please bring back the car in one piece this time.')
  $('#playerstatus').text('PLAYER STATUS')
}

const signOutFailure = function () {
  $('nav').show(500)
  $('#message').text('Error on signing')
}

const gamesPlayedStats = function (gamesPlayed) {
  $('#message').text(gamesPlayed)
}

const newGameSuccess = function (data) {
  store.game = data.game
  store.game.id = data.game.id
  store.game.cells = data.game.cells
  store.game.over = data.game.over
  $('section').show(800)
  $('#message').text('Create game succesfully')
}

const newGameFailure = function () {
  $('#message').text('Error on creating new game!!')
}

const updateScoreSuccess = function (data) {
  $('#message').text('Updated!')
}

const updateScoreFailure = function () {
  $('#message').text('Error on updating stats!!')
}

const showGameSuccess = function (data) {
  $('#playerstatus').text('TOTAL GAMES PLAYED: ' + data.games.length)
}

const showGameFailure = function () {
  $('#playerstatus').text('Error on finding stats!!')
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
  showGameFailure,
  showGameSuccess,
  updateScoreFailure,
  updateScoreSuccess,
  gamesPlayedStats
}
