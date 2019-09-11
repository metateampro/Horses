<template>
  <v-data-table
    :headers="headers"
    :items="Events"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat color="white">
        <v-toolbar-title>Мероприятия</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on }">
            <v-btn color="" class="mb-2" v-on="on"><v-icon>mdi-plus</v-icon></v-btn>
                    <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
            <v-btn color="" class="mb-2" ><v-icon>mdi-download</v-icon></v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="headline">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>                 
				  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="Events.Title" label="Наименование"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="Events.Adress" label="Адресс"></v-text-field>
                  </v-col>

                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="Events.Judges" label="судьи"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="save">Save</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.action="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >mdi-brush
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >mdi-delete
      </v-icon>
    </template>
  </v-data-table>
</template>
<script lang="ts">
import Vue from 'vue';
import Router from 'vue-router';
import { State, Action, Getter, Mutation } from "vuex-class";
import Component from "vue-class-component";
import { ProfileState, EventH, Form } from "@/profile/types";
const namespace: string = "profile";

@Component
export default class EditTable extends Vue {
	@State('profile') profile: ProfileState;

	@Getter('getEvents', { namespace }) Events: EventH[];
	//id = $router.currentRoute.params['title'];
	editedIndex = -1;
    formTitle = this.editedIndex === -1 ? 'New Item' : 'Edit Item'

	headers = [
				{
				text: 'Название',
				align: 'left',
				sortable: false,
				value: 'title',
				},
				{ text: 'Судьи', value: 'judges' },
				{ text: 'Адрес', value: 'adress' },
			];
	eventTitle?: string;
	eventAdress?: string;
	eventDate?: Date;
	dialog= false;
	editedItem= {
		name: '',
		calories: 0,
		fat: 0,
		carbs: 0,
		protein: 0,
	};
	defaultItem = {
		name: '',
		calories: 0,
		fat: 0,
		carbs: 0,
		protein: 0,
	}; 
	// editItem (item) {
    //     this.editedIndex = this.desserts.indexOf(item)
    //     this.editedItem = Object.assign({}, item)
    //     this.dialog = true
    // };

    // deleteItem (item) {
    //     const index = this.desserts.indexOf(item)
    //     confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
    // };

    close () {
        this.dialog = false
        setTimeout(() => {
        	this.editedItem = Object.assign({}, this.defaultItem)
        	this.editedIndex = -1
        }, 300)
    };

    save (e) {
		debugger;
        if (this.editedIndex > -1) {
        	Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
        	this.desserts.push(this.editedItem)
        }
        this.close()
    };
};
</script>