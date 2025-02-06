<template>
	<div class="header-container">
		<div style="margin-right: 20px">
			<h1>게시글</h1>
		</div>
	</div>
</template>
<script setup lang="ts">
import logo from '@/assets/logo.png';
import router from '@/router';

const onClickLogin = () => {
	router.push('/login');
};
</script>
<style scoped>
.header-container {
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-width: 1024px;
}
.logo {
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	padding: 10px 20px;
}
</style>
