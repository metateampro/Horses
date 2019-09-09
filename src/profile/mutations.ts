import { MutationTree } from 'vuex';
import { ProfileState, User } from './types';

export const mutations: MutationTree<ProfileState> = {
  toggleSideBar(state) {
    state.sideBarOpen = !state.sideBarOpen;
  },
  setEventsFromAPI: (state) => (events: []) => {
    state.events = events;
  },
  setCurrentEvent(state, eventIndex) {
    // state.currentEvent = state.events.find((event) => event.eventid === eventIndex) || null;
  },
};
