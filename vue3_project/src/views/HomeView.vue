<template>
	<div>
		<HeaderView />
	</div>
</template>

<script lang="ts">
import HeaderView from '@/components/HeaderView/HeaderView.vue';
import { Options, Vue } from 'vue-class-component';

@Options({
	components: { HeaderView },
})
export default class HomeView extends Vue {}
</script>
