import axiosService from '@/utils/callAxios';

// 아이디 중복체크
function duplicateId(userData: { id: string }) {
	return axiosService.post('duplicateIdCheck', userData);
}

export { duplicateId };
