import { defineComponent, type PropType } from 'vue'
export default defineComponent({
    name: 'DomainGroup',
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
            <v-row no-gutters>
                <v-col>
                    <b>{props.hostname}</b>
                </v-col>
                <v-col>
                    <b></b>
                </v-col>
            </v-row>
        )
    }
})