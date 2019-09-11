import { GetterTree } from 'vuex';
import { ProfileState, EventH, Form, Horse, Characteristic, Hclass } from './types';
import { RootState } from '../types';

export const getters: GetterTree<ProfileState, RootState> = {
  getSideBarOpen({ sideBarOpen }): boolean {
    return sideBarOpen;
  },
  getCurrentEvent({ currentEvent }): EventH | null {
    return currentEvent;
  },
  getForms({ forms }): Form[] {
    return forms;
  },
  getEvents({ events }): EventH[] | undefined {
    return events;
  },
  getHorses({ horses }): Horse[] | undefined {
    return horses;
  },
  getHorsesSelect({ horses }) {
    return (hclasses: Hclass[]) => {
      const filteredhorses =
        horses && horses.filter(
          (horse) => hclasses && hclasses.find((hclass) => hclass === horse.hclass));
      return filteredhorses && filteredhorses.map((horse) => ({text: horse.title, value: horse.horseid }));
    };
  },


  getHclasses({ hclassess }): Hclass[] | undefined {
    return hclassess;
  },
  getHclassesSelect({ hclassess }) {
    return hclassess && hclassess.map((hclass) => ({text: hclass.title, value: hclass }));
  },
  getCharacteristics({ characteristics }): Characteristic[] | undefined {
    return characteristics;
  },
  getCharacteristicsSelect({ characteristics }) {
    return characteristics && characteristics.map(
      (characteristic) => ({text: characteristic.title, value: characteristic.characteristicid }));
  },
};


