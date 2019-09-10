import { ActionTree } from 'vuex';
import axios from 'axios';
import { ProfileState, EventH, Horse, Characteristic, Hclass} from './types';
import { RootState } from '../types';

const url: string = 'http://localhost:5000';

export const actions: ActionTree<ProfileState, RootState> = {

  saveEvent(state, event: EventH): any {
    axios({
      url: url + '/api/events/' + event.eventid,
      method: 'PUT',
      data: event,
    });
  },


  loadEvents({ commit }): any {
    axios({
      url: url + '/api/events',
      method: 'GET',
    }).then((response) => {
      const events: EventH[] = response && response.data;
      commit('setEvents', events);
    });
  },

  loadHorses({ commit }): any {
    axios({
      url: url + '/api/horses',
      method: 'GET',
    }).then((response) => {
      const horses: Horse[] = response && response.data;
      commit('setHorses', horses);
    });
  },

  loadHclasses({ commit }): any {
    axios({
      url: url + '/api/hclasses',
      method: 'GET',
    }).then((response) => {
      const hclasses: Hclass[] = response && response.data;
      commit('setHclasses', hclasses);
    });
  },

  loadCharacteristics({ commit }): any {
    axios({
      url: url + '/api/characteristics',
      method: 'GET',
    }).then((response) => {
      const characteristics: Characteristic[] = response && response.data;
      commit('setCharacteristics', characteristics);
    });
  },
};
