import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sideBarOpen: false,
  events: [
    {eventid: 1, title: 'ff'},
    {eventid: 2, title: 'gg'},
  ] || null,
  horses: [],
  characteristics: [],
  hclassess: [],
  currentEvent: null,
  },
  getters: {
      g_sideBarOpen(state) {
          return state.sideBarOpen;
      },
    getHorseCharacteristics: (state) => (eventid: number) => {
      return state.characteristics;
  },
  getCurrentEvent: (state) => {
    return state.currentEvent;
  },
  getEvents: (state) => {
    return state.events;
  },
  },
  mutations: {
      toggleSideBar(state) {
        state.sideBarOpen = !state.sideBarOpen;
      },
    setEventsFromAPI: (state) => (events: []) => {
      state.events = events;
    },
    setCurrentEvent(state, eventIndex) {
      state.currentEvent = state.events.find((event) => event.eventid === eventIndex) || null;
    },
  },
actions: {
    getAPIData: () => {
      axios.
        get('https://localhost:5001/api/events')
      .then((response) => {
        debugger;
      });
    },
  },
});
