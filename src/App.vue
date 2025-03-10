<template>
  <div id="app">
    <header>
      <!-- 공통 헤더 내용 -->
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