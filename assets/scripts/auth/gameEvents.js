'use strict'
const store = require('../store')

const getFormFields = require(`../../../lib/get-form-fields`)
const backapi = require('./backapi')
const ui = require('./ui')

const createGame = function (event) {
  console.log(store)
  const data = {
    'game': {
      'id': store.id,
      'cells': ['', '', '', '', '', '', '', '', ''],
      'over': store.gameOver,
      'player_x': {
        'id': store.user.id,
        'email': store.user.email
      },
      'player_o': null
    }
  }
  event.preventDefault()
  backapi.updateScore(data)
    .then(ui.updateScoreSuccess)
    .catch(ui.updateScoreFailure)
}

const showGame = function (event) {
  const data = {
    'game': {
      'id': store.id,
      'cells': ['', '', '', '', '', '', '', '', ''],
      'over': store.gameOver,
      'player_x': {
        'id': store.user.id,
        'email': store.user.email
      },
      'player_o': {
        'id': store.id,
        'email': store.user.email
      }
    }
  }
  event.preventDefault()
  backapi.findGame(data)
    .then(ui.showGameSuccess)
    .catch(ui.showGameFailure)
}

const updateScores = function (event) {
  console.log(store)
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

const addUserHandlers = function () {
  $('#new-game').on('submit', createGame)
  $('#show-games').on('submit', showGame)
  $('.xoBox').on('click', updateScores)
}

module.exports = {
  addUserHandlers
}
