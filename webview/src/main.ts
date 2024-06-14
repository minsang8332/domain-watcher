import { createApp } from 'vue'
import { createPinia } from 'pinia'
import vuetifyPlugin from '@/plugins/vuetify'
import toastPlugin from '@/plugins/toast'
// Vue
import App from '@/App'
import router from '@/router'
// Build App
import '@/assets/css/app.scss'
import AppLoading from '@/layouts/AppLoading'
const app = createApp(App)
app.component('AppLoading', AppLoading)
app.use(createPinia())
app.use(router)
app.use(vuetifyPlugin)
app.use(toastPlugin)
app.mount('#app')
