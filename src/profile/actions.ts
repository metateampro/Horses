import { ActionTree } from 'vuex';
import axios from 'axios';
import { ProfileState, EventH } from './types';
import { RootState } from '../types';


export const actions: ActionTree<ProfileState, RootState> = {
  fetchData({ commit }): any {
    axios({
      url: 'http://localhost:59291/api/events'
    }).then((response) => {
      const payload: Event = response && response.data;
      //commit('profileLoaded', payload);
    }, (error) => {
      console.log(error);
      // commit('profileError');
    });
  },
  saveEvent({ dispatch }, event: EventH): any {
	  axios({
		  url: 'http://localhost:59291/api/events/' + event.EventId,
		  method: 'POST',
		  data: event
	  }).then((response) => {
		  console.log(response);
	  }).catch((error) => {
		  console.log(error);
	  })
  }
};
