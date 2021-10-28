import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      route: null
    }
  },
  mutations: {
    SET_ROUTE (state, route) {
      state.route = route
    }
  }
})

export default store
