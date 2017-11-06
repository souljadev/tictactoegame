'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const xoEvents = require('./auth/xoEvents')
const events = require('./auth/events')
const gameEvents = require('./auth/gameEvents')

$(() => {
  setAPIOrigin(location, config)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  $('.xoBox').on('click', xoEvents.changePic)
  $('#reset-game').on('click', xoEvents.resetGame)
  $('#reset-game').on('click', xoEvents.changePic)
  // $('.xoBox').on('click', xoEvents.boardValue)
  // $('.xoBox').on('click', xoEvents.gameLogic)
  events.addHandlers()
  gameEvents.addUserHandlers()
})
