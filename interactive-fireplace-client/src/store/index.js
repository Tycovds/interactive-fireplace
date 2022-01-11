import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    hostId: ""
  },
  mutations: {
    setHostId(state, payload) {
      state.hostId = payload;
    }
  }

})
