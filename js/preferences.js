// Run this function after the page has loaded
$(() => {
  const settings = require('electron-settings')
  const log = require('~/js/log.js')

  $('#url').text(settings.get("rabbitmq.url"))

})
