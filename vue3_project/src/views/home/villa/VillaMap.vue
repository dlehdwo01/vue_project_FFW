<template>
	<HeaderView />
	<div class="body-container" style="overflow: hidden">
		<MapView ref="mapView" />
		<SideRight />
	</div>
</template>
<script lang="ts" setup>
import HeaderView from '@/components/HeaderView/HeaderView.vue';
import MapView from '@/components/MapView/MapView.vue';
import SideRight from '@/components/SideRight/SideRight.vue';
import { onMounted, ref } from 'vue';

const mapView = ref<{ map: kakao.maps.Map } | null>();
onMounted(() => {
	if (mapView.value) {
		mapView.value.map.setCenter(new kakao.maps.LatLng(33.45, 126.59));
	}
});
</script>
<style scoped>
.room {
	cursor: pointer;
}
.room:hover {
	background-color: rgba(0, 0, 0, 0.05);
}
</style>
