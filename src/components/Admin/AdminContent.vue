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
					v-model="currentEvent.eventcharacteristic"
					:items="Characteristics"
					:menu-props="{ maxHeight: '500' }"
					label="Характеристики"
					item-text="title"
					item-value="characteristicid"
					multiple
					hint="Выберите характеристики для оценки"
					persistent-hint
					clearable
					counter
					@input="setChars"
					>
				</v-select>

				<v-select
					v-model="currentEvent.eventhclass"
					:items="Hclasses"
					:menu-props="{ maxHeight: '500' }"
					label="Классы"
					item-text="title"
					item-value="hclassid"
					multiple
					hint="Выберите классы лошадей"
					persistent-hint
					clearable
					counter
					@input="setClasses">
				</v-select>

				<v-select
					v-model="currentEvent.eventhorse"
					:items="selectHorses"
					:menu-props="{ maxHeight: '500' }"
					label="Лошади"
					item-text="title"
					item-value="horseid"
					multiple
					hint="Выберите лошадей"
					persistent-hint
					clearable
					counter
					@input="setHorses">
				</v-select>


			</v-col>
			<v-col cols="4">
				<v-date-picker 
					v-model="currentEvent.eventdate"
					full-width>
				</v-date-picker>
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
import { State, Action, Getter, Mutation } from 'vuex-class';
import Component from 'vue-class-component';
import { ProfileState, EventH, Form, EventCharacteristic, Horse, Characteristic } from '@/profile/types';
const namespace: string = 'profile';

@Component
export default class AdminContent extends Vue {
  @State('profile') public profile: ProfileState;

  @Action('saveEvent', { namespace }) public saveEvent: any;

  @Getter('getForms', { namespace }) public Forms: Form[];
	@Getter('getCurrentEvent', { namespace }) public currentEvent: EventH;
	
  @Getter('getEvents', { namespace }) public Events: EventH[];
	@Getter('getHorses', { namespace }) public Horses: Horse[];
	@Getter('getHorsesSelect', { namespace }) public selectHorses: Horse[];
  @Getter('getHclasses', { namespace }) public Hclasses: Hclass[];
	@Getter('getCharacteristics', { namespace }) public Characteristics: Characteristic[];
	
  @Mutation('setCurrentEvent', { namespace }) public setCurrentEvent: EventH;

	public setChars(charsArr:number[]) {
		this.currentEvent.eventcharacteristic = 
			charsArr.map((char:number) =>
				({
					eventid: this.currentEvent.eventid,
					characteristicid: char
				})
		)
	}
	public setClasses(hclassesArr:number[]) {
		this.currentEvent.eventhclass = 
			hclassesArr.map((hclass:number) =>
				({
					eventid: this.currentEvent.eventid,
					hclassid: hclass
				})
		)
	}
	public setHorses(horsesArr:number[]) {
		this.currentEvent.eventhorse = 
			horsesArr.map((horse:number) =>
				({
					eventid: this.currentEvent.eventid,
					horseid: horse
				})
		)
	}
}
</script>