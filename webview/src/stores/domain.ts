import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { useAppStore } from '@/stores/app'
import _ from 'lodash'
export const useDomainStore = defineStore('domain', () => {
    const appStore = useAppStore()
    const state = reactive<IDomainState>({
        domains: []
    })
    const getDomains = computed(() => state.domains)
    const load = async () => {
        appStore.setLoading(true)
        try {
            const response = await window.$native.domain.load()
            if (!(response && response.data)) {
                return
            }
            let { domains } = response.data
            if (_.isEmpty(domains)) {
                domains = [] 
            }
            state.domains = domains
        } catch (e) {
            console.error(e)
        }
        appStore.setLoading(false)
    }
    const healthcheck = (hostname: string) => window.$native.domain.healthcheck({ hostname })
    return {
        state,
        load,
        getDomains,
        healthcheck
    }
})