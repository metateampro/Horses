// profile/index.ts
import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ProfileState } from './types';
import { RootState } from '../types';

export const state: ProfileState = {
  sideBarOpen: false,
  events: [
    {EventId: 1, Title: 'ff'},
    {EventId: 2, Title: 'gg'},
  ],
  horses: [],
  characteristics: [],
  hclassess: [],
  currentEvent: null,
};

const namespaced: boolean = true;

export const profile: Module<ProfileState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
