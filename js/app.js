const {app, BrowserWindow} = require('electron') // http://electron.atom.io/docs/api
const path = require('path')         // https://nodejs.org/api/path.html
const url = require('url')           // https://nodejs.org/api/url.html

let window = null

// Wait until the app is ready
app.once('ready', () => {
  // Create a new window
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
