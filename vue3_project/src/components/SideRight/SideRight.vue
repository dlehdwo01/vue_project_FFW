<template>
	<div
		style="
			width: 400px;
			min-width: 400px;
			max-width: 400px;
			border: 1px solid #ccc;
			border-top: none;
			display: flex;
			flex-direction: column;
		"
	>
		<!-- title -->
		<div
			class="flex-row justify-content-between align-items-center p-20-10 fs-14 fw-500"
			style="border-bottom: 1px solid #ccc"
		>
			<span>left</span>
			<span>지역목록 182개</span>
			<span>right</span>
		</div>
		<div style="overflow-y: auto; flex: 1">
			<!-- rooms -->
			<div class="flex-row p-20 room gap-10" v-for="key in 10" :key="key">
				<div
					style="
						border: 1px solid #ccc;
						border-radius: 4px;
						width: 144px;
						height: 112px;
					"
				>
					사진
				</div>
				<div class="flex-column" style="flex: 1; overflow: hidden">
					<div
						class="flex-row gap-10 align-items-center"
						style="margin-bottom: 4px"
					>
						<span
							class="bgColor-4 fs-10 color-4 fw-300"
							style="border-radius: 4px; padding: 1px 3px"
						>
							추천
						</span>
						<span class="fs-12 fw-300"
							>단기
							<span class="bold">·</span>
							쓰리룸+</span
						>
					</div>
					<div class="fs-18 fw-500 align-items-center">월세 250/85</div>
					<div class="fs-14 color-2 align-items-center">77m² · 4층</div>
					<div>
						<span class="fs-14 color-2 align-items-center"
							>미추홀구 도화동</span
						>
					</div>
					<div
						style="
							white-space: nowrap; /* 줄바꿈 방지 */
							overflow: hidden; /* 텍스트가 컨테이너를 벗어나지 않도록 숨김 */
							text-overflow: ellipsis; /* 텍스트가 넘칠 경우 '...' 표시 */
							flex-shrink: 1;
						"
					>
						<span class="color-3 fw-300 fs-14"
							>미친 가성비 아파트급 넓은 쓰리룸 ㄴㅇㅁㄴㅇㅁㄴㅇㅁㄴ</span
						>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup></script>
