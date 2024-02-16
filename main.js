const {app, BrowserWindow} = require('electron');

function createWindow () {
  const win = new BrowserWindow( { // The BrowserWindow object is used to create a new window
    width: 408,
    height: 528,
    resizable: false, // The window is not resizable
    webPreferences: {
      nodeIntegration: true // This is required to use Electron with React
    }
  })

  win.loadURL('http://localhost:3000'); // Load the React app in the window
  // win.webContents.openDevTools(); // Open the DevTools
}

app.whenReady().then(createWindow); // When the app is ready, create the window
// .then() is used to chain a promise and execute the next function when the promise is resolved
// So when the promise of whenReady() is resolved, the createWindow() function is executed
// Or else, the catch() method is used to handle the rejected promise