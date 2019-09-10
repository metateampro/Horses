<template>
	<v-toolbar>
		<v-subheader>
			Панель администратора
		</v-subheader>
		<v-divider class="mx-4" vertical></v-divider>
		<v-menu offset-y>
			<template v-slot:activator="{ on }">
				<v-btn color="primary" dark	v-on="on">{{ currentEvent && currentEvent.Title }}</v-btn>
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
	</v-toolbar>
</template>
<script lang="ts">
import Vue from 'vue';
import { State, Action, Getter, Mutation } from "vuex-class";
import Component from "vue-class-component";
import { ProfileState, EventH } from "@/profile/types";
const namespace: string = "profile";

@Component
export default class AdminBar extends Vue {
	@State('profile') profile: ProfileState;

	@Getter('profile/getCurrentEvent') currentEvent: EventH;
	@Getter('profile/getEvents') Events: EventH[];

	@Mutation('setCurrentEvent', { namespace }) setCurrentEvent: EventH;
}
</script>