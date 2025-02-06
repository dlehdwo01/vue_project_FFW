module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: [
		'plugin:vue/vue3-essential',
		'eslint:recommended',
		'@vue/typescript/recommended',
		'plugin:prettier/recommended',
	],
	parserOptions: {
		ecmaVersion: 2020,
	},
	rules: {
		'vue/script-setup-uses-vars': 'error', // Vue 3의 `<script setup>` 구문을 사용하는 변수 인식
		'no-undef': 'off', // `defineExpose`가 `no-undef`에서 예외로 처리되도록 설정
		'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
		'prettier/prettier': [
			'error',
			{
				singleQuote: true,
				semi: true,
				trailingComma: 'all',
				tabWidth: 2,
				endOfLine: 'auto',
				useTabs: true,
				printWidth: 80,
				bracketSpacing: true,
				arrowParens: 'avoid',
			},
		],
	},
	overrides: [
		{
			files: [
				'**/__tests__/*.{j,t}s?(x)',
				'**/tests/unit/**/*.spec.{j,t}s?(x)',
			],
			env: {
				jest: true,
			},
		},
	],
};
