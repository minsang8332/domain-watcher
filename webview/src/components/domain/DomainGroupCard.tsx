import { computed, defineComponent, type PropType } from 'vue'
export default defineComponent({
    name: 'DomainGroupCard',
    props: {
        hostname: {
            type: String as PropType<string>,
            default: ''
        },
        ids: {
            type: String as PropType<string>,
            default: []
        },
        extend: {
            type: Boolean as PropType<boolean>,
            default: false
        }
    },
    setup (props) {
        return () => (
            <v-card flat>
                <v-row class="px-2" no-gutters>
                    <v-col>
                        <b class="text-title">{ props.hostname }</b>
                    </v-col>
                </v-row>
                {
                    /* 
                    @TODO 그룹에 속한 도메인 목록
                    props.extend && <>
                        <v-divider class="pa-1" />
                        <v-row no-gutters>
                            <v-col></v-col>
                        </v-row>
                    </>
                    */
                }
            </v-card>
        )
    }
})