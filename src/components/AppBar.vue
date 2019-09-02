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
        <v-app-bar-nav-icon @click="toggleSideBar"></v-app-bar-nav-icon>
        <span class="hidden-sm-and-down">h' s</span>
    </v-toolbar-title>
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
    </v-avatar>
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