<template>
	<v-form>
		<v-row>
			<v-col cols="8">
				<v-row>
					<v-col cols="10">
						<v-text-field label="Название мероприятия" v-model="currentEvent.title"></v-text-field>	
					</v-col>
					<v-col cols="2">
						<v-text-field label="Кол-во судей" v-model="currentEvent.judges" type="number" ></v-text-field>
					</v-col>
				</v-row>
				<v-text-field label="Адрес мероприятия" v-model="currentEvent.adress" ></v-text-field>

				<v-select
					v-model="currentEvent.characteristics"
					:items="Events.characteristics"
					:menu-props="{ maxHeight: '500' }"
					label="Характеристики"
					multiple
					hint="Выберите характеристики для оценки"
					persistent-hint
					clearable
					counter>
				</v-select>

				<v-select
					v-model="currentEvent.hclasses"
					:items="Events.hclasses"
					:menu-props="{ maxHeight: '500' }"
					label="Классы"
					multiple
					hint="Выберите классы лошадей"
					persistent-hint
					clearable
					counter>
				</v-select>

				<v-select
					v-model="currentEvent.horses"
					:items="Events.horses"
					:menu-props="{ maxHeight: '500' }"
					label="Лошади"
					multiple
					hint="Выберите лошадей"
					persistent-hint
					clearable
					counter>
				</v-select>


			</v-col>
			<v-col cols="4">
				<v-date-picker v-model="currentEvent.eventdate" full-width></v-date-picker>
			</v-col>
		</v-row>
		<v-fab-transition>
			<v-btn
				absolute=""
				dark
				bottom
				right
				x-large
				color="pink"
				@click="saveEvent(currentEvent)"
				>
				Сохранить значения
			</v-btn>
		</v-fab-transition>
			
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

	@Action('saveEvent', { namespace }) saveEvent: any;

	@Getter('getCurrentEvent', { namespace }) currentEvent: EventH;
	@Getter('getEvents', { namespace }) Events: EventH[];
	@Getter('getForms', { namespace }) Forms: Form[];

	@Mutation('setCurrentEvent', { namespace }) setCurrentEvent: EventH;
};
</script>