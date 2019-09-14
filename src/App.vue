<template>
  <v-app>
    ...Загрузка
    <LeftBarMenu />
    <AppBar />
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import Home from './components/Home.vue';
import AppBar from './components/AppBar.vue';
import LeftBarMenu from './components/LeftBarMenu.vue';

import { State, Action, Getter, Mutation } from 'vuex-class';
import Component from 'vue-class-component';
const namespace: string = 'profile';

@Component({
  components: {
    Home,
    AppBar,
    LeftBarMenu,
  },
})
export default class App extends Vue {

  @Action('loadEvents', { namespace }) public loadEvents: any;
  @Action('loadHorses', { namespace }) public loadHorses: any;
  @Action('loadCharacteristics', { namespace }) public loadCharacteristics: any;
  @Action('loadHclasses', { namespace }) public loadHclasses: any;


  public created() {
    this.loadEvents();
    this.loadHorses();
    this.loadCharacteristics();
    this.loadHclasses();
  }
}
</script>
