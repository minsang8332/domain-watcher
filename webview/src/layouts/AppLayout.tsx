import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'
export default defineComponent({
    name: 'AppLayout',
    setup() {
        return () => (
            <v-app>
                <v-main>
                    <RouterView />
                </v-main>
            </v-app>
        )
    }
})
