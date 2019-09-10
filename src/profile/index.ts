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
    {EventId: 1, Title: 'Чемпионат для лошадей Орловской рысистой породы'},
    {EventId: 2, Title: 'Кубок среди лошадей Ахалтекинской чистокровной породы'},
  ],
  horses: [],
  characteristics: [],
  hclassess: [],
  currentEvent: null,
  forms: [
    {FormName: 'EventH', FormTitle: 'Мероприятие'},
    {FormName: 'Characteristic', FormTitle: 'Характеристика'},
    {FormName: 'Hclass', FormTitle: 'Класс'},
    {FormName: 'Horse', FormTitle: 'Лошадь'},
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
