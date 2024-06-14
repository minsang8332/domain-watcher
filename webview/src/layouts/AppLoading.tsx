import { defineComponent } from 'vue'
import type { PropType } from 'vue'
import VueElementLoading from 'vue-element-loading'
export default defineComponent({
    name: 'AppLoading',
    props: {
        active: {
            type: Boolean as PropType<boolean>,
            default: false
        },
        full: {
            type: Boolean as PropType<boolean>,
            default: false
        }
    },
    components: {
        VueElementLoading
    },
    setup(props) {
        return () => <vue-element-loading active={props.active} is-full-screen={props.full} />
    }
})
