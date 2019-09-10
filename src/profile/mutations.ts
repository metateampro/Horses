import { MutationTree } from 'vuex';
import { ProfileState, EventH } from './types';

export const mutations: MutationTree<ProfileState> = {
  toggleSideBar(state) {
    state.sideBarOpen = !state.sideBarOpen;
  },
  setEventsFromAPI: (state) => (events: []) => {
    state.events = events;
  },
  setCurrentEvent(state, event: EventH) {
    state.currentEvent = event;
  },
};
