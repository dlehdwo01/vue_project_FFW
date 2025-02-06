<template>
	<div id="container">
		<HeaderView />
		<div class="body-container align-items-center">
			<div class="contents-container">
				<div class="title">회원가입</div>
				<div class="flex-column gap-10">
					<div class="gap-20 flex-row align-items-center">
						<span class="type bold text-align-center">아이디</span>
						<input v-model="id" />
						<button @click="onClickDupCheck">중복확인</button>
					</div>

					<div class="gap-20 flex-row align-items-center">
						<span class="type bold text-align-center">비밀번호</span>
						<input v-model="pwd" type="password" />
					</div>

					<div class="gap-20 flex-row align-items-center">
						<span class="type bold text-align-center">비밀번호 확인</span>
						<input v-model="pwdCheck" type="password" />
					</div>
				</div>

				<div class="contents-container-bottom">
					<button class="confirm-btn" @click="onClickRegister">회원가입</button>
					<router-link class="user-link" to="/login"
						>로그인페이지로</router-link
					>
				</div>
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import HeaderView from '@/components/HeaderView/HeaderView.vue';
import { ref } from 'vue';
const id = ref('');
const pwd = ref('');
const pwdCheck = ref('');
function onClickDupCheck() {
	console.log('dupCheck');
}
function onClickRegister() {
	console.log('onClickRegister');
}
</script>
<style src="@/styles/user/user.css" />
<style>
.type {
	width: 100px;
}
</style>
