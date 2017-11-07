'use strict'
const store = require('../store')
const getFormFields = require(`../../../lib/get-form-fields`)

const backapi = require('./backapi')
const ui = require('./ui')

const createGame = function (event) {
  console.log()
  event.preventDefault()
  backapi.createNewGame()
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const updateScores = function (event) {
  const data = {
    'game': {
      'cell': {
        'index': store.index,
        'value': $(event.target).val()
      },
      'over': store.gameOver
    }
  }
  event.preventDefault()
  backapi.updateScore(data)
    .then(ui.updateScoreSuccess)
    .catch(ui.updateScoreFailure)
}

const showIndex = function (event) {
  const data = {
    'game': {
      'id': '',
      'cells': ['', '', '', '', '', '', '', '', ''],
      'over': store.gameOver,
      'player_x': {
        'id': store.user.id,
        'email': store.user.email
      },
      'player_o': {
        'id': '',
        'email': ''
      }
    }
  }
  event.preventDefault()
  console.log(data)
  backapi.showGame(data)
    .then(ui.showGameSuccess)
    .catch(ui.showGameFailure)
}

const addUserHandlers = function () {
  $('#new-game').on('submit', createGame)
  $('#show-games').on('submit', showIndex)
  $('.xoBox').on('click', updateScores)
}

module.exports = {
  addUserHandlers
}
