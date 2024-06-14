import { useAppStore } from '@/stores/app'
import { useDiaryStore } from '@/stores/diary'
import '@/layouts/AppHeader.scoped.scss'
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'AppHeader',
    setup() {
        const appStore = useAppStore()
        const diaryStore = useDiaryStore()
        const onPowerOff = () => {
            appStore.toggleModal(true, {
                message: '어플리케이션을 종료 하시겠습니까 ?',
                ok() {
                    appStore.powerOff()
                }
            })
        }
        return () => (
            <v-app-bar class="app-header native-drag" height="40" flat>
                <v-row no-gutters>
                    <v-col>
                        <v-btn
                            class="skip-native-drag"
                            size="large"
                            onClick={appStore.toggleDrawer}
                        >
                            <v-icon class="ico-menu">fa-solid fa-bars</v-icon>
                        </v-btn>
                        <v-btn class="skip-native-drag" size="large" onClick={diaryStore.dirDiary}>
                            <v-icon class="ico-folder">fa-solid fa-folder</v-icon>
                        </v-btn>
                    </v-col>
                    <v-col align="right">
                        <v-btn class=" skip-native-drag" size="large" onClick={onPowerOff}>
                            <v-icon class="ico-power-off">fa-solid fa-power-off</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-app-bar>
        )
    }
})
