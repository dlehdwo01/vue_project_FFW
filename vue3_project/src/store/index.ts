import { createStore } from 'vuex';

export default createStore({
	state: {
		isLogin: false,
		token: '',
	},
	getters: {
		isLogin(state) {
			return state.isLogin;
		},
	},
	mutations: {
		setToken(state, token) {
			state.token = token;
		},
		setIsLogin(state, isLogin) {
			state.isLogin = isLogin;
		},
	},
	actions: {},
	modules: {},
});
