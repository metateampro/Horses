// profile/index.ts
import { Module } from 'vuex';
import { getters } from './getters';
import { actions } from './actions';
import { mutations } from './mutations';
import { ProfileState } from './types';
import { RootState } from '../types';

export const state: ProfileState = {
  sideBarOpen: false,
  events: [],
  horses: [],
  characteristics: [],
  hclassess: [],
  currentEvent: undefined,
  forms: [
    {formname: 'EventH', formtitle: 'Мероприятие'},
    {formname: 'Characteristic', formtitle: 'Характеристика'},
    {formname: 'Hclass', formtitle: 'Класс'},
    {formname: 'Horse', formtitle: 'Лошадь'},
  ],
};

const namespaced: boolean = true;

export const profile: Module<ProfileState, RootState> = {
  namespaced,
  state,
  getters,
  actions,
  mutations,
};
