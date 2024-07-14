import { app, contextBridge, ipcRenderer } from 'electron'
const invoke = async (channel: string, payload?: any) => {
    const response = await ipcRenderer.invoke(channel, payload).catch((e) => e)
    if (response && response.error) {
        throw response.error
    }
    return response
}
contextBridge.exposeInMainWorld('$native', {
    exit() {
        ipcRenderer.send('exit')
    },
    getVersion() {
        return app.getVersion()
    },
    domain: {
        healthcheck (payload: IpcPayload.Domain.HealthCheck) {
            return invoke('domain:health-check', payload)
        }
    },
    updater: {
        // 업데이트 가능여부가 확인뙬 때 까지 기다림
        wait() {
            return new Promise((resolve) => {
                ipcRenderer.on('updater:available', (event, payload) =>
                    resolve(payload)
                )
            })
        },
        available (payload: any) {
            return invoke('updater:available', payload)
        },
        install() {
            ipcRenderer.send('updater:install')
        },
    },
})
