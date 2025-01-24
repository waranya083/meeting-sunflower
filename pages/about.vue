<template>
  <div class="page-container">
    <HeaderComponent class="header-section" />
    <div class="banner bg-overlay bg-overlay-400 bg-dark"
      :style="{ backgroundImage: 'url(' + bannerAboutUs + ')', height: '60vh', backgroundPosition: 'bottom' }">
      <div class="container h-100 d-flex justify-content-center align-items-center">
        <div class="text-center" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
          <h1 class="text-white">About Us</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center bg-transparent p-0 m-0">
              <li class="breadcrumb-item"><a href="/" class="text-white breadcrumb-link">Home</a></li>
              <li class="breadcrumb-item active text-white" aria-current="page"><a
                  class="text-white breadcrumb-link">About Us</a></li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <div class="content-container">
      <section class="section-spacing">
        <div class="container-fluid">
          <div class="d-flex justify-content-start align-items-center about-section">
            <div class="text-left p-3 about-content">
              <div style="display: flex; align-items: center; ">
                <div
                  style="width: 10px; height: 10px; background-color: rgb(249, 204, 56); border-radius: 50%; margin-right: 10px;">
                </div>
                <h2 class="fs-14 text-bold mb-2" style="font-size: 1.3rem; font-weight: bold;">About us</h2>
              </div>
              <div v-if="websiteData && websiteData.short_about_us">
                <p class="mb-3 about-text">{{ websiteData.short_about_us.replace(/<\/?p>/g, '') }}</p>
              </div>
              <div class="about-image">
                <img src="@/static/picture.png" alt="About Us Image" class="img-fluid rounded">
                <img src="@/static/picture.png" alt="About Us Image" class="img-fluid rounded">
                <img src="@/static/picture.png" alt="About Us Image" class="img-fluid rounded">
                <img src="@/static/picture.png" alt="About Us Image" class="img-fluid rounded">
                <img src="@/static/picture.png" alt="About Us Image" class="img-fluid rounded">
              </div>
              <p class="mb-3 about-text">
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="full-width-section section-spacing">
        <div class="container-fluid">
          <div class="d-flex align-items-center mission-section">
            <div class="text-left p-3 mission-content">
              <div style="display: flex; align-items: center; ">
                <div
                  style="width: 10px; height: 10px; background-color: rgb(249, 204, 56); border-radius: 50%; margin-right: 10px;">
                </div>
                <h2 class="fs-14 text-bold mb-2" style="font-size: 1.3rem; font-weight: bold;">Meet the Team</h2>
              </div>
              <p class=" mb-3 about-text">
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui.
              </p>
            </div>
            <div class="mission-images">
              <div class="circle-image" data-v-inspector="pages/about.vue:62:17">
                <img src="@/static/picture.png" alt="Image 1" class="img-fluid rounded-circle"
                  data-v-inspector="pages/about.vue:62:44">
                <div class="image-caption" data-v-inspector="pages/about.vue:63:19">
                  <p data-v-inspector="pages/about.vue:64:19" style="font-size: 1.2rem; font-weight: 600;">Jackie
                    Sanders</p>
                </div>
                <p data-v-inspector="pages/about.vue:66:19">CEO</p>
              </div>
              <div class="circle-image" data-v-inspector="pages/about.vue:68:17">
                <img src="@/static/picture.png" alt="Image 2" class="img-fluid rounded-circle"
                  data-v-inspector="pages/about.vue:68:44">
                <div class="image-caption" data-v-inspector="pages/about.vue:69:19">
                  <p data-v-inspector="pages/about.vue:70:19" style="font-size: 1.2rem;font-weight: 600;">Cory Zamora
                  </p>
                </div>
                <p data-v-inspector="pages/about.vue:72:19">Marketing Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="section-spacing">
        <div class="container-fluid">
          <div class="d-flex align-items-center Company-section">
            <div class="text-left p-3 Company-content">
              <div style="display: flex; align-items: center; margin-bottom: 10px;">
                <div
                  style="width: 10px; height: 10px; background-color: rgb(249, 204, 56); border-radius: 50%; margin-right: 10px;">
                </div>
                <h2 class="fs-14 text-bold mb-2" style="font-size: 1.3rem; font-weight: bold;">Company Facts</h2>
              </div>
              <p class="mb-3 about-text"> Cum sociis natoque penatibus et magnis dis parturient montes, nascetur
                ridiculus mus. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus
                magna, vel scelerisque nisl consectetur et. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Donec sed odio dui.</p>
            </div>
          </div>
          <div class="progressbar-container">
            <!-- Gauge Component 1 -->
            <div class="relative size-40">
              <svg class="size-half rotate-180" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <!-- Background Circle (Gauge) -->
                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-orange-200 dark:text-orange-200"
                  stroke-width="2" stroke-dasharray="50 100" stroke-linecap="round"></circle>
                <!-- Gauge Progress -->
                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-orange-600 dark:text-orange-500"
                  stroke-width="2" stroke-dasharray="25 100" stroke-linecap="round"></circle>
              </svg>
              <!-- Value Text -->
              <div class="absolute top-10 start-1/2 transform -translate-x-1/2 text-center" style="width: 150px;">
                <span class="text-4xl font-bold text-orange-600 dark:text-orange-500">50%</span>
                <p class="text-l text-orange-600 dark:text-orange-500 block mt-1">New Visitors</p>
                <p class="text-center mt-1">This is the average score.</p>
              </div>
            </div>
            <!-- End Gauge Component 1 -->

            <!-- Gauge Component 2 -->
            <div class="relative size-40">
              <svg class="size-full rotate-180" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <!-- Background Circle (Gauge) -->
                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-green-200 dark:text-green-200"
                  stroke-width="2" stroke-dasharray="50 100" stroke-linecap="round"></circle>
                <!-- Gauge Progress -->
                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-green-600 dark:text-green-500"
                  stroke-width="2" stroke-dasharray="25 100" stroke-linecap="round"></circle>
              </svg>
              <!-- Value Text -->
              <div class="absolute top-10 start-1/2 transform -translate-x-1/2 text-center" style="width: 150px;">
                <span class="text-4xl font-bold text-green-600 dark:text-green-500">75%</span>
                <p class="text-l text-green-600 dark:text-green-500 block mt-1">New Visitors</p>
                <p class="text-center mt-1">This is the average score.</p>
              </div>
            </div>
            <!-- End Gauge Component 2 -->

            <!-- Gauge Component 3 -->
            <div class="relative size-40">
              <svg class="size-full rotate-180" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <!-- Background Circle (Gauge) -->
                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-blue-200 dark:text-blue-200"
                  stroke-width="2" stroke-dasharray="50 100" stroke-linecap="round"></circle>
                <!-- Gauge Progress -->
                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-blue-600 dark:text-blue-500"
                  stroke-width="2" stroke-dasharray="25 100" stroke-linecap="round"></circle>
              </svg>
              <!-- Value Text -->
              <div class="absolute top-10 start-1/2 transform -translate-x-1/2 text-center" style="width: 150px;">
                <span class="text-4xl font-bold text-blue-600 dark:text-blue-500">60%</span>
                <p class="text-l text-blue-600 dark:text-blue-500 block mt-1">New Visitors</p>
                <p class="text-center mt-1">This is the average score.</p>
              </div>
            </div>
            <!-- End Gauge Component 3 -->

            <!-- Gauge Component 4 -->
            <div class="relative size-40">
              <svg class="size-full rotate-180" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                <!-- Background Circle (Gauge) -->
                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-red-200 dark:text-red-200"
                  stroke-width="2" stroke-dasharray="50 100" stroke-linecap="round"></circle>
                <!-- Gauge Progress -->
                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-red-600 dark:text-red-500"
                  stroke-width="2" stroke-dasharray="25 100" stroke-linecap="round"></circle>
              </svg>
              <!-- Value Text -->
              <div class="absolute top-10 start-1/2 transform -translate-x-1/2 text-center" style="width: 150px;">
                <span class="text-4xl font-bold text-red-600 dark:text-red-500">80%</span>
                <p class="text-l text-red-600 dark:text-red-500 block mt-1">New Visitors</p>
                <p class="text-center mt-1">This is the average score.</p>
              </div>
            </div>
            <!-- End Gauge Component 4 -->
          </div>
        </div>
      </section>
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
  name: 'about',
  components: {
    HeaderComponent,
    FooterComponent,
    MessegesComponent
  },
  mounted() {
    const slider = document.querySelector('.about-image');
    const images = slider.querySelectorAll('img');

    images.forEach((image) => {
      image.addEventListener('click', (e) => {
        images.forEach((img) => img.classList.remove('selected'));
        e.target.classList.add('selected');
        slider.scrollTo({
          left: e.target.offsetLeft - slider.offsetLeft - (slider.clientWidth - e.target.clientWidth) / 2,
          behavior: 'smooth'
        });
      });
    });
  },
  async asyncData({ $axios }) {

    try {
      const websiteResponse = await $axios.get('/website'); // ปรับ URL ให้ตรงกับ API ของคุณ
      const websiteData = websiteResponse.data;
      const bannerAboutUs = websiteData.banneraboutus || null; // ดึงข้อมูล banneraboutus

      return {
        bannerAboutUs, // ส่ง bannerAboutUs กลับไปด้วย
        websiteData: websiteData || {}, // เก็บข้อมูล websiteData เพิ่มเติม
      };
    } catch (error) {
      console.error('Error fetching data:', error.message || error);

      // กรณีเกิดข้อผิดพลาด ส่งค่า default กลับไป
      return {
        bannerAboutUs: null, // ส่ง null ถ้าหากเกิดข้อผิดพลาด
        websiteData: {}, // กรณีเกิด error คืนค่า object ว่าง
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
  /* Ensure the same font is used throughout the website */
}

.header-section {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 3;
  background: transparent;
  /* Remove background */
}

.footer-section {
  position: relative;
  z-index: 1008;
  background: transparent;
  /* ตั้งให้โปร่งใส */
  margin-top: auto;
  /* ให้ footer อยู่ล่างสุดของ container */
  bottom: 0;
  width: 100%;
  padding: 20px;
  /* Add padding to ensure visibility */
  color: white;
  /* Ensure text is visible */
}

.banner {
  width: 100%;
  height: 40vh;
  /* Adjust height to make the banner taller */
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute;
  /* Change to absolute */
  top: 0;
  /* Position at the top */
  z-index: 2;
  /* Ensure it is behind the header */
}

.content-container {
  width: 100%;
  padding: 20px;
  /* Add padding to ensure content is not hidden */
  flex: 1;
  /* Ensure content container takes available space */
  margin-top: 50vh;
  /* Add margin to push content below the banner */
  overflow-x: hidden;
  /* Prevent horizontal scrolling */
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Adjust alignment */
  flex-direction: column;
  /* Adjust height to ensure content is visible */
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow-x: hidden;
  /* Prevent horizontal scrolling */
}

.footer-section {
  position: relative;
  /* Changed from absolute */
  z-index: 1;
  background: #333;
  /* Set background color */
  margin-top: auto;
  bottom: 0;
  width: 100%;
  color: white;
}

.about-section {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}

.about-image {
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
  -ms-overflow-style: none;
  white-space: nowrap;
  cursor: pointer;
  scroll-behavior: smooth;
}

.about-image img {
  display: inline-block;
  /* Ensure images are inline */
  max-width: 48%;
  height: auto;
  margin-right: 10px;
  /* Add margin between images */
  border-radius: 5px;
  /* Add border radius to images */
  transition: transform 0.2s ease-in-out;
  /* Add easing for smoother transition */
}

.about-image img:hover {
  transform: scale(1.02);
  /* Scale up image on hover */
}

.container-fluid {
  max-width: 1200px;
  margin: 0 auto;
  /* Center the container */
}

.section-spacing {
  padding: 30px 0;
  width: 100%;
}

.about-section {
  border-radius: 8px;

}

.about-text {
  color: #414042;
  font-size: 1.2rem !important;
}

.mission-content {
  flex: 1;
  max-width: 100%;
  width: 100%;
  /* Add this line to make it full-width */
}

.mission-images {
  display: flex;
  flex-wrap: wrap;
  flex: 1;
  max-width: 50%;
}

.circle-image {
  text-align: center;
  margin-bottom: 0px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* Center the images vertically */
}

.circle-image img {
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
  /* Ensure the image is circular */
}

.image-caption {
  color: #414042;
  font-size: 1.2rem;
  margin-top: 10px;
  width: 300px; /* Adjust the width as needed */
  text-align: center; /* Center the text */
}

.image-caption p {
  color: #414042;
}

.container-fluid .mission-section {
  max-width: 100%;

}

.mission-section {
  display: flex;
  flex-wrap: wrap;
  background-color: #F5F5F5;
  width: 100vw;
  justify-content: space-between;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.full-width-section {
  width: 100vw;
  background-color: #F5F5F5;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
}

.about-heading {
  font-weight: bold;
  color: #333;
}

.about-text {
  color: #666;
}

.breadcrumb {
  display: flex;
  align-items: center;
  justify-content: center;
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
  top: 2px;
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

.progressbar-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
  margin-top: 20px;
}

.progressbar {
  position: relative;
  width: 100px;
  height: 100px;
  margin: 20px;
  text-align: center;
}

/* xl Desktop */
@media (min-width: 1200px) {
  .fs-14 {
    font-size: 2.2rem;
  }

  .about-text {
    font-size: 2rem;
  }

  .progressbar {
    width: 200px;
    height: 200px;
  }
}

/* lg tablet horizon */
@media (min-width: 992px) and (max-width: 1199px) {
  .about-section {
    margin-top: 10vh !important;
    margin-bottom: -25vh !important;
  }

  .fs-14 {
    font-size: 1.6rem !important;
    /* Increase font size for medium screens and add !important */
  }

  .about-text {
    font-size: 1.4rem !important;
  }

  .mission-section {
    flex-direction: column;
    align-items: center;
    /* Center the mission section */
  }

  .mission-images {
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-wrap: nowrap;
    /* Prevent wrapping to the next line */
    order: 2;
    width: 100%;
    margin-top: 20px;
    gap: 20%;
    /* Add spacing between the circle images */
  }

  .mission-content {
    order: 1;
    width: 100%;
    padding: 60px;
    margin-right: -10px;
    text-align: left;
    /* Keep the text alignment to the left */
  }

  .progressbar-container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    justify-content: center;
    margin-left: 10%;
  }

  .progressbar {
    width: 300px !important;
    /* Increase the width */
    height: 0px !important;
    /* Increase the height */
    text-align: center;
  }
  .relative {
    width: 250px;
    height: 250px;
  }
  .text-center {
    font-size: 1.5rem;
    margin-top: 10px;
  }
  .Company-content {
    padding: 50px;
  }
}

/* md tablet */
@media (min-width: 768px) and (max-width: 991px) {
  .fs-14 {
    font-size: 1.4rem !important;
  }
  .progressbar {
    width: 100px ;
    height: 100px ;
  }
  .mission-section {
    flex-direction: column;

  }
  .circle-image img {
    flex-direction: row;
    width: 150px;
    height: 150px;
    gap: 20px;
  }
  .circle-image {
    align-items: center;
    margin-left: 0px;
  }
  .mission-images {
    flex-direction: row;
    align-items: center;
    order: 2;
    width: 100%;
    margin-top: 20px;
    margin-left: 200px;
  }
  .about-text {
    font-size: 1.2rem !important;
  }
  .about-section {
    margin-top: -40px;
    margin-bottom: -120px !important;
    padding: 20px !important;
  }
  .relative {
    margin-left: 0px;
    width: 150px;
    height: 150px;
  }

}
/* sm phone */
@media (max-width: 768px) {
  .fs-14 {
    font-size: 1.2rem !important;
  }

  .mission-section {
    flex-direction: column;
    margin-left: 20px;
  }
  .mission-images {
    flex-direction: column;
    align-items: center;
    order: 2;
    width: 100%;
    margin-top: 20px;
    margin-left: 80px;
  }
  .circle-image img {
    flex-direction: row;
    width: 200px;
    height: 170px;
    object-fit: cover;
    border-radius: 50%;
  }
  .circle-image {
    align-items: center;
    margin-left: 0px;
    margin-bottom: 20px;
    width: 100%;
  }
  .image-caption ,p{
    font-size: 1rem;
    margin-top: 0px;
  }

  .about-text {
    font-size: 1.1rem !important;
  }

  .about-section {
    margin-top: 60px;
    margin-bottom: -120px;
    margin-left: -10px;
    margin-right: -10px;
  }

  .about-image img {
    max-width: 90%;
    height: auto;
  }
  .relative {
    width: 150px;
    height: 150px;
  }
}

/* xs phone */
@media (max-width: 575px) {
  .fs-14 {
    font-size: 1.2rem !important;
  }

  .mission-images {
    flex-direction: column;
    align-items: center;
    order: 2;
    width: 100%;
    margin-top: 20px;
    margin-left: 60px;
  }
  .circle-image img {
    flex-direction: row;
    width: 200px;
    height: 170px;
    object-fit: cover;
    border-radius: 50%;
  }
  .circle-image {
    align-items: center;
    margin-left: 0px;
    margin-bottom: 20px;
    width: 100%;
  }
  .image-caption ,p{
    font-size: 1rem;
    margin-top: 0px;
  }

  .about-text {
    font-size: 1.1rem !important;
  }

  .about-section {
    margin-top: 40px;
    margin-bottom: -140px !important;
    margin-left: -10px;
    margin-right: -10px;
  }

  .about-image img {
    max-width: 90%;
    height: auto;
  }
  .relative {
    width: 150px;
    height: 150px;
  }
}
</style>
