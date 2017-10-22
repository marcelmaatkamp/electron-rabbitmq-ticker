const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const settings = require('electron-settings')

var window = null

// https://github.com/webtorrent/webtorrent-desktop/blob/4a3ca5459da995c15af36952c07701479e69c472/main/windows/main.js
app.once('ready', () => {

  settings.set('rabbitmq', {
    url: 'amqp://rabbitmq',
    exchange_name: 'input',
    exchange_type: 'topic'
  });

  window = new BrowserWindow({
    width: 600,
    height: 250,
    show: false,
    resizable: true,
  })

  window.loadURL(url.format({
    pathname: path.join(__dirname, 'html/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  function createWindow () {
    mainWindow.on('closed', function () {
      mainWindow = null
    })
  }

  window.once('ready-to-show', () => {
    require("./js/menu/main")
    window.show()
  })

});

})
