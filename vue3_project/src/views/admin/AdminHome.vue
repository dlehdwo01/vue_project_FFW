<template>
	<div id="container">
		<HeaderView />
		<div class="body-container">
			<div
				style="
					width: 300px;
					box-sizing: border-box;
					/* border-right: 1px solid #ccc; */
					box-shadow: 0px 0px 30px;
				"
			>
				<ul>
					<li>고객 관리</li>
					<li>주문 관리</li>
					<li>주문 상태</li>
					<li>환불 관리</li>
					<li>재고 관리</li>
					<li>영업점 관리</li>
					<li>직원 관리</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script lang="ts" setup>
import HeaderView from '@/components/HeaderView/HeaderView.vue';
</script>
