<template>
	<div>
		<HeaderView />
		<header class="header">
			<h1 class="main-title">어떤 집을 찾고 계세요?</h1>
			<nav class="navigation">
				<ul class="nav-list">
					<li class="nav-item active">아파트</li>
					<li class="nav-item">빌라,투룸+</li>
					<li class="nav-item">원룸</li>
					<li class="nav-item">오피스텔</li>
					<li class="nav-item">상가</li>
				</ul>
			</nav>
			<div class="search-container">
				<input
					type="text"
					class="search-input"
					placeholder="원하시는 지역명, 지하철역, 단지명(아파트명)을 입력해주세요"
				/>
				<button class="search-button">
					<span class="search-icon">🔍</span>
				</button>
			</div>
		</header>

		<section class="content-section">
			<div class="categories-container">
				<!-- 소개할게요 섹션 -->
				<div class="category">
					<h2 class="category-title">소개할게요</h2>
					<div class="more-btn">더보기</div>
					<div class="intro-card">
						<div class="coin-icon">💰</div>
						<h3>소중한 내 전세보증금 무료로 보증받는 법</h3>
						<button class="more-button">자세히 알아보기</button>
					</div>
				</div>

				<!-- 뉴스 섹션 -->
				<div class="category">
					<h2 class="category-title">뉴스</h2>
					<div class="more-btn">더보기</div>
					<div class="list-container">
						<div class="list-item">2월 전국 1인2.676세대 분양계획</div>
						<div class="list-item">
							2월 수도권 87.5만평 전망 예정 '물량' 수준
						</div>
						<div class="list-item">
							GTX-A 운영종료~서울역 거리, 안전 단지 수정자
						</div>
						<div class="list-item">2025년 1월 전국 1만3,113세대 분양예정</div>
						<div class="list-item">2025년 첫 설꺾기 될 될까?</div>
					</div>
				</div>

				<!-- 공지사항 섹션 -->
				<div class="category">
					<h2 class="category-title">공지사항</h2>
					<div class="more-btn">더보기</div>
					<div class="list-container">
						<div class="list-item">
							[공지] 직방 개인정보 처리방침 (2024/12/31) 개정 안내
						</div>
						<div class="list-item">
							[공지] 직방 개인정보 처리방침 (2024/11/01) 개정 안내
						</div>
						<div class="list-item">
							[공지]일부 단지 실거래 정보 마노층 및 업데이트 지연
						</div>
						<div class="list-item">
							[공지] 직방 개인정보 처리방침 (2024/09/19) 개정
						</div>
						<div class="list-item">
							[공지] 직방 서비스이용약관 (2024/07/09) 개정안내
						</div>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script lang="ts" setup>
import HeaderView from '@/components/HeaderView/HeaderView.vue';
</script>
<style src="@/styles/home/home.css" />
