import { createRouter, createWebHistory } from 'vue-router'
const { VITE_TITLE } = import.meta.env

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            component: () => import('@/views/MainView.vue')
        },
        {
            path: '/test',
            name: '테스트',
            component: () => import('@/views/MainView.vue')
        },
    ]
})

router.beforeEach((to, from, next) => {
    if (to.name) document.title = to.name + ' :: ' + VITE_TITLE;
    else document.title = VITE_TITLE

    next();
});

export default router
