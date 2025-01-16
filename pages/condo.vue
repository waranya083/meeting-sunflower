<template>
  <div class="page-container">
    <HeaderComponent class="header-section" />
    <div class="banner bg-overlay bg-overlay-400 bg-dark"
      :style="{ backgroundImage: 'url(' + bannerService + ')', height: '60vh', backgroundPosition: 'bottom' }">
      <div class="container h-100 d-flex justify-content-center align-items-center">
        <div class="text-center" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
          <h1 class="text-white">รับออกแบบตกแต่งภายในคอนโด</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center bg-transparent p-0 m-0">
              <li class="breadcrumb-item"><a href="/" class="text-white breadcrumb-link">Home</a></li>
              <li class="breadcrumb-item active text-white" aria-current="page"><a 
                  class="text-white breadcrumb-link">Service</a></li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <div class="content-container">
      <div v-if="services && services.length">
        <div v-for="(service, index) in services" :key="index">
          <div class="d-flex justify-content-center align-items-center about-section">
            <div class="text-left p-3 about-content">
              <div class="about-heading-container">
                <h2 class="fs-14 text-bold mb-2" style="font-size: 1.3rem; font-weight: bold;">
                  <div
                    style="width: 10px; height: 10px; background-color: rgb(249, 204, 56); border-radius: 50%; margin-right: 5px; display: inline-block;">
                  </div>
                  {{ service.title }}
                </h2>
              </div>
              <p class="mb-3 about-text">
                {{ service.short_detail }}
              </p>
              <a href="#" class="btn btn-primary rounded-pill about-btn">Read More</a>
            </div>
            <div class="about-image frame" v-if="service.image && service.image.length">
              <img :src="service.image[0]" alt="Livingroom" class="img-fluid">
            </div>
          </div>
        </div>
      </div>
      <div class="d-flex justify-content-center" style="margin-top: 30px; margin-bottom: 60px;">
        <a href="#" class="btn btn-primary rounded-pill work-btn">ดูผลงาน</a>
      </div>
      <FooterComponent class="footer-section" /> <!-- Ensure this is correctly placed -->
    </div>
    <MessegesComponent />
    <FooterComponent class="footer-section" />
  </div>
</template>

<script>
import HeaderComponent from '~/components/Header.vue';
import FooterComponent from '~/components/Footer.vue';
import MessegesComponent from '~/components/Messeges.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

export default {
  name: 'condo',
  components: {
    HeaderComponent,
    FooterComponent,
    MessegesComponent
  },
  mounted() {
    window.scrollTo(0, 0); // Ensure the page scrolls to the top on reload
  },
  async asyncData({ $axios }) {
    const serviceCategoryId = 114; // กำหนดค่า service_category_id

    try {
      // ดึงข้อมูล services จาก API
      const response = await $axios.get('/service', {
        params: { service_category_id: serviceCategoryId },
      });

      // ดึงข้อมูลเว็บไซต์เพื่อรับข้อมูล banneraboutus
      const websiteResponse = await $axios.get('/website'); // ปรับ URL ให้ตรงกับ API ของคุณ
      const websiteData = websiteResponse.data;
      const bannerService = websiteData.bannerservice || null; // ดึงข้อมูล banneraboutus


      // ตรวจสอบว่า response มีข้อมูลหรือไม่
      const filteredServices = (response.data?.service || []).filter(
        (service) => service.service_category_id === serviceCategoryId
      );

      return {
        services: Array.isArray(filteredServices) ? filteredServices : [],
        bannerService, // ส่ง bannerAboutUs กลับไปด้วย

      };
    } catch (error) {
      console.error('Error fetching services:', error.message || error);

      // กรณีเกิดข้อผิดพลาด ส่งค่า default กลับไป
      return {
        services: [],
        bannerService: null, // ส่ง null ถ้าหากเกิดข้อผิดพลาด
      };
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Athiti:wght@200;300;400;500;600;700&family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap');

body,
h1,
h2,
h3,
p,
a,
span,
button {
  font-family: 'Athiti', sans-serif;
}

.header-section {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 3;
  background: transparent;
}

.footer-section {
  position: relative;
  z-index: 3;
  background: #333;
  /* Ensure the background is not transparent */
  margin-top: auto;
  bottom: 0;
  width: 100%;
  padding: 20px;
  color: white;
}

.banner {
  width: 100%;
  height: 70vh;
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  top: 0;
  z-index: 2;
}

.content-container {
  width: 100%;
  flex: 1;
  margin-top: 80vh;
  /* Reduce the margin-top to move content closer to the banner */
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.frame {
  border-radius: 180px 0px 0px 180px;
  /* ปรับค่านี้เพื่อให้เฉพาะมุมซ้ายบนโค้ง */
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}


.about-image {
  width: 100%;
  height: 300px;
  /* Ensure a fixed height */
  object-fit: cover;
  align-self: flex-start;
}

.about-section {
  display: flex;
  justify-content: start;
  margin-bottom: -10%;
  /* ลบช่องว่างด้านล่างของแต่ละ section */
}

.about-content {
  max-width: 60%;
  /* ควบคุมความกว้างสูงสุด */
  margin-left: 150px;
  padding-right: 30px;
  margin-top: 30px;
}

.about-text {
  font-size: 1.2rem;
  line-height: 1.2;
  margin-top: 20px;
  margin-bottom: 10px;

  /* Reduce margin-bottom to make text closer to button */
}

.breadcrumb {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin: 0;
  background: transparent;
}

.breadcrumb-item {
  list-style: none;
  margin: 0 5px;
  position: relative;
}

.breadcrumb-item a {
  color: white;
  text-decoration: none;
}

.breadcrumb-item::after {
  content: "";
  display: inline-block;
  width: 18px;
  height: 18px;
  background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>') no-repeat center;
  margin-left: 10px;
  position: relative;
  top: 2px; /* Move the triangle down slightly */
}

.breadcrumb-item:last-child::after {
  display: none;
}

.breadcrumb-link {
  font-size: 1.3rem;
}

h1 {
  font-size: 1.5rem;
  font-weight: bold;
}

.breadcrumb-link {
  font-size: 1.3rem;
}

.work-btn {
  /* Increase margin-bottom to create more space from the bottom edge */
  padding: 10px 40px;
  font-size: 1.2rem;
  text-align: center;
  border-radius: 50px;
  background-color: #333;
  color: white;
  border: none;
  transition: background-color 0.3s ease;
  position: relative;
  /* เพื่อให้สามารถวางลูกศรได้ */
  left: 45%;
  transform: translateX(-50%);
}

.work-btn:hover {
  background-color: #555;
}

.work-btn::after {
  content: "\2192";
  /* เพิ่มลูกศร */
  position: absolute;
  right: 20px;
  /* ระยะห่างจากขอบปุ่ม */
  top: 50%;
  transform: translateY(-50%);
  font-size: 1.2rem;
  /* ขนาดลูกศร */
  color: white;
  /* สีลูกศร */
}
</style>
