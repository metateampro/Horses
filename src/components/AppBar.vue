<template>  
    <v-app-bar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    app
    color="blue darken-3"
    dark
    >
    <v-toolbar-title
        style="width: 300px"
        class="ml-0"
    >
        
        <span class="hidden-sm-and-down">A lot of horses</span>
    </v-toolbar-title>
    <v-tabs background-color="#1565c0"
    color="blue">
      <v-tab :to="'/'">Main</v-tab>
      <v-tab :to="'/about'">About</v-tab>
    </v-tabs>
    <v-spacer></v-spacer>
    <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down"
    ></v-text-field>
    <v-btn icon>
        <v-icon>mdi-apps</v-icon>
    </v-btn>
    <v-btn icon>
        <v-icon>mdi-bell</v-icon>
    </v-btn>
    <v-btn
        icon
        large
    >
        <v-avatar
        size="32px"
        item
        >
        <v-img
            src="./../assets/horse.jpg"
            alt="Vuetify"
        >
        </v-img></v-avatar>
    </v-btn>
    </v-app-bar>
</template>

<script>
  export default {
    props: {
        source: String,
    },
    methods:{
        toggleSideBar(){
            this.$store.commit('toggleSideBar');
        }
    },
    data: () => ({
      dialog: false,
      drawer: null,
      items: [ 
      ],
    }),
  }
</script>