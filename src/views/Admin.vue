<template>
	<v-layout>
		<AdminBar />
		<AdminContent />
	</v-layout>
</template>

<script lang="ts">
import Vue from 'vue';
import AdminBar from '../components/Admin/AdminBar';//'../components/Admin/AdminBar';
import AdminContent from "../components/Admin/AdminContent";
export default Vue.extend({
	components: {
		AdminBar,
		AdminContent
	}
})
</script>