import { app, ipcMain } from 'electron'
import handlerTool from '@/models/handler'
ipcMain.handle('domain:index', payload => {
    /*
    let resposne: IpcHandle.IResponse = handlerTool.createResponse()
    try {
    } catch (e) {
        console.error(e)
    }
    return resposne
    */
})
// 도메인 생성
ipcMain.handle('domain:create', payload => {})
// 도메인 업데이트
ipcMain.handle('domain:update', payload => {})
// 도메인 제거
ipcMain.handle('domain:delete', payload => {})
// 헬스체크
ipcMain.handle('domain:health-check', payload => {

})