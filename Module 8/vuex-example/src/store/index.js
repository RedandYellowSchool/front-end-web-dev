import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      count: 0
    }
  },
  getters: {
    // This getter computes a derived state: double the count
    doubleCount: state => state.count * 2
  },
  mutations: {
    // Mutations are the only way to modify state directly
    INCREMENT(state) {
      state.count++
    },
    DECREMENT(state) {
      state.count--
    }
  },
  actions: {
    // Actions can be asynchronous; here we simply commit mutations
    increment({ commit }) {
      commit('INCREMENT')
    },
    decrement({ commit }) {
      commit('DECREMENT')
    },
    // Example of an asynchronous action that increments after a delay
    asyncIncrement({ commit }) {
      setTimeout(() => {
        commit('INCREMENT')
      }, 1000)
    }
  }
})

export default store
