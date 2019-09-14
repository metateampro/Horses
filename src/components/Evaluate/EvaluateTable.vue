<template>
          <v-card>
            <v-card-title>
              <span class="headline">Edit</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row justify="space-around">
                  
				  <v-col cols="2" >
                    <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                  
                  
                    <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                  
                    <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                  
                    <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                  
                    <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                  </v-col>
				  <v-col cols="2" >
                    <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                  
                  
                    <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                  
                    <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                  
                    <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                  
                    <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                  </v-col>
				  <!-- <v-col cols="2" >
                    <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                  
                  
                    <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                  
                    <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                  
                    <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                  
                    <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                  </v-col>
				  <v-col cols="2" >
                    <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                  
                  
                    <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                  
                    <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                  
                    <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                  
                    <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                  </v-col> -->
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({

});
</script>

<style scoped>

</style>