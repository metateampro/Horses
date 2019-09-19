import { GetterTree } from 'vuex';
import { ProfileState, EventH, Form, Horse, Characteristic, Hclass } from './types';
import { RootState } from '../types';

export const getters: GetterTree<ProfileState, RootState> = {
  getSideBarOpen({ sideBarOpen }): boolean {
    return sideBarOpen;
  },
  getCurrentEvent({ currentEvent }): EventH | undefined {
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
  getHorsesSelect({ horses, currentEvent }) {
      return horses &&
        horses.filter(
          (horse) =>
          currentEvent && currentEvent.eventhclass &&
          currentEvent.eventhclass.find(
            (ec) =>
            ec.hclassid === horse.hclassid,
          ),
        );
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


