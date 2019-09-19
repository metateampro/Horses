import { MutationTree } from 'vuex';
import { ProfileState, EventH, Horse, Hclass, Characteristic } from './types';
import moment from 'moment';

export const mutations: MutationTree<ProfileState> = {
  toggleSideBar({ sideBarOpen }) {
    sideBarOpen = !sideBarOpen;
  },
  setCurrentEvent(state, event: EventH) {
    state.currentEvent = event;
  },
  setEvents(state, eventsArr: EventH[]) {
    eventsArr.forEach((event) => {
      event.eventdate =
        event.eventdate && moment(event.eventdate).format('YYYY-MM-DD') ||
        moment(new Date()).format('YYYY-MM-DD');
    });
    state.events = eventsArr;
  },
  addEvent(state, event: EventH) {
    state.events && state.events.push(event);
  },
  saveEvent(state, event: EventH) {
    // state.events?state.events[event.eventid] = event:'';
  },
  deleteEvent(state, event: EventH) {
	var deletedIndex;
	state.events &&	state.events.forEach((item, index)=>{debugger; if (item.eventid==event.eventid){deletedIndex = index}})
    state.events && state.events.splice(deletedIndex, 1);
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
