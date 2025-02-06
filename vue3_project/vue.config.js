const { defineConfig } = require('@vue/cli-service');
const path = require('path');
module.exports = defineConfig({
	transpileDependencies: true,
	configureWebpack: {
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src'),
			},
		},
	},
	//* 오류 메시지가 콘솔에만 출력
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:3000', // 실제 API 서버 주소
				changeOrigin: true, // API 서버와의 CORS 문제를 해결
				pathRewrite: { '^/api': '' }, // '/api'를 제거하고 요청 전달
			},
		},
	},
});
