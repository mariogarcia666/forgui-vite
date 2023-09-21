export default {

    redirect: '/form/login-form',
    name: 'form',
    component: () => import('../../../views/LoginView.vue'),
    children: [
        {
            path: '/form/login-form',
            name: 'login-form',
            component: () => import('../../login-signup/layouts/LoginForm.vue')
        },
        {
            path: '/form/signup-form',
            name: 'signup-form',
            component: () => import('../../login-signup/layouts/SignupForm.vue')
        }
    ]
}