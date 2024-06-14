import { type App } from 'vue'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, fa } from 'vuetify/iconsets/fa'
import { mdi } from 'vuetify/iconsets/mdi'
import 'vuetify/styles'
import '@fortawesome/fontawesome-free/css/all.css'
import '@mdi/font/css/materialdesignicons.css'
export default {
    install(app: App) {
        const vuetify = createVuetify({
            icons: {
                defaultSet: 'fa',
                aliases,
                sets: {
                    fa,
                    mdi
                }
            },
            components,
            directives
        })
        app.use(vuetify)
    }
}
