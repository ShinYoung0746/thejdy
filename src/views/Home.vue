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
              <!-- <li @click="scrollToImage('image2')">목차</li> -->
              <li @click="scrollToImage('image3')">주요 연혁</li>
              <li @click="scrollToImage('image1')">조직도</li>
            </ul>
          </li>
          <li @click="toggleSubmenu('service')">
            서비스 소개
            <span class="arrow">{{ activeSubmenu === 'service' ? '▲' : '▼' }}</span>
            <ul v-if="activeSubmenu === 'service'" class="submenu">
              <li @click="scrollToImage('image4')">통합 메시지 서비스</li>
              <li @click="scrollToImage('image5')">통합 메시징 시스템 솔루션 임대</li>
              <li @click="scrollToImage('image7')">카카오 알림톡</li>
              <li @click="scrollToImage('image8')">RCS</li>
              <li @click="scrollToImage('image9')">기프티콘</li>
            </ul>
          </li>
          <!-- <li @click="toggleSubmenu('method')">
            서비스 방식
            <span class="arrow">{{ activeSubmenu === 'method' ? '▲' : '▼' }}</span>
            <ul v-if="activeSubmenu === 'method'" class="submenu">
              <li @click="scrollToImage('image10')">바다문자 플랫폼</li>
              <li @click="scrollToImage('image11')">알림톡</li>
              <li @click="scrollToImage('image12')">RCS</li>
              <li @click="scrollToImage('image18')">서비스 요금</li>
              <li @click="scrollToImage('image19')">톡톡샵 플랫폼</li>
            </ul>
          </li>
          <li @click="toggleSubmenu('procedure')">
            서비스 이용절차
            <span class="arrow">{{ activeSubmenu === 'procedure' ? '▲' : '▼' }}</span>
            <ul v-if="activeSubmenu === 'procedure'" class="submenu">
              <li @click="scrollToImage('image22')">메시지 서비스 이용절차</li>
              <li @click="scrollToImage('image23')">기프티콘 서비스 이용절차</li>
            </ul>
          </li> -->
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
        <img ref="main" :src="getImageSrc('mobile_01.jpg', 'main.jpg')" alt="Company Image" class="full-image" />
        <!-- <img ref="image2" :src="getImageSrc('mobile_02.jpg', '02.jpg')" alt="Company Image" class="full-image" /> -->
        <img ref="image3" :src="getImageSrc('mobile_03.jpg', '04.jpg')" alt="Company Image" class="full-image" />
        <img ref="image1" :src="getImageSrc('mobile_04.jpg', '05.jpg')" alt="Company Image" class="full-image" />
        <img ref="image4" :src="getImageSrc('mobile_05.jpg', '06.jpg')" alt="Company Image" class="full-image" />
        <img ref="image5" :src="getImageSrc('mobile_06.jpg', '07.jpg')" alt="Company Image" class="full-image" />
        <img ref="image6" :src="getImageSrc('mobile_07.jpg', '08.jpg')" alt="Company Image" class="full-image" />
        <img ref="image7" :src="getImageSrc('mobile_08.jpg', '09.jpg')" alt="Company Image" class="full-image" />
        <img ref="image8" :src="getImageSrc('mobile_09.jpg', '10.jpg')" alt="Company Image" class="full-image" />
        <img ref="image9" :src="getImageSrc('mobile_10.jpg', '11.jpg')" alt="Company Image" class="full-image" />
        <!-- <img ref="image10" :src="getImageSrc('mobile_11.jpg', '12.jpg')" alt="Company Image" class="full-image" />
        <img ref="image11" :src="getImageSrc('mobile_12.jpg', '13.jpg')" alt="Company Image" class="full-image" /> 
        <img ref="image12" :src="getImageSrc('mobile_13.jpg', '14.jpg')" alt="Company Image" class="full-image" />
        <img ref="image13" :src="getImageSrc('mobile_14.jpg', '15.jpg')" alt="Company Image" class="full-image" />  
        <img ref="image14" :src="getImageSrc('mobile_15.jpg', '16.jpg')" alt="Company Image" class="full-image" />
        <img ref="image15" :src="getImageSrc('mobile_16.jpg', '17.jpg')" alt="Company Image" class="full-image" /> 
        <img ref="image16" :src="getImageSrc('mobile_17.jpg', '18.jpg')" alt="Company Image" class="full-image" />
        <img ref="image17" :src="getImageSrc('mobile_18.jpg', '19.jpg')" alt="Company Image" class="full-image" /> 
        <img ref="image18" :src="getImageSrc('mobile_19.jpg', '20.jpg')" alt="Company Image" class="full-image" />
        <img ref="image19" :src="getImageSrc('mobile_20.jpg', '21.jpg')" alt="Company Image" class="full-image" /> 
        <img ref="image20" :src="getImageSrc('mobile_21.jpg', '22.jpg')" alt="Company Image" class="full-image" /> 
        <img ref="image21" :src="getImageSrc('mobile_22.jpg', '23.jpg')" alt="Company Image" class="full-image" /> 
        <img ref="image22" :src="getImageSrc('mobile_23.jpg', '24.jpg')" alt="Company Image" class="full-image" />
        <img ref="image23" :src="getImageSrc('mobile_24.jpg', '25.jpg')" alt="Company Image" class="full-image" />  -->
        <div id="map" class="map"></div>
        <footer ref="footer" class="footer">
          <div class="footer-left">
            <h1>주식회사 더제이디와이</h1>
            <p>대표이사 : 김재경</p>
            <p>사업자번호 : 391-88-03027</p>
            <p>주소 : 경기도 남양주시 순화궁로 418 11층 27호</p>
            <p>이메일 : badasms2@gmail.com</p>
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
      <button class="scroll-top" @click="scrollToMainImage">▲</button>
    </main>
  </div>
