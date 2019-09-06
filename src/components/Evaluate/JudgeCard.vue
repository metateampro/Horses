<template>
	<v-col cols="2" >
		<v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
		<v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
		<v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
		<v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
		<v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
	</v-col>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	data: () => ({
	}),
	computed: {
		HorseCharacteristics () {
			return {}; //this.$store.
		}
	}
})
</script>
<style scoped>

</style>