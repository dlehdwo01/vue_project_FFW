<template>
	<div class="header-container">
		<div class="flex-row align-items-center">
			<div class="logo">
				<img :src="logo" alt="logo" width="106" height="68" />
			</div>
			<div class="flex-row gap-30" style="height: 88px">
				<div
					v-for="(item, key) in items1"
					:key="key"
					:data="item"
					@mouseover="depth1Over"
					@mouseleave="depth1Leave"
				>
					<router-link
						class="justify-content-center flex-column pl-10"
						:style="isActive(item.value)"
						style="cursor: pointer; height: 100%"
						:to="item.url"
					>
						<div class="fs-16 fw-500">{{ item.title }}</div>
						<div class="fs-12">{{ item.sub }}</div>
					</router-link>
					<div
						v-if="items2[item.value] && false"
						style="position: absolute; border: 1px solid #ccc; width: 180px"
						class="pt-10 pb-10 fw-300 fs-12"
					>
						<div
							class="p-10-20 depth2-item"
							v-for="(item2, key2) in items2[item.value]"
							:key="key2"
						>
							{{ item2.label }}
						</div>
					</div>
				</div>
				<!-- <div>
					<div class="fs-16 fw-500" style="color: #41b883">원룸</div>
					<div class="fs-12" style="color: #41b883">전월세</div>
				</div> -->
			</div>
		</div>
		<div style="margin-right: 20px" v-if="!isLogin">
			<button class="login" @click="onClickLogin">로그인 및 회원가입</button>
		</div>
		<div style="margin-right: 20px" v-else>
			<button class="login" @click="onClickLogout">로그아웃</button>
		</div>
	</div>
</template>
<script setup lang="ts">
import logo from '@/assets/logo.png';
import router from '@/router';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const isLogin = computed(() => store.state.isLogin);
const route = useRoute();

// 카테고리 색깔 활성화(depth1)
function isActive(value: string) {
	if (route.path.includes('home/' + value)) {
		return { color: '#41b883' };
	}
	return {};
}

function depth1Over() {
	console.log('까꿍');
}
function depth1Leave() {
	console.log('bye');
}

// 카테고리(depth1)
const items1 = [
	{
		title: '아파트',
		sub: '매매/전월세/신축분양',
		value: 'apt',
		url: '/home/apt/map',
	},
	{
		title: '빌라, 투룸+',
		sub: '신축분양/매매/전월세',
		value: 'villa',
		url: '/home/villa/map',
	},
	{
		title: '원룸',
		sub: '전월세',
		value: 'oneroom',
		url: '/home/oneroom/map',
	},
];

// 카테고리 (depth2)
const items2 = {
	apt: [
		{
			label: '매매/전월세',
			value: 'map',
			url: 'home/apt/map',
		},
		{ label: '신축분양', value: 'map/offer', url: 'home/apt/map/offer' },
		{
			label: '인구흐름',
			value: 'map/population',
			url: 'home/apt/map/population',
		},
	],
} as Record<string, any>;

// 로그인 클릭시
function onClickLogin() {
	router.push('/login');
}

// 로그아웃 클릭시
function onClickLogout() {
	console.log('onClickLogout');
}
</script>
<style scoped>
.header-container {
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-width: 1024px;
	box-sizing: border-box;
	border-bottom: 1px solid #ccc;
	z-index: 999;
	background-color: white;
}
.logo {
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	padding: 10px 20px;
}
.depth2-item {
	cursor: pointer;
}
.depth2-item:hover {
	background-color: rgba(0, 0, 0, 0.1);
}
</style>
