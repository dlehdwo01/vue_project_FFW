<template>
	<Transition name="fade">
		<div v-if="isVisible" class="modal-background">
			<div class="modal-confirm p-20" style="padding-bottom: 10px">
				<div class="mb-10 bold">{{ title }}</div>
				<div class="mb-10 fs-14" style="overflow-wrap: break-word">
					<span style="white-space: pre-line">
						{{ message }}
					</span>
				</div>
				<div class="flex-row align-items-center justify-content-center">
					<button class="m-10 p-5-10" @click="onClickConfirm" ref="confirmBtn">
						{{ confirmText }}
					</button>

					<button class="m-10 p-5-10" @click="onClickCancel" v-if="cancelText">
						{{ cancelText }}
					</button>
				</div>
			</div>
		</div>
	</Transition>
</template>
<script setup lang="ts">
let isVisible = false;
let title = '알림';
let message = '';
let confirmText = '확인';
let cancelText = '';
let onConfirmCallback = () => {
	console.log('콜백');
};

const onClickConfirm = () => {
	close();
	onConfirmCallback();
};

const onClickCancel = () => {
	close();
};
interface confirmDto {
	title?: string;
	message: string;
	confirmText?: string;
	cancelText?: string;
	onConfirm?: () => void;
}
function open({
	title,
	message,
	confirmText,
	cancelText,
	onConfirm,
}: confirmDto) {
	// title = title ?? '알림';
	// message = message ?? '';
	// confirmText = confirmText ?? '확인';
	// cancelText = cancelText ?? '';
	// onConfirmCallback =
	// 	onConfirm ??
	// 	(() => {
	// 		console.log('콜백');
	// 	});
	isVisible = true;
	// $nextTick(() => {
	// 	($refs.confirmBtn as HTMLButtonElement).focus();
	// });
}

const close = () => {
	isVisible = false;
};
</script>
<style>
/* 요소가 나타날 때 */
.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.25s ease;
}

/* 나타나기 전 (처음에는 투명하게) */
.fade-enter,
.fade-leave-to {
	opacity: 0;
}
</style>
