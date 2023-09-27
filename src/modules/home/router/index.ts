export default {

    redirect: '/home/posts',
    name: 'Home',
    component: () => import('../../../views/HomeView.vue'),
    children: [
        {
            path: '/home/posts',
            name: 'Posts',
            component: () => import('../../posts/layouts/PostsLayout.vue')
        },
        {
            path: '/home/category',
            name: 'Category',
            component: () => import('../../category/layouts/CategoryLayout.vue')
        },

        {
            path: '/home/map',
            name: 'Map',
            component: () => import('../../maps/layouts/MapsLayout.vue')
        },
        {
            path: '/home/profile',
            name: 'Profile',
            component: () => import('../../profile/layouts/ProfileLayout.vue')
        }
    ]
}