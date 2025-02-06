<template>
	<div>
		<HomeHeader />
		<HomeBody />
	</div>
</template>

<script lang="ts">
import HomeBody from '@/components/BodyView/HomeBody.vue';
import HomeHeader from '@/components/HeaderView/HomeHeader.vue';
import { Options, Vue } from 'vue-class-component';

@Options({
	components: { HomeHeader, HomeBody },
})
export default class HomeView extends Vue {}
</script>

<style src="@/styles/home/home.css" />
