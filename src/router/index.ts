import { createRouter, createWebHashHistory } from "vue-router"
import { RouteRecordRaw } from "vue-router"

import formsRouter from '../modules/login-signup/router/index'

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
        name: 'home',
        redirect: '/home/tab1',
        component: () => import('../views/HomeView.vue'),
        children: [
            {
                path: 'tab1',
                name: 'Tab1',
                component: () => import('../modules/posts/layouts/PostsLayout.vue')
            },
            {   
                path: 'tab2',
                name: 'Tab2',
                component: () => import('../modules/maps/layouts/MapsLayout.vue')
            }
        ]
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