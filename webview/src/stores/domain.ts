import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import _ from 'lodash'
export const useDomainStore = defineStore('domain', () => {
    const state = reactive<IDomainState>({
        domains: []
    })
    const healthcheck = (hostname: string) => window.$native.domain.healthcheck({ hostname })
    return {
        state,
        healthcheck
    }
})