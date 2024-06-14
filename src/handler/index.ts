import { ipcMain, app } from 'electron'
import '@/tools/protocol'
import '@/handler/updater'
ipcMain.on('exit', () => app.quit())
