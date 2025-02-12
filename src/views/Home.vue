<template>
  <div class="container">
    <aside class="sidebar" :class="{ open: isSidebarOpen }">
      <img src="@/assets/logo.jpg" alt="Logo" class="sidebar-logo" />
      <button class="close-btn" @click="toggleSidebar">X</button>
      <nav>
        <ul>
          <li @click="toggleSubmenu('company')">
            회사소개
            <span class="arrow">{{ activeSubmenu === 'company' ? '▲' : '▼' }}</span>
            <ul v-if="activeSubmenu === 'company'" class="submenu">
              <li @click="scrollToImage('image1')">회사 소개</li>
              <li @click="scrollToImage('image2')">주요 연혁</li>
              <li @click="scrollToImage('image3')">조직도</li>
            </ul>
          </li>
          <li @click="toggleSubmenu('service')">
            서비스 소개
            <span class="arrow">{{ activeSubmenu === 'service' ? '▲' : '▼' }}</span>
            <ul v-if="activeSubmenu === 'service'" class="submenu">
              <li @click="scrollToImage('image4')">통합 메시지 서비스</li>
              <li @click="scrollToImage('image5')">통합 메시징 시스템 솔루션 임대</li>
              <li @click="scrollToImage('image6')">카카오 알림톡</li>
              <li @click="scrollToImage('image7')">RCS</li>
              <li @click="scrollToImage('image8')">기프티콘</li>
            </ul>
          </li>
          <li @click="toggleSubmenu('method')">
            서비스 방식
            <span class="arrow">{{ activeSubmenu === 'method' ? '▲' : '▼' }}</span>
            <ul v-if="activeSubmenu === 'method'" class="submenu">
              <li @click="scrollToImage('image9')">바다문자 플랫폼</li>
              <li @click="scrollToImage('image10')">알림톡</li>
              <li @click="scrollToImage('image11')">RCS</li>
              <li @click="scrollToImage('image12')">서비스 요금</li>
              <li @click="scrollToImage('image13')">톡톡샵 플랫폼</li>
            </ul>
          </li>
          <li @click="toggleSubmenu('procedure')">
            서비스 이용절차
            <span class="arrow">{{ activeSubmenu === 'procedure' ? '▲' : '▼' }}</span>
            <ul v-if="activeSubmenu === 'procedure'" class="submenu">
              <li @click="scrollToImage('image14')">메시지 서비스 이용절차</li>
              <li @click="scrollToImage('image15')">기프티콘 서비스 이용절차</li>
            </ul>
          </li>
        </ul>
      </nav>
    </aside>
    <main class="content">
      <div class="top-bar">
        <img src="@/assets/logo.jpg" alt="Logo" class="logo" />
        <button class="menu-btn" @click="toggleSidebar">☰</button>
      </div>
      <div class="image-container" ref="imageContainer">
        <img ref="image1" :src="getImageSrc('01.jpg', '03.jpg')" alt="Company Image" class="full-image" />
        <img ref="image2" :src="getImageSrc('04.jpg', '04.jpg')" alt="Company Image" class="full-image" />
        <img ref="image3" src="@/assets/images/05.jpg" alt="Company Image" class="full-image" />
        <img ref="image4" src="@/assets/images/06.jpg" alt="Company Image" class="full-image" />
        <img ref="image5" src="@/assets/images/07.jpg" alt="Company Image" class="full-image" />
        <img ref="image6" src="@/assets/images/08.jpg" alt="Company Image" class="full-image" />
        <img ref="image7" src="@/assets/images/09.jpg" alt="Company Image" class="full-image" />
        <img ref="image8" src="@/assets/images/10.jpg" alt="Company Image" class="full-image" />
        <img ref="image9" src="@/assets/images/11.jpg" alt="Company Image" class="full-image" />
        <img ref="image10" src="@/assets/images/12.jpg" alt="Company Image" class="full-image" />
        <img ref="image11" src="@/assets/images/13.jpg" alt="Company Image" class="full-image" />
        <img ref="image12" src="@/assets/images/14.jpg" alt="Company Image" class="full-image" />
        <img ref="image13" src="@/assets/images/15.jpg" alt="Company Image" class="full-image" />
        <img ref="image14" src="@/assets/images/16.jpg" alt="Company Image" class="full-image" />
        <img ref="image15" src="@/assets/images/17.jpg" alt="Company Image" class="full-image" />
        <img ref="image16" src="@/assets/images/18.jpg" alt="Company Image" class="full-image" />
        <img ref="image17" src="@/assets/images/19.jpg" alt="Company Image" class="full-image" />
        <img ref="image18" src="@/assets/images/20.jpg" alt="Company Image" class="full-image" />
        <img ref="image19" src="@/assets/images/21.jpg" alt="Company Image" class="full-image" />
        <img ref="image20" src="@/assets/images/22.jpg" alt="Company Image" class="full-image" />
        <img ref="image21" src="@/assets/images/23.jpg" alt="Company Image" class="full-image" />
        <img ref="image22" src="@/assets/images/24.jpg" alt="Company Image" class="full-image" />
        <img ref="image23" src="@/assets/images/25.jpg" alt="Company Image" class="full-image" />
        <img ref="image24" src="@/assets/images/26.jpg" alt="Company Image" class="full-image" />
        <footer class="footer">
          <div class="footer-left">
            <p>© 2023 바다문자. All rights reserved.</p>
          </div>
          <div class="footer-right">
            <input type="text" placeholder="고객명" />
            <input type="text" placeholder="연락처" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="문의내용"></textarea>
            <button>상담신청하기</button>
          </div>
      </footer>
      </div>      
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: false,
      activeSubmenu: null,
      isMobile: window.innerWidth <= 768,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    toggleSubmenu(menu) {
      this.activeSubmenu = this.activeSubmenu === menu ? null : menu;
    },
    scrollToImage(imageRef) {
      const image = this.$refs[imageRef];
      const container = this.$refs.imageContainer;
      if (image && container) {
        container.scrollTo({
          top: image.offsetTop,
          behavior: 'smooth',
        });
      }
    },
    getImageSrc(mobileImage, desktopImage) {
      const folder = this.isMobile ? 'mobile' : 'images';
      const imageName = this.isMobile ? mobileImage : desktopImage;
      return new URL(`../assets/${folder}/${imageName}`, import.meta.url).href;
    },
    checkMobile() {
      this.isMobile = window.innerWidth <= 768;
    },
  },
  mounted() {
    window.addEventListener('resize', this.checkMobile);
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobile);
  },
};
</script>

