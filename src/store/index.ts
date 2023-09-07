import { createStore } from 'vuex'

const store = createStore({
    state() {
        return {
            name: 'Mario',
            lastname: 'García'
        }
    }
})

export default store