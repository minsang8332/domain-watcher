import path from 'path'
import url from 'url'
import _ from 'lodash'
import { protocol, net } from 'electron'
export const registerScheme = (scheme: string) => {
    protocol.registerSchemesAsPrivileged([
        {
            scheme: scheme,
            privileges: {
                secure: true,
                standard: true,
                supportFetchAPI: true,
            },
        },
    ])
}
export const handleProtocol = (scheme: string) => {
    protocol.handle(scheme, async (req) => {
        let filePath = req.url.slice(`${scheme}://`.length)
        if (filePath) {
            filePath = path.join(__dirname, 'dist', filePath)
            filePath = _.toString(url.pathToFileURL(filePath))
        }
        return net.fetch(filePath)
    })
}
export default {
    registerScheme,
    handleProtocol,
}