<style scoped>
.container {
  display: contents;
  height: 100vh;
}

.sidebar {
  width: 250px;
  background-color: #fff;
  padding: 15px;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100%;
  transition: transform 0.3s ease;
  transform: translateX(0);
  z-index: 1002;
  left: 0;
  top: 0;
}

.sidebar-logo {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.sidebar.open {
  transform: translateX(0);
}

nav ul {
  padding: 0;
  list-style: none;
}

nav ul li {
  margin-bottom: 10px;
  cursor: pointer;
}

.arrow {
  margin-left: 5px;
  font-size: 0.8em;
}

.content {
  margin-left: 250px;
  flex-grow: 1;
  overflow: hidden;
  position: relative;
  height: 100vh;
}

.top-bar {
  display: none;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  background-color: #fff;
  position: fixed;
  width: 100%;
  z-index: 1001;
}

.logo {
  height: 40px;
}

.image-container {
  height: 100%;
  overflow-y: auto;
}

.full-image {
  width: 100%;
  height: 100%;
  display: block;
}

.menu-btn {
  display: none;
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 1001;
}

.close-btn {
  display: none;
  align-self: flex-end;
}

.submenu {
  list-style: none;
}

.footer {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #f4f4f4;
}

.footer-left {
  flex: 1;
}

.footer-right {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.footer-right input,
.footer-right textarea {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.footer-right button {
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

@media (max-width: 768px) {
  .sidebar {
    transform: translateX(-100%);
  }

  .sidebar.open {
    transform: translateX(0);
  }

  .content {
    margin-left: 0;
  }

  .top-bar {
    display: flex;
  }

  .menu-btn {
    display: block;
    position: static;
  }

  .close-btn {
    display: block;
  }

  .image-container {
    padding-top: 60px;
  }

  .footer {
    flex-direction: column;
  }

  .footer-left,
  .footer-right {
    flex: none;
    width: 100%;
  }
}
</style>
