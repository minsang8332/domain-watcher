import { defineComponent, onBeforeMount } from 'vue'
import { RouterView } from 'vue-router'
export default defineComponent({
    name: 'App',
    setup() {
        return () => <RouterView />
    }
})
