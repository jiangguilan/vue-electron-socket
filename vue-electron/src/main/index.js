import { app, BrowserWindow } from 'electron'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let loginWin,mainWin
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  loginWin = new BrowserWindow({
    height: 300,
    useContentSize: true,
    width: 460,
    minWidth: 720,
    minHeight: 500,
  })

  loginWin.loadURL(winURL)

  loginWin.on('closed', () => {
    loginWin = null
  })
}
function createMainWin () {
  /**
   * Initial window options
   */
  mainWin = new BrowserWindow({
    height: 600,
    useContentSize: true,
    width: 960
  })

  mainWin.loadURL(winURL)

  mainWin.on('closed', () => {
    mainWin = null
  })
  loginWin.close()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (loginWin === null) {
    createWindow()
  }
})

// In main process.
const {ipcMain} = require('electron')
// ipcMain.on('asynchronous-message', (event, arg) => {
//   console.log(arg)  // prints "ping"
//   event.sender.send('asynchronous-reply', 'pong')
// })

// ipcMain.on('synchronous-message', (event, arg) => {
//   console.log(arg)  // prints "ping"
//   event.returnValue = 'pong'
// })
ipcMain.on('toLog', (event, arg) => {
  event.sender.send('asynchronous-reply', 'isLoged')
  // createMainWin()
  loginWin.hide()
  loginWin.setSize(960, 600)
  setTimeout(() => {
    loginWin.show()
  },500)
  // loginWin.show()
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
