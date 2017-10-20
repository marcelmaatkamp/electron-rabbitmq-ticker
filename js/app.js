const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')
const settings = require('electron-settings')

let window = null

// Wait until the app is ready
app.once('ready', () => {

settings.set('rabbitmq', {
   url: 'amqp://rabbitmq',
   exchange_name: 'input',
   exchange_type: 'topic'

 });

 settings.get('rabbitmq.url')
 settings.has('rabbitmq.url')

  window = new BrowserWindow({
    width: 600,
    height: 250,
    show: false,
    resizable: true,
  })

  window.loadURL(url.format({
    pathname: path.join(__dirname, '../html/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  function createWindow () {
    mainWindow.on('closed', function () {
       mainWindow = null
    })
    require('./menu/mainmenu')
  }

  window.once('ready-to-show', () => {
    window.show()
  })

})
