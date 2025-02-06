<template>
	<!-- Header Top -->
	<div class="header-container">
		<div class="flex-row align-items-center">
			<router-link class="logo" to="/">
				<img :src="logo" alt="logo" width="106" height="68" />
			</router-link>
			<div class="flex-row gap-30" style="height: 88px">
				<!-- depth1 -->
				<div
					v-for="(item, key) in items1"
					:key="key"
					:data="item"
					@mouseover="depth1Over(key)"
					@mouseleave="depth1Leave(key)"
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
					<!-- depth2 -->
					<transition name="fade">
						<div
							v-if="
								items2[item.value] && item.isHover && items2[item.value].length
							"
							style="
								position: absolute;
								border: 1px solid #ccc;
								width: 180px;
								background-color: white;
							"
							class="pt-10 pb-10 fw-400 fs-12"
						>
							<div
								class="p-10-20 depth2-item"
								v-for="(item2, key2) in items2[item.value]"
								:key="key2"
								@click="router.push(item2.url)"
							>
								{{ item2.label }}
							</div>
						</div>
					</transition>
				</div>
			</div>
		</div>
		<div style="margin-right: 20px" v-if="!isLogin">
			<button class="login" @click="onClickLogin">로그인 및 회원가입</button>
		</div>
		<div style="margin-right: 20px" v-else>
			<button class="login" @click="onClickLogout">로그아웃</button>
		</div>
	</div>
	<!-- Header Bottom -->
	<div
		style="border-bottom: 1px solid #ccc"
		v-if="activeCategory && activeCategory2"
	>
		<div class="flex-row pl-30 align-items-center">
			<div
				class="p-10-20 fw-300 color-3"
				style="cursor: pointer"
				v-for="(item, key) in items2[activeCategory]"
				:key="key"
				:style="isActive2(item.value)"
				@click="router.push(item.url)"
			>
				{{ item.label }}
			</div>
		</div>
	</div>
</template>
<script setup lang="ts">
import logo from '@/assets/logo.png';
import router from '@/router';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const isLogin = computed(() => store.state.isLogin);
const route = useRoute();
const activeCategory = ref<string | null>('');
const activeCategory2 = ref<string | null>('');

// 최초 1회 실행 함수
onMounted(() => {
	// 현재 카테고리1 세팅
	activeCategory.value =
		items1.value.find(item => route.path.includes('home/' + item.value))
			?.value ?? null;
	// 현재 카테고리2 세팅
	if (activeCategory.value) {
		let temp =
			items2[activeCategory.value]?.filter(item =>
				route.path.includes(item.url),
			) ?? [];
		if (temp.length == 2) {
			temp = temp.filter(item => item.value !== 'map');
		}
		activeCategory2.value = temp.length !== 0 ? temp[0].value : '';
		console.log(temp);
	}
});

// 카테고리1 색깔 활성화(depth1)
function isActive(value: string) {
	if (activeCategory.value == value) {
		return { color: '#41b883' };
	}
	return {};
}

// 카테고리2 색깔 활성화(depth2)
function isActive2(value: string) {
	if (activeCategory2.value == value) {
		return {
			borderBottom: '2px solid rgb(38, 38, 38)',
			fontWeight: '500',
			color: 'rgb(34,34,34)',
		};
	}
	return {};
}

// 카테고리1 마우스 over
function depth1Over(index: number) {
	items1.value[index].isHover = true;
}

// 카테고리1 마우스 leave
function depth1Leave(index: number) {
	items1.value[index].isHover = false;
}

// 카테고리(depth1)
const items1 = ref([
	{
		title: '아파트',
		sub: '매매/전월세/신축분양',
		value: 'apt',
		url: '/home/apt/map',
		isHover: false,
	},
	{
		title: '빌라, 투룸+',
		sub: '신축분양/매매/전월세',
		value: 'villa',
		url: '/home/villa/map',
		isHover: false,
	},
	{
		title: '원룸',
		sub: '전월세',
		value: 'oneroom',
		url: '/home/oneroom/map',
		isHover: false,
	},
]);

// 카테고리 (depth2)
const items2 = {
	apt: [
		{
			label: '매매/전월세',
			value: 'map',
			url: '/home/apt/map',
			isActive: false,
		},
		{
			label: '신축분양',
			value: 'offer',
			url: '/home/apt/map/offer',
			isActive: false,
		},
		{
			label: '인구흐름',
			value: 'population',
			url: '/home/apt/map/population',
			isActive: false,
		},
	],
	villa: [
		{
			label: '빌라, 투룸 찾기',
			value: 'map',
			url: '/home/villa/map',
			isActive: false,
		},
		{
			label: '찜한 매물',
			value: 'zzim',
			url: '/home/villa/items/zzim',
			isActive: false,
		},
		{
			label: '빌라 내놓기(매매/전월세)',
			value: 'sell',
			url: '/house/sell?service_type=villa',
			isActive: false,
		},
	],
} as Record<
	string,
	{ label: string; value: string; url: string; isActive: boolean }[]
>;

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
