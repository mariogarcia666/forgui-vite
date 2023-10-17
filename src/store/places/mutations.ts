import { MutationTree } from 'vuex'
import { PlacesState } from './state'

const mutations: MutationTree<PlacesState> = {
    setLngLat( state: PlacesState, coords ) {
        console.log({coords})
        state.userLocation = coords
        state.isLoading = false
    }
}

export default mutations