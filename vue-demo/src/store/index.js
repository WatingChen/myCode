import Vue from 'vue'
import Vuex from 'vuex'
// import Cookies from 'js-cookie'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        sideBar: {
            isOpen: false
        }
    },
    mutations: {
        TOGGLE_SIDEBAR(state) {
            state.sideBar.isOpen = !state.sideBar.isOpen
        }
    }
})

export default store