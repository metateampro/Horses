<template>
	<h1>gg</h1>
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