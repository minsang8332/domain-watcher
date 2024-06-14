import { app, BrowserWindow, nativeImage } from 'electron'
import _ from 'lodash'
import '@/handler'
import * as protocolTool from '@/tools/protocol'
import windowTool from '@/tools/window'
if (app.requestSingleInstanceLock() == false) {
    app.quit()
}
app.on('will-finish-launching', () => {
    protocolTool.registerScheme('app')
})
app.on('ready', () => {
    protocolTool.handleProtocol('app')
    const mainWindow = windowTool.creaateWindow({
        scheme: 'app',
        url: process.env.APP_URL,
    })
    windowTool.setMainWindow(mainWindow)
})
app.on('window-all-closed', () => {
    app.quit()
})
app.on('second-instance', () => {
    let mainWindow = windowTool.getMainWindow()
    if (mainWindow) {
        if (mainWindow.isMinimized()) {
            mainWindow.restore()
        }
        mainWindow.focus()
    }
})
