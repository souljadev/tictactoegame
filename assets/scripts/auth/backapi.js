'use strict'
const config = require('../config')
const store = require('../store')

// New Game
const createNewGame = function () {
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const updateScore = function (data) {
  data = JSON.stringify(data)
  return $.ajax({
    url: config.apiOrigin + '/games/' + store.game.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    contentType: 'application/json',
    data
  })
}

const showGame = function (data) {
  data = JSON.stringify(data)
  return $.ajax({
    url: config.apiOrigin + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    contentType: 'application/json',
    data
  })
}

module.exports = {
  showGame,
  createNewGame,
  updateScore
}
