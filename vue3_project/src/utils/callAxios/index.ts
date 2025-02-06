import store from '@/store';
import axios, { AxiosInstance } from 'axios';

function setInterceptors(axiosService: AxiosInstance) {
	axiosService.interceptors.request.use(
		function (config) {
			// 요청을 보내기 전에 어떤 처리를 할 수 있다.
			config.headers.Authorization = store.state.token; // 헤더에 토큰 넣기
			return config;
		},
		function (error) {
			// 요청이 잘못되었을 때 에러가 컴포넌트 단으로 오기 전에 어떤 처리를 할 수 있다.
			return Promise.reject(error);
		},
	);

	axiosService.interceptors.response.use(
		function (response) {
			// 서버에 요청을 보내고 나서 응답을 받기 전에 어떤 처리를 할 수 있다.
			return response;
		},
		function (error) {
			// 응답이 에러인 경우에 미리 전처리할 수 있다.
			return Promise.reject(error);
		},
	);

	return axiosService;
}

function createAxiosService() {
	const axiosService = axios.create({
		baseURL: process.env.VUE_APP_API_URL,
	});
	return setInterceptors(axiosService);
}
const axiosService = createAxiosService();

export default axiosService;
