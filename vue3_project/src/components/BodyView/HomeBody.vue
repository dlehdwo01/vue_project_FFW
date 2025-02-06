<template>
	<div class="home-body">
		<h1>게시글 목록</h1>
		<div v-if="loading" class="loading">로딩 중...</div>
		<div v-else>
			<div v-for="post in posts" :key="post.id" class="post-item">
				<h2>{{ post.title }}</h2>
				<p>{{ post.content }}</p>
				<button @click="viewPost(post.id)">자세히 보기</button>
			</div>
			<div v-if="posts.length === 0" class="no-posts">게시글이 없습니다.</div>
		</div>
		<UIConfirm ref="confirmModal" />
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import router from '@/router';
import UIConfirm from '../UIConfirm/UIConfirm.vue';
const confirmModal = ref();
interface Post {
	id: number;
	title: string;
	content: string;
}

const posts = ref<Post[]>([]);
const loading = ref(true);

// 게시글 데이터를 받아오는 함수 (예시로 임시 데이터를 사용)
const fetchPosts = async () => {
	// 실제 API 호출 부분은 여기에 작성
	// 예시로 임시 데이터를 넣음
	setTimeout(() => {
		posts.value = [
			{ id: 1, title: '첫 번째 게시글', content: '첫 번째 게시글 내용입니다.' },
			{ id: 2, title: '두 번째 게시글', content: '두 번째 게시글 내용입니다.' },
			{ id: 3, title: '세 번째 게시글', content: '세 번째 게시글 내용입니다.' },
		];
		loading.value = false;
	}, 1000);
};

const viewPost = (id: number) => {
	confirmModal.value.open({
		message: id + '번 게시물',
	});
	// router.push(`/post/${id}`);
};

// 페이지가 마운트되면 게시글 데이터를 불러옵니다.
onMounted(() => {
	fetchPosts();
});
</script>
