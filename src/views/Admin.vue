<template>
	<v-container>
		<v-layout>
			<AdminBar />
		</v-layout>
		<AdminContent />
	</v-container>
</template>

<script lang="ts">
import Vue from 'vue';
import AdminBar from '../components/Admin/AdminBar'; // '../components/Admin/AdminBar';
import AdminContent from '../components/Admin/AdminContent';
export default Vue.extend({
  components: {
    AdminBar,
    AdminContent,
  },
});
</script>