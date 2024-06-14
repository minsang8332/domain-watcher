import log, { LogFile } from 'electron-log'
import path from 'path'
import _ from 'lodash'
import dayjs from 'dayjs'
import { getDocsDir } from '@/tools/fs'
log.transports.file.resolvePathFn = (variables) => {
    let fileName: string = 'main.log'
    if (variables.fileName) {
        fileName = variables.fileName
    }
    const today = dayjs().format('YYYY-MM-DD')
    return path.join(getDocsDir(), 'logs', today, fileName)
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
