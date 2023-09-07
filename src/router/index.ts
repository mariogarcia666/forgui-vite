import { createRouter, createWebHashHistory } from "vue-router"

const routes = [
    {
        path: '/',
        name: 'login',
        component: () => import('../views/LoginView.vue')
    },

    {
        path: '/home',
        name: 'home',
        component: () => import('../views/HomeView.vue')
    },

    // redirect to a PageNotFound page if the route doesn't match
    {
        path: '/:pathMatch(.*)*',
        component: () => import('../views/PageNotFound.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router