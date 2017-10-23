const {BrowserWindow} = require('electron')
const url = require('url')
const path = require('path')
const menu = require("~/js/menu/main")

window = new BrowserWindow({
  width: 600,
  height: 250,
  show: false,
  resizable: true,
})

window.loadURL(url.format({
  pathname: path.join(__dirname, '../html/mainwindow.html'),
  protocol: 'file:',
  slashes: true
}))

function createWindow () {
  mainWindow.on('closed', function () {
    mainWindow = null
  })
}

window.once('ready-to-show', () => {
  window.show()
})

module.exports = window
