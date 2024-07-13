import { app } from 'electron'
import log from 'electron-log'
import path from 'path'
import _ from 'lodash'
import dayjs from 'dayjs'
log.transports.file.resolvePathFn = (variables) => {
    let fileName: string = 'main.log'
    if (variables.fileName) {
        fileName = variables.fileName
    }
    const today = dayjs().format('YYYY-MM-DD')
    const appDir = path.resolve(app.getPath('documents'), app.getName())
    return path.join(appDir, 'logs', today, fileName)
}
log.error = (error) => {
    let payload = error
    if (error instanceof Error) {
        payload = {
            name: error.name,
            message: error.message
                ? error.message.toString()
                : error.toString(),
        }
    }
    log.error(payload)
}
export default log
