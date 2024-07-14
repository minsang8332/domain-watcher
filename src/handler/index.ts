import { ipcMain, app } from 'electron'
import '@/tools/protocol'
import '@/handler/updater'
import '@/handler/domain'
ipcMain.on('exit', () => app.quit())
