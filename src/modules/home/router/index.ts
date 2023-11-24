export default {

    redirect: '/home/posts',
    name: 'Home',
    component: () => import('../../../views/HomeView.vue'),
    children: [
        {
            path: '/home/posts',
            name: 'Posts',
            component: () => import('../../posts/layouts/PostsLayout.vue'),
        },
        {
            path: '/home/posts/detail/:id',
            name: 'Post Detail',
            component: () => import('../../posts/layouts/PostDetailLayout.vue')
        },
        {
            path: '/home/create',
            name: 'Create Post',
            component: () => import('../../posts/layouts/NewPostLayout.vue')
        },
        {
            path: '/home/favorites',
            name: 'Favorites',
            component: () => import('../../posts/layouts/FavPostsLayout.vue')
        },
        {
            path: '/home/notifications',
            name: 'Notifications',
            component: () => import('../../profile/layouts/NotificationsLayout.vue')
        },
        {
            path: '/home/category',
            name: 'Category',
            component: () => import('../../category/layouts/CategoryLayout.vue')
        },
        {
            path: '/home/profile',
            name: 'Profile',
            component: () => import('../../profile/layouts/ProfileLayout.vue'),
        },
        {
            path: '/home/edit',
            name: 'Edit Profile',
            component: () => import('../../profile/layouts/EditProfileLayout.vue')
        }
    ]
}