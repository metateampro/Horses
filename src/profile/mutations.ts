import { MutationTree } from 'vuex';
import { ProfileState, EventH, Horse, Hclass, Characteristic } from './types';

export const mutations: MutationTree<ProfileState> = {
  toggleSideBar({ sideBarOpen }) {
    sideBarOpen = !sideBarOpen;
  },
  setCurrentEvent(state, event: EventH) {
    state.currentEvent = event;
  },
  setEvents(state, eventsArr: EventH[]) {
    state.events = eventsArr;
  },
  setHorses(state, horsesArr: Horse[]) {
    state.horses = horsesArr;
  },
  setHclasses(state, hlcassesArr: Hclass[]) {
    state.hclassess = hlcassesArr;
  },
  setCharacteristics(state, characteristicsArr: Characteristic[]) {
    state.characteristics = characteristicsArr;
  },
};
