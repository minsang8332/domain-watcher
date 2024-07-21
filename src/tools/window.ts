import { app, BrowserWindow, nativeImage } from 'electron'
import path from 'path'
import { checkForUpdates } from '@/handler/updater'
let mainWindow: BrowserWindow
const creaateWindow = ({
    scheme = 'file',
    url = '',
    width = 320,
    height = 480,
}: {
    scheme: string
    url?: string
    width?: number
    height?: number
}) => {
    const icon = path.join(__dirname, 'assets', 'favicon.png')
    if (app.dock && process.platform == 'darwin') {
        app.dock.setIcon(nativeImage.createFromPath(icon))
    }
    const window: BrowserWindow = new BrowserWindow({
        width,
        minWidth: width,
        height,
        minHeight: height,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            contextIsolation: true,
        },
        title: `${app.getName()} v${app.getVersion()}`,
        frame: false,
        transparent: true,
        icon,
        show: false,
    })
    window.setMenu(null)
    window.loadURL(app.isPackaged ? `${scheme}://./index.html` : url)
    const onceLoad = () => {
        window.show()
        if (app.isPackaged == false) {
            window.webContents.openDevTools()
        }
        checkForUpdates()
    }
    window.webContents.once('dom-ready', onceLoad)
    window.webContents.once('did-navigate', onceLoad)
    window.on('page-title-updated', (e) => {
        e.preventDefault()
    })
    window.webContents.on('will-navigate', (e) => e.preventDefault())
    return window
}
const setMainWindow = (window: BrowserWindow) => {
    mainWindow = window
}
const getMainWindow = () => {
    return mainWindow
}
export default {
    creaateWindow,
    setMainWindow,
    getMainWindow,
}
