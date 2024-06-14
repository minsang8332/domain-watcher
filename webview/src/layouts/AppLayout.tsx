import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
import AppHeader from '@/layouts/AppHeader'
import { useAppStore } from '@/stores/app'
export default defineComponent({
    name: 'AppLayout',
    components: {
        AppHeader,
    },
    setup() {
        return () => (
            <v-app>
                <app-header />
                <v-main>
                    <RouterView />
                </v-main>
            </v-app>
        )
    }
})
