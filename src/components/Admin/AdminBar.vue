<template>
	<v-toolbar>
		<v-subheader>
			Панель администратора
		</v-subheader>
		<v-divider class="mx-4" vertical></v-divider>
		<v-menu offset-y>
			<template v-slot:activator="{ on }">
				<v-btn color="primary" dark	v-on="on">{{ currEvent && currEvent.title }}</v-btn>
			</template>
			<v-list>
				<v-list-item
					v-for="(event, index) in events"
					:key="index"
					@click="setCurrEvent(event)">

					<v-list-item-title>{{ event.title }}</v-list-item-title>
				</v-list-item>
			</v-list>
		</v-menu>
	</v-toolbar>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
	data: () => ({
		currEvent: {
			eventid: 0,
			title: 'Выберите мероприятие',
		}
	}),
	methods: {
		setCurrEvent: function (_event:any) {
			console.log(_event);
			this.currEvent = _event;
			this.$store.commit('setCurrentEvent', _event.eventid)
		},
	},
	computed: mapState({
		events: state => state.events
	})
})
</script>