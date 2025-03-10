<template>
  <div id="app">
    <header>
      <!-- 공통 헤더 내용 -->
      <meta name="naver-site-verification" content="0f3c7bde77c508a5d2f75e04954fe264a22739d1" />
    </header>
    <router-view />
    <footer>
      <!-- 공통 푸터 내용 -->
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* 공통 스타일 */
@import 'leaflet/dist/leaflet.css';
</style>