import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    token: null,
  },
  mutations: {
    ADD_TOKEN: (state, token) => {
      state.tokens = token;
      cosole.log(state.tokens);
    },
  },
  getters: {},
  actions: {},
});
