<template>
	<v-toolbar>
		<v-subheader>
			Панель администратора
		</v-subheader>
		<v-divider class="mx-4" vertical></v-divider>
		<v-menu offset-y>
			<template v-slot:activator="{ on }">
				<v-btn color="primary" dark	v-on="on">{{ currentEvent && currentEvent.Title || 'Выберите мероприятие'}}</v-btn>
			</template>
			<v-list>
				<v-list-item
					v-for="(event, index) in Events"
					:key="index"
					@click="setCurrentEvent(event)">

					<v-list-item-title>{{ event.Title }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
		<v-spacer/>
		<v-menu offset-y>
			<template v-slot:activator="{ on }">
				<v-btn color="primary" dark	v-on="on">Добавить объект</v-btn>
			</template>
			<v-list>
				<v-list-item
					v-for="(form, index) in Forms"
					:key="index"
					@click="setCurrentEvent(event)">

					<v-list-item-title>{{ form.FormTitle }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
	</v-toolbar>
</template>
<script lang="ts">
import Vue from 'vue';
import { State, Action, Getter, Mutation } from "vuex-class";
import Component from "vue-class-component";
import { ProfileState, EventH, Form } from "@/profile/types";
const namespace: string = "profile";

@Component
export default class AdminBar extends Vue {
	@State('profile') profile: ProfileState;

	@Getter('getCurrentEvent', { namespace }) currentEvent: EventH;
	@Getter('getEvents', { namespace }) Events: EventH[];
	@Getter('getForms', { namespace }) Forms: Form[];

	@Mutation('setCurrentEvent', { namespace }) setCurrentEvent: EventH;
}
</script>