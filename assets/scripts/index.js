'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const xoEvents = require('./auth/xoEvents')
const events = require('./auth/events')
const gameEvents = require('./auth/gameEvents')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  $('.xoBox').on('click', xoEvents.changePic)
  $('#reset-game').on('submit', xoEvents.resetGame)
  // $('#reset-game').on('submit', xoEvents.changePic)
  events.addHandlers()
  gameEvents.addUserHandlers()
})
