import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    layout: 'default-layout'
  },
  mutations: {
    setLayout(state, payload) {
      state.layout = payload;
    }
  },
  actions: {},
  getters: {
    layout(state) {
      return state.layout;
    }
  }
});