</template>

<script>
import { db, collection, addDoc, serverTimestamp } from "@/firebase";

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
    scrollToMainImage() {
      const mainImage = this.$refs.main;
      if (mainImage) {
        mainImage.scrollIntoView({ behavior: 'smooth' });
      }
    },
    async submitForm() {
      if (!this.formData.agree) {
        alert('개인정보수집 및 활용동의에 체크해주세요.');
        return;
      }

      try {
        await addDoc(collection(db, "contacts"), {
          name: this.formData.name,
          contact: this.formData.contact,
          email: this.formData.email,
          message: this.formData.message,
          timestamp: serverTimestamp()
        });
        alert('상담신청이 완료되었습니다.');
        this.formData = { name: '', contact: '', email: '', message: '', agree: false };
      } catch (e) {
        console.error("Error adding document: ", e);
        alert('오류가 발생했습니다. 다시 시도해주세요.');
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.checkMobile);

    // Kakao 지도 초기화
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
        mapOption = { 
            center: new kakao.maps.LatLng(37.66334366879749, 127.122806246937), // 지도의 중심좌표
            level: 3 // 지도의 확대 레벨
        };

    var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

    // 마커가 표시될 위치입니다 
    var markerPosition  = new kakao.maps.LatLng(37.66334366879749, 127.122806246937); 

    // 마커를 생성합니다
    var marker = new kakao.maps.Marker({
        position: markerPosition
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);

    // 인포윈도우를 생성합니다
    var infowindow = new kakao.maps.InfoWindow({
        content: '<div style="padding:5px;">주식회사 더제이디와이</div>' // 인포윈도우에 표시할 내용
    });

    // 마커에 클릭이벤트를 등록합니다
    kakao.maps.event.addListener(marker, 'click', function() {
        // 마커 위에 인포윈도우를 표시합니다
        infowindow.open(map, marker);  
    });
  },
  beforeUnmount() {
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
  height: 550px; /* 지도의 높이 설정 */
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
  right: 50%;
  transform: translateX(50%);
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  z-index: 1000;
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

