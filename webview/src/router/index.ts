import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
const router = createRouter({
    history:
        import.meta.env.NODE_ENV == 'production'
            ? createWebHashHistory(import.meta.env.BASE_URL)
            : createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@/layouts/AppLayout'),
            redirect: 'main',
            children: [
                {
                    name: 'main',
                    path: '/main',
                    component: () => import('@/views/MainPage')
                },
            ]
        },
        // not-found 핸들링
        {
            path: '/:pathMatch(.*)*',
            redirect: 'main'
        }
    ]
})
export default router
