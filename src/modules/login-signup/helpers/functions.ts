import router from '../../../router/index';


// Navigation between login and signup forms
export const toLogin = () => {
    router.push('/form/login-form')
}

export const toSignup = () => {
    router.push('/form/signup-form')
}

// TODO: Login validator, and redirect to Home
export const toHome = () => {
    router.push('/home')
}
