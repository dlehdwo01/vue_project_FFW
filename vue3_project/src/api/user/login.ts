import axiosService from '@/utils/callAxios';

// 로그인
function loginUser(userData: { id: string; pwd: string }) {
	return axiosService.post('login', userData);
}

export { loginUser };
