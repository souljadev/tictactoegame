'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)

const backapi = require('./backapi')
const ui = require('./ui')

const createGame = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  backapi.createNewGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const findGame = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  backapi.createNewGame(data)
    .then(ui.newGameSuccess)
    .catch(ui.newGameFailure)
}

const addUserHandlers = function () {
  $('#create-game').on('submit', createGame)
  $('#find-game').on('submit', findGame)
}

module.exports = {
  addUserHandlers
}
