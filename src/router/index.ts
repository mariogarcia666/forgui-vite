import { createRouter, createWebHashHistory } from "vue-router"
import { RouteRecordRaw } from "vue-router"

import formsRouter from '../modules/login-signup/router/index'
import homeRouter from '../modules/home/router/index'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        redirect: '/form/login-form'
    },

    {
        path: '/form',
        ...formsRouter
    },

    {
        path: '/home',
        ...homeRouter
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