const path = require('path');
const url = require('url');


const {app, BrowserWindow} = require('electron');

function createWindow () {
  const win = new BrowserWindow({
    width: 408,
    height: 528,
    resizable: false, // The window is not resizable
    webPreferences: {
      nodeIntegration: true,
    }
  })

  const startUrl = url.format({
    pathname: path.join(__dirname, './build/index.html'),
    protocol: 'file:',
    slashes: true
  });
  win.loadURL(startUrl);
}

app.whenReady().then(createWindow)