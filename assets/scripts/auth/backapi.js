'use strict'
const config = require('../config')
const store = require('../store')

// New Game
const createNewGame = function (data) {
  return $.ajax({
    url: 'http://tic-tac-toe.wdibos.com' + '/games',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// find game
const findGame = function (data) {
  return $.ajax({
    url: 'http://tic-tac-toe.wdibos.com' + '/games',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  findGame,
  createNewGame
}
