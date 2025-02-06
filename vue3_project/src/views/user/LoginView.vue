<template>
	<div id="container">
		<VueHeader />
		<div class="body-container align-items-center">
			<div class="contents-container">
				<div class="title">로그인</div>
				<div class="flex-column gap-10">
					<div class="gap-20 flex-row align-items-center">
						<span class="type bold text-align-center">아이디</span>
						<input v-model="id" />
					</div>
					<div class="gap-20 flex-row align-items-center">
						<span class="type bold text-align-center">비밀번호</span>
						<input v-model="pwd" type="password" />
					</div>
				</div>
				<div class="contents-container-bottom">
					<button class="confirm-btn" @click="onClickLogin">로그인</button>
					<router-link class="user-link" to="/register">회원가입</router-link>
				</div>
			</div>
		</div>

		<UIConfirm ref="confirmModal" />
	</div>
</template>
<script setup lang="ts">
import UIConfirm from '@/components/UIConfirm/UIConfirm.vue';
import VueHeader from '@/components/HeaderView/HeaderView.vue';
import { ref } from 'vue';
import { loginUser } from '@/api/user/login';
import router from '@/router';
import { useStore } from 'vuex';

const store = useStore();

const confirmModal = ref<InstanceType<typeof UIConfirm> | null>();
let id = '';
let pwd = '';

const onClickLogin = async () => {
	if (id == '') {
		confirmModal.value?.open({
			message: '아이디를 입력해 주세요',
		});
		return;
	}
	if (pwd == '') {
		confirmModal.value?.open({
			message: '비밀번호를 입력해 주세요',
		});
		return;
	}
	try {
		const { data } = await loginUser({ id: id, pwd: pwd });
		if (data == 'success') {
			console.log('로그인 성공');
			store.commit('setIsLogin', true);
			router.push('/home/villa/map');
		} else {
			confirmModal.value?.open({
				message: '아이디 또는 비밀번호를 확인해 주세요',
			});
		}
	} catch (error) {
		console.log(error);
	}
};
</script>

<style src="@/styles/user/user.css" />
<style>
.type {
	width: 70px;
}
</style>
