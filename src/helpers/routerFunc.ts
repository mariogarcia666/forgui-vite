import router from "../router"

export const toCreate = () => {
    router.push('/home/create')
}

export const toFav = () => {
    router.push('/home/favorites')
}

export const toNotifications = () => {
    router.push('/home/notifications')
}

export const toLogin = () => {
    router.push('/form/login-form')
}

export const toSignup = () => {
    router.push('/form/signup-form')
}

export const toHome = () => {
    router.push('/home')
}

export const toEdit = () => {
    router.push('/home/edit')
}

export const toProfile = () => {
    router.push('/home/profile')
}

export const toPostDetail = (postId) => {
    router.push({name: 'Post Detail', params: { id: postId }})
}