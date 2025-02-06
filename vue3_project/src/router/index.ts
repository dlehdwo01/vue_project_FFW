import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: () => import('@/views/HomeView.vue'),
		meta: { title: 'Vue - 홈' },
	},
	{
		path: '/login',
		name: 'login',
		component: () => import('@/views/user/LoginView.vue'),
		meta: { title: 'Vue - 로그인' },
	},
	{
		path: '/register',
		name: 'register',
		component: () => import('@/views/user/RegisterView.vue'),
		meta: { title: 'Vue - 회원가입' },
	},
	{
		path: '/home/apt/map',
		name: 'aptMap',
		component: () => import('@/views/home/apt/AptMap.vue'),
		meta: { title: 'Vue - 아파트' },
	},
	{
		path: '/home/apt/map/offer',
		name: 'aptOffer',
		component: () => import('@/views/home/apt/AptOffer.vue'),
		meta: { title: 'Vue - 아파트' },
	},
	{
		path: '/home/apt/map/population',
		name: 'aptPopulation',
		component: () => import('@/views/home/apt/AptPopulation.vue'),
		meta: { title: 'Vue - 아파트' },
	},
	{
		path: '/home/villa/map',
		name: 'villaMap',
		component: () => import('@/views/home/villa/VillaMap.vue'),
		meta: { title: 'Vue - 빌라' },
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

// 페이지 이동 시마다 타이틀을 변경
router.beforeEach(to => {
	if (to.meta.title) {
		document.title = to.meta.title as string;
	} else {
		document.title = 'Vue'; // 기본 타이틀
	}
});

export default router;
