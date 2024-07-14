import _ from 'lodash'
import { app, ipcMain } from 'electron'
import fetch from 'node-fetch'
import { createError, createResponse } from '@/models/handler'
import domainModel from '@/models/domain'
// 도메인 목록
ipcMain.handle('domain:index', (event) => {
    let resposne: IpcHandle.IResponse = createResponse()
    try {
        let domains: IDomain[] = domainModel.findAll()
        resposne.data = {
            domains
        }
    } catch (e) {
        resposne.error = createError(e)
    }
    return resposne
})
// 도메인 생성
ipcMain.handle('domain:create', (event, payload) => {})
// 도메인 업데이트
ipcMain.handle('domain:update', (event, payload) => {})
// 도메인 제거
ipcMain.handle('domain:delete', (event, payload) => {})
// 헬스체크
ipcMain.handle('domain:health-check', async (event, payload: IpcPayload.Domain.HealthCheck) => {
    let response: IpcHandle.IResponse = createResponse()
    try {
        const { hostname } = payload
        const domainOne = domainModel.findOne(hostname)
        if (_.isNil(domainOne)) {
            throw new Error('unregisted-domain.')
        }
        let url = domainModel.toURL(domainOne)
        let fetchResponse = await fetch(url)
        if (fetchResponse.ok == false) {
            throw new Error(`network-error (${fetchResponse.statusText}::${fetchResponse.status})`)
        }
        response.data = {
            hostname,
            url,
            status: fetchResponse.status,
            statusText: fetchResponse.statusText
        }
    } catch (e) {
        response.error = createError(e)
    }
    return response
})