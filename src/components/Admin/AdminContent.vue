<template>
	<v-form>
		<v-row>
			<v-col cols="8">
				<v-text-field label="Название мероприятия" v-model="eventTitle"></v-text-field>	
				<v-text-field label="Адрес мероприятия" v-model="eventAdress"></v-text-field>
			</v-col>
			<v-col cols="4">
				<v-date-picker v-model="eventDate" full-width></v-date-picker>
			</v-col>
		</v-row>
	</v-form>
</template>
<script lang="ts">
import Vue from 'vue';
import { State, Action, Getter, Mutation } from "vuex-class";
import Component from "vue-class-component";
import { ProfileState, EventH, Form } from "@/profile/types";
const namespace: string = "profile";

@Component
export default class AdminContent extends Vue {
	@State('profile') profile: ProfileState;

	@Getter('getCurrentEvent', { namespace }) currentEvent: EventH;
	@Getter('getEvents', { namespace }) Events: EventH[];
	@Getter('getForms', { namespace }) Forms: Form[];

	@Mutation('setCurrentEvent', { namespace }) setCurrentEvent: EventH;

	currEvent: EventH;

	eventTitle?: string;
	eventAdress?: string;
	eventDate?: Date;

	data() {
		return {
			currEvent: this.currentEvent || {EventId: 1, Title: 'Чемпик'},
			eventTitle: this.currentEvent && this.currentEvent.Title || '',
			eventAdress: '',
			eventDate: undefined
		}
	};
	computed: {
		/* _event(): EventH {
			return {
				EventId: 1,
				Title: this.eventTitle,
				Adress: this.eventAdress,
				EventDate: this.eventDate,
			};
		} */
	};
};
</script>