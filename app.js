const {app, BrowserWindow} = require('electron')
const settings = require('electron-settings')
const log = require('~/js/log.js')

// https://github.com/webtorrent/webtorrent-desktop/blob/4a3ca5459da995c15af36952c07701479e69c472/main/windows/main.js
app.once('ready', () => {

  settings.set('rabbitmq', {
    url: 'amqp://rabbitmq',
    exchange_name: 'input',
    exchange_type: 'topic'
  });
  const window = require('~/js/mainwindow')

})
