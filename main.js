const {app, BrowserWindow} = require('electron')

function createWindow() {
    const win = new BrowserWindow({
        width: 800, 
        height: 600,
        autoHideMenuBar: true,
    })
    win.loadFile('./src/index.html')
}
app.on('ready', () => {
    console.log("应用OK了!!")
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
