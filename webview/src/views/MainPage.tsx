import { defineComponent, onMounted } from 'vue'
import { useDomainStore } from '@/stores/domain'
export default defineComponent({
    name: 'ReceiptPage',
    setup() {
        /* 헬첵 테스트 */
        const domainStore = useDomainStore()
        onMounted(() => {
            setInterval(() => {
                domainStore.healthcheck('naver.com')
            }, 3000)
        })
        return () => (
            <v-container class="receipt-page pa-0" fluid>
                <v-card flat>
                    <v-row class="pa-2" no-gutters>
                        <v-col>
                            <h1 class="text-title">페이지</h1>
                        </v-col>
                    </v-row>
                    <v-divider class="pa-1" />
                    <v-row no-gutters>
                        <v-col></v-col>
                    </v-row>
                </v-card>
            </v-container>
        )
    }
})