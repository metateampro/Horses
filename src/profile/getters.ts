// profile/getters.ts
import { GetterTree } from 'vuex';
import { ProfileState, EventH } from './types';
import { RootState } from '../types';

export const getters: GetterTree<ProfileState, RootState> = {

  g_sideBarOpen(state): boolean {
    return state.sideBarOpen;
  },
  //
  getCurrentEvent(state): EventH | null {
    return state.currentEvent;
  },
  getEvents(state): EventH[] | undefined {
    return state.events;
  },
};


