import { GetterTree } from 'vuex';
import { ProfileState, EventH, Form, Horse } from './types';
import { RootState } from '../types';

export const getters: GetterTree<ProfileState, RootState> = {
  getSideBarOpen({ sideBarOpen }): boolean {
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
  getHorses({ horses }): Horse[] | undefined {
    return horses;
  },
};


