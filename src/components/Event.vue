<template>
  <v-card>
    <v-card-title>
      {{id}}
      <div class="flex-grow-1"></div>
      <v-text-field
        v-model="search"
        append-icon="mdi-edit"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :search="search"
    ></v-data-table>
  </v-card>
</template>
<script lang="ts">
import Vue from "vue";
  export default Vue.extend( {
    data () {
      return {
      
        id : this.$router.currentRoute.params['text'],
        search: '',
        desserts: [
          {
            name: 'Gingerbread',
            calories: 356,
            fat: 16.0,
            carbs: 49,
            protein: 3.9,
            iron: '16%',
          },
          {
            name: 'Jelly bean',
            calories: 375,
            fat: 0.0,
            carbs: 94,
            protein: 0.0,
            iron: '0%',
          },
        ],
      }
    },
    watch:{
      $route(toR, fromR){
        this.id = toR.params['text']// to do: get query
      }
    }
  }
)
</script>