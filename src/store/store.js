import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedCities: []
  },
  mutations: {
    setLoadedCities (state, payload) {
      state.loadedCities = payload
    }
  },
  actions: {
    loadCities ({commit}) {
      axios.get('https://cors-anywhere.herokuapp.com/http://static.pulzo.com/pulzo-dev/cinema/grid/10986.json')
        .then(response => {
          // JSON responses are automatically parsed.
          commit('setLoadedCities', response.data)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  getters: {
    loadedCities (state) {
      return state.loadedCities
    }
  }
})
