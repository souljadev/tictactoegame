'use strict'
const config = require('../config')
const store = require('../store')

// New Game
const createNewGame = function (data) {
  data = JSON.stringify(data)
  return $.ajax({
    url: 'http://tic-tac-toe.wdibos.com' + '/games/' + store.user.id,
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    contentType: 'application/json',
    data
  })
}

// show game stats
const findGame = function (data) {
  console.log(data)
  data = JSON.stringify(data)
  return $.ajax({
    url: 'https://aqueous-atoll-85096.herokuapp.com' + '/games/' + store.user.id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    contentType: 'application/json',
    data
  })
}

const updateScore = function (data) {
  console.log(data)
  data = JSON.stringify(data)
  return $.ajax({
    url: 'http://tic-tac-toe.wdibos.com' + '/games/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    contentType: 'application/json',
    data
  })
}

module.exports = {
  findGame,
  createNewGame,
  updateScore
}
