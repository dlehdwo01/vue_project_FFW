<template>
	<div ref="mapContainer" class="map-container"></div>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const mapContainer = ref<HTMLElement | null>(null); //지도를 담을 영역의 DOM 레퍼런스
const map = ref<kakao.maps.Map | null>();
onMounted(() => {
	if (mapContainer.value) {
		var options = {
			//지도를 생성할 때 필요한 기본 옵션
			center: new kakao.maps.LatLng(33.450701, 126.570667), //지도의 중심좌표.
			level: 3, //지도의 레벨(확대, 축소 정도)
		};
		map.value = new kakao.maps.Map(mapContainer.value, options); //지도 생성 및 객체 리턴
	}
});
defineExpose({
	map,
});
</script>
<style scoped>
.map-container {
	width: 100%;
}
</style>
