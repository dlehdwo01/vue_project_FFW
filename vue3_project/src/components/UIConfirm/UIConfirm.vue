<template>
	<Transition name="fade">
		<div v-if="isVisible" class="modal-background">
			<div class="modal-confirm p-20" style="padding-bottom: 10px">
				<div class="mb-10 bold">{{ modalTitle }}</div>
				<div class="mb-10 fs-14" style="overflow-wrap: break-word">
					<span style="white-space: pre-line">
						{{ modalMessage }}
					</span>
				</div>
				<div class="flex-row align-items-center justify-content-center">
					<button class="m-10 p-5-10" @click="onClickConfirm" ref="confirmBtn">
						{{ modalConfirmText }}
					</button>

					<button
						class="m-10 p-5-10"
						@click="onClickCancel"
						v-if="modalCancelText"
					>
						{{ modalCancelText }}
					</button>
				</div>
			</div>
		</div>
	</Transition>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const isVisible = ref(false);
const modalTitle = ref('알림');
const modalMessage = ref('');
const modalConfirmText = ref('확인');
const modalCancelText = ref('');
const onConfirmCallback = ref<() => void>();
const confirmBtn = ref<HTMLElement | null>();

const onClickConfirm = () => {
	close();
	onConfirmCallback.value?.();
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
	modalTitle.value = title ?? '알림';
	modalMessage.value = message ?? '';
	modalConfirmText.value = confirmText ?? '확인';
	modalCancelText.value = cancelText ?? '';
	onConfirmCallback.value = onConfirm;
	isVisible.value = true;
	confirmBtn.value?.focus();
}

const close = () => {
	isVisible.value = false;
};
defineExpose({
	open,
});
</script>
