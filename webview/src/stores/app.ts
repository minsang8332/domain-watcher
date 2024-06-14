import { reactive, computed } from 'vue'
import { defineStore } from 'pinia'
import _ from 'lodash'
const scss = (property: string): string => {
    const style = getComputedStyle(document.body)
    return style.getPropertyValue(property)
}
// 어플리케이션 전반적인 동작 관련 전역 스토어
export const useAppStore = defineStore('app', () => {
    // 앱 종료
    const powerOff = () => {
        window.$native.exit()
    }
    // 업데이트 대기
    const waitUpdate = () => {
        return window.$native.updater.wait()
    }
    // 업데이트 가능 여부
    const availableUpdate = () => {
        return window.$native.updater.available()
    }
    // 업데이트 설치
    const installUpdate = () => {
        window.$native.updater.install()
    }
    return {
        scss,
        powerOff,
        waitUpdate,
        availableUpdate,
        installUpdate
    }
})
