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
          <li @click="scrollToSection('footer')">contact us</li>
        </ul>
      </nav>
    </aside>
    <main class="content">
      <div class="top-bar">
        <img src="@/assets/logo.jpg" alt="Logo" class="logo" />
        <button class="menu-btn" @click="toggleSidebar">☰</button>
      </div>
      <div class="image-container" ref="imageContainer">
        <img ref="main" :src="getImageSrc('main.jpg', 'main.jpg')" alt="Company Image" class="full-image" />
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
        <div id="map" class="map"></div>
        <footer ref="footer" class="footer">
          <div class="footer-left">
            <h1>주식회사 더제이디와이</h1>
            <p>대표이사 김재경</p>
            <p>사업자번호 391-88-03027</p>
            <p>경기도 남양주시 순화궁로 418 11층 27호</p>
            <p>이메일 badasms2@gmail.com</p>
            <p>Copyright©2023.06 All rights reserved.</p>
          </div>
          <div class="divider"></div>
          <div class="footer-right">
            <form @submit.prevent="submitForm">
              <div class="form-row">
                <input type="text" v-model="formData.name" placeholder="고객명" required />
                <input type="text" v-model="formData.contact" placeholder="연락처" required />
              </div>
              <input type="email" v-model="formData.email" placeholder="Email" required />
              <textarea v-model="formData.message" placeholder="문의내용"></textarea>
              <div class="checkbox-container">
                <div class="checkbox-label">
                  <input type="checkbox" v-model="formData.agree" id="agree" required />
                  <label for="agree">개인정보수집 및 활용동의 <a href="#" @click.prevent="showPrivacyPolicy">[전문보기]</a></label>
                </div>
                <button type="submit" class="submit-btn">상담신청하기</button>
              </div>
            </form>
          </div>
        </footer>
      </div>
      <button class="scroll-top" @click="scrollToTop">▲</button>
    </main>
  </div>
</template>

<script>
import L from 'leaflet';

export default {
  data() {
    return {
      isSidebarOpen: false,
      activeSubmenu: null,
      isMobile: window.innerWidth <= 768,
      formData: {
        name: '',
        contact: '',
        email: '',
        message: '',
        agree: false,
      },
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
    scrollToSection(sectionRef) {
      const section = this.$refs[sectionRef];
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
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
    showPrivacyPolicy() {
      alert(`1. 개인정보의 수집 및 이용 목적
고객요청사항 확인 및 답변을 위한 연락통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다.

2. 처리하는 개인정보 항목
- 필수항목 : 이름, 연락처(접속IP, 쿠키, 이용기록, 접속로그)
- 선택항목 : 이메일

3. 개인정보의 처리 및 보유 기간
① 법령에 따른 개인정보 보유.이용기간 또는 정보주체로부터 개인정보를 수집 시에 동의 받은 개인정보 보유, 이용기간 내에서 개인정보를 처리, 보유합니다.
② 개인정보의 보유 기간은 5년입니다.`);
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    submitForm() {
      if (!this.formData.agree) {
        alert('개인정보수집 및 활용동의에 체크해주세요.');
        return;
      }
      // 폼 제출 로직
      alert('상담신청이 완료되었습니다.');
    },
  },
  mounted() {
    window.addEventListener('resize', this.checkMobile);

    // Leaflet 지도 초기화
    const map = L.map('map').setView([37.66334366879749, 127.122806246937], 13);
    map.setMaxBounds([[37, 127], [38, 128]]); // 최대 범위 설정

    L.tileLayer('https://tiles.osm.kr/hot/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap 기여자</a>'
    }).addTo(map);

    // 마커 추가
    L.marker([37.66334366879749, 127.122806246937]).addTo(map)
      .bindPopup('주식회사 더제이디와이')
      .openPopup();
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

.map {
  height: 500px; /* 지도의 높이 설정 */
  width: 100%;
}

.form-row {
  display: flex;
  gap: 10px;
}

.checkbox-container {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.checkbox-label {
  display: flex;
  align-items: center;
}

.checkbox-container input[type="checkbox"] {
  margin-right: 5px;
}

.footer-right input[type="text"],
.footer-right input[type="email"],
.footer-right textarea {
  margin-bottom: 10px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
}

.footer-right button {
  padding: 10px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.scroll-top {
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
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
  padding: 75px 100px;
  background-color: #f4f4f4;
}

.divider {
  width: 1px;
  background-color: #ccc;
  margin: 0 20px;
}

.footer-left {
  flex: 1;
}

.footer-right {
  flex: 1;
  display: flex;
  flex-direction: column;
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
    padding: 30px 20px;
  }

  .divider {
    width: 100%;
    height: 1px;
    background-color: #ccc;
    margin: 20px 0;
  }

  .footer-left,
  .footer-right {
    flex: none;
    width: 100%;
  }
}
</style>

