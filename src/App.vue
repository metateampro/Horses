<template>
  <v-app>
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
import EditTable from './components/EditTable.vue';
import LeftBarMenu from './components/LeftBarMenu.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Home,
    AppBar,
    EditTable,
    LeftBarMenu,
  },
  data: () => ({
    //
  }),
});
</script>
