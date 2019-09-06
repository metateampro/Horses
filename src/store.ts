import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideBarOpen: false,
	events: [],
	horses: [],
	characteristics: [],
	hclassess: [],
  },
  getters: {
      g_sideBarOpen(state) {
          return state.sideBarOpen;
      },
	  getHorseCharacteristics: state => (eventid:number) => {
		  return state.characteristics;
	  }
  },
  mutations: {
      toggleSideBar(state) {
        state.sideBarOpen = !state.sideBarOpen;
      },
	  setEventsFromAPI: state => (_events:Event[]) => {
		  state.events = _events
	  }
  },
  actions: {
	  getAPIData: () => {
		  axios.
		  	get('https://localhost:5001/api/events')
			.then(response => {
				debugger;
			})
	  }
  }
});
