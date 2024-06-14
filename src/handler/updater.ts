import { app, ipcMain } from 'electron'
import { autoUpdater } from 'electron-updater'
import log from '@/logger'
import windowTool from '@/tools/window'
// 앱 종료시 자동 업데이트
autoUpdater.autoInstallOnAppQuit = false
let update: boolean = false
export const checkForUpdates = () => {
    if (app.isPackaged) {
        autoUpdater.checkForUpdates()
    }
}
ipcMain.handle('updater:available', () => {
    return {
        update,
    }
})
ipcMain.on('updater:available', () => {
    let mainWindow = windowTool.getMainWindow()
    if (mainWindow) {
        mainWindow.webContents.send('updater:available', update)
    }
})
ipcMain.on('updater:install', () => {
    try {
        autoUpdater.quitAndInstall()
    } catch (e) {
        log.error(e)
    }
})
// 업데이트 가능 여부
autoUpdater.on('update-available', (event) => {
    let mainWindow = windowTool.getMainWindow()
    if (mainWindow) {
        mainWindow.webContents.send('updater:available')
        update = true
    }
})
autoUpdater.on(
    'update-downloaded',
    (
        event,
        releaseNotes?: any,
        releaseName?: any,
        releaseDate?: any,
        updateURL?: any
    ) => {
        log.info({
            message: '업데이트 다운로드 완료',
            event,
        })
    }
)
autoUpdater.on('error', (error, message) => {
    if (error.message) {
        message = error.message
    }
    log.error(message)
})
