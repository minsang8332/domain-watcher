import { computed, defineComponent, onBeforeMount } from 'vue'
import { useDomainStore } from '@/stores/domain'
import DomainStatus from '@/components/domain/DomainStatus'
import DomainGroupCard from '@/components/domain/DomainGroupCard'
export default defineComponent({
    name: 'MainPage',
    components: {
        DomainStatus,
        DomainGroupCard
    },
    setup() {
        const domainStore = useDomainStore()
        onBeforeMount(() => domainStore.load())
        return () => (
            <v-container class="main-page pa-0" fluid>
                <v-card class="flex" flat>
                    <v-row class="pa-2" no-gutters>
                        <v-col>
                            <domain-status />
                        </v-col>
                    </v-row>
                    <v-divider class="pa-1" />
                    {   
                        domainStore.getDomains.map((d: IDomain, idx) => {
                            return <>
                                <v-row class="row-domain-group" no-gutters>
                                    <v-col>
                                        <domain-group-card />
                                    </v-col>
                                </v-row>
                                {
                                    idx < domainStore.getDomains.length - 1 && 
                                    <v-divider class="pa-1" />
                                }
                            </>
                        })
                    }
                </v-card>
            </v-container>
        )
    }
})