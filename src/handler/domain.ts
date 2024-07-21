import _ from 'lodash'
import { app, ipcMain } from 'electron'
import fetch from 'node-fetch'
import { createError, createResponse } from '@/models/handler'
import domainModel from '@/models/domain'
/** s: @TEST */
domainModel.clear()
domainModel.insertOne({
    hostname: 'minsang8333.shop',
    port: 443,
})
domainModel.insertOne({
    hostname: 'minsang8333.shop',
    port: 80,
})
/** e: @TEST */
// 도메인 호출
ipcMain.handle('domain:load', (event) => {
    let resposne: IpcHandle.IResponse = createResponse()
    try {
        const domains: IDomain[] = domainModel.findAll()
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
        const { id, ip, port } = payload
        const domain = domainModel.findById(id)
        if (!domain) {
            throw new Error('unregisted-domain.')
        }
        const url = domainModel.toURL(ip, port)
        const fetchResponse = await fetch(url)
        if (fetchResponse.ok == false) {
            throw new Error(`network-error (${fetchResponse.statusText}::${fetchResponse.status})`)
        }
        response.data = {
            domain,
            url,
            status: fetchResponse.status,
            statusText: fetchResponse.statusText
        }
    } catch (e) {
        response.error = createError(e)
    }
    return response
})