<template>
	<h1>{{ CurrentEvent }}</h1>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
	computed: {
		CurrentEvent: function () {
			return this.$store.getters.getCurrentEvent;
		}
	}
})
</script>