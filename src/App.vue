<template>
  <v-app>
    <AppBar />>
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue';
import Home from './components/Home.vue';
import AppBar from './components/AppBar.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Home,
    HelloWorld,
    AppBar,
  },
  data: () => ({
    //
  }),
});
</script>
