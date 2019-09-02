import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideBarOpen: false,
  },
  getters: {
      g_sideBarOpen(state) {
          return state.sideBarOpen;
      },
  },
  mutations: {
      toggleSideBar(state) {
        state.sideBarOpen = !state.sideBarOpen;
      },
  },
});
