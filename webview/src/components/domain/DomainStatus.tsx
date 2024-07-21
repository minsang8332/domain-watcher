import { computed, defineComponent, type PropType } from 'vue'
export default defineComponent({
    name: 'DomainStatus',
    props: {
        status: {
            type: String as PropType<'info' | 'warning' | 'critical'>,
            default: 'info'
        }
    },
    setup (props) {
        return () => (
            <>
                TODO 도메인 상태 박스 && 경고음 발생
            </>
        )
    }
})