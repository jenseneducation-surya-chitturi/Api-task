import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    peoples: [],
  },
  mutations: {
  DISPLAY(state, results) {
      this.state.peoples = results
    },
  },
  actions: {
    async getPeople(contex) {

      const response = await fetch('https://swapi.dev/api/people/', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      console.log(data)
      contex.commit('DISPLAY', data.results);
    },
  },
  modules: {
  }
})
