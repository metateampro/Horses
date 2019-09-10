import { GetterTree } from 'vuex';
import { ProfileState, EventH, Form } from './types';
import { RootState } from '../types';

export const getters: GetterTree<ProfileState, RootState> = {
  g_sideBarOpen({ sideBarOpen }): boolean {
    return sideBarOpen;
  },
  getCurrentEvent({ currentEvent }): EventH | null {
    return currentEvent;
  },
  getEvents({ events }): EventH[] | undefined {
    return events;
  },
  getForms({ forms }): Form[] {
    return forms;
  },
};


