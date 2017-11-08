'use strict'
const store = require('../store')

const signUpSuccess = function (data) {
  console.log(data)
  $('section').show()
  $('nav1').show()
  $('#message').text('Signed up succesfully')
}

const signUpFailure = function (error) {
  console.error(error)
  $('#message').text('Error on sign up')
}

const signInSuccess = function (data) {
  console.log(data)
  store.user = data.user
  $('section').show()
  $('nav1').show()
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

const newGameSuccess = function (data) {
  console.log(data)
  console.log(data.game.id)
  store.game = data.game
  store.game.id = data.game.id
  store.game.cells = data.game.cells
  store.game.over = data.game.over
  $('#message').text('Create game succesfully')
}

const newGameFailure = function (error) {
  console.error(error)
  $('#message').text('Error on creating new game!!')
}

const updateScoreSuccess = function (data) {
  $('#message').text('Updated!')
}

const updateScoreFailure = function (error) {
  console.error(error)
  $('#message').text('Error on updating stats!!')
}

const showGameSuccess = function (data) {
  console.log('Found data! wwwwwhat', data)
  $('#playerstatus').text(data.games.length)
}

const showGameFailure = function (error) {
  console.error(error)
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
