<template>
  <div class="page-container">
    <HeaderComponent class="header-section" />
    <div class="banner bg-overlay bg-overlay-400 bg-dark"
<<<<<<< HEAD
      style="background-image: url('/banner/aboutbn.png'); height: 60vh; background-position: bottom;">
=======
      :style="{ backgroundImage: 'url(' + bannerAboutUs + ')', height: '50vh', backgroundPosition: 'bottom' }">
>>>>>>> f8cf6f5 (เพิ่ม banner)
      <div class="container h-100 d-flex justify-content-center align-items-center">
        <div class="text-center" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
          <h1 class="text-white">About Us</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center bg-transparent p-0 m-0">
              <li class="breadcrumb-item"><a href="/" class="text-white breadcrumb-link">Home</a></li>
              <li class="breadcrumb-item active text-white" aria-current="page"><a href="/service"
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
              <div style="display: flex; align-items: center; margin-bottom: 10px;">
                <div
                  style="width: 10px; height: 10px; background-color: rgb(249, 204, 56); border-radius: 50%; margin-right: 10px;">
                </div>
                <h2 class="fs-14 text-bold mb-2" style="font-size: 1.3rem; font-weight: bold;">About us</h2>
              </div>
              <p class="mb-3 about-text">
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl
                consectetur et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui.
              </p>
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
                  <p data-v-inspector="pages/about.vue:64:19" style="font-size: 1.2rem; font-weight: 600;">Jackie Sanders</p>
                </div>
                <p data-v-inspector="pages/about.vue:66:19">CEO</p>
              </div>
              <div class="circle-image" data-v-inspector="pages/about.vue:68:17">
                <img src="@/static/picture.png" alt="Image 2" class="img-fluid rounded-circle"
                  data-v-inspector="pages/about.vue:68:44">
                <div class="image-caption" data-v-inspector="pages/about.vue:69:19">
                  <p data-v-inspector="pages/about.vue:70:19"style="font-size: 1.2rem;font-weight: 600;">Cory Zamora</p>
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
                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-orange-200 dark:text-orange-200" stroke-width="2" stroke-dasharray="50 100" stroke-linecap="round"></circle>
                <!-- Gauge Progress -->
                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-orange-600 dark:text-orange-500" stroke-width="2" stroke-dasharray="25 100" stroke-linecap="round"></circle>
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
                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-green-200 dark:text-green-200" stroke-width="2" stroke-dasharray="50 100" stroke-linecap="round"></circle>
                <!-- Gauge Progress -->
                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-green-600 dark:text-green-500" stroke-width="2" stroke-dasharray="25 100" stroke-linecap="round"></circle>
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
                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-blue-200 dark:text-blue-200" stroke-width="2" stroke-dasharray="50 100" stroke-linecap="round"></circle>
                <!-- Gauge Progress -->
                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-blue-600 dark:text-blue-500" stroke-width="2" stroke-dasharray="25 100" stroke-linecap="round"></circle>
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
                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-red-200 dark:text-red-200" stroke-width="2" stroke-dasharray="50 100" stroke-linecap="round"></circle>
                <!-- Gauge Progress -->
                <circle cx="18" cy="18" r="16" fill="none" class="stroke-current text-red-600 dark:text-red-500" stroke-width="2" stroke-dasharray="25 100" stroke-linecap="round"></circle>
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
    <FooterComponent class="footer-section" />
  </div>
</template>


<script>
import HeaderComponent from '~/components/Header.vue';
import FooterComponent from '~/components/Footer.vue';

export default {
  name: 'about',
  components: {
    HeaderComponent,
    FooterComponent
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
<<<<<<< HEAD

    // Set progress bar values
    const progressBars = document.querySelectorAll('.progressbar');
    progressBars.forEach(bar => {
      const value = bar.getAttribute('data-value');
      bar.style.setProperty('--percentage', value);
    });
=======
  },
  async asyncData({ $axios }) {

    try {
      const websiteResponse = await $axios.get('/website'); // ปรับ URL ให้ตรงกับ API ของคุณ
      const websiteData = websiteResponse.data;
      const bannerAboutUs = websiteData.banneraboutus || null; // ดึงข้อมูล banneraboutus

      return {
        bannerAboutUs, // ส่ง bannerAboutUs กลับไปด้วย
      };
    } catch (error) {
      console.error('Error fetching data:', error.message || error);

      // กรณีเกิดข้อผิดพลาด ส่งค่า default กลับไป
      return {
        bannerAboutUs: null, // ส่ง null ถ้าหากเกิดข้อผิดพลาด
      };
    }
>>>>>>> f8cf6f5 (เพิ่ม banner)
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
  z-index: 3;
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
  height: 70vh;
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

  flex: 1;
  /* Ensure content container takes available space */
  margin-top: 55vh;
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
  z-index: 3;
  background: #333;
  /* Set background color */
  margin-top: auto;
  bottom: 0;
  width: 100%;
  padding: 20px;
  color: white;
}

.about-section {
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  /* Adjusted margin-top to move the section up */
  /* Move the "About us" section down slightly */
}


.about-image {
  flex: 1;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  overflow-x: auto;
  /* Allow horizontal scrolling */
  overflow-y: hidden;
  /* Prevent vertical scrolling */
  -webkit-overflow-scrolling: touch;
  /* Enable smooth scrolling on touch devices */
  scrollbar-width: none;
  /* Hide scrollbar in Firefox */
  -ms-overflow-style: none;
  /* Hide scrollbar in IE and Edge */
  white-space: nowrap;
  /* Ensure images are in a single line */
  cursor: pointer;
  /* Change cursor to pointer */
  scroll-behavior: smooth;
  /* Add smooth scrolling behavior */
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
  padding: 60px 0;
  width: 100%;
}

.about-section {
  border-radius: 8px;
  padding: 20px;
}



.about-text {
  color: #414042;
  font-size: 1.2rem;
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
  margin-left: 20px;
  flex: 1;
  max-width: 50%;
}

.circle-image {
  text-align: center;
  margin-bottom: 10px;
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Center align the images and captions */
}

.circle-image img {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  /* Ensure the image is circular */
}

.image-caption {
  margin-top: 5px;
  color: #666;
  font-size: 14px;
}
.image-caption p {
  color: black;
}
.container-fluid .mission-section {
  max-width: 100%;

}

.mission-section {
  display: flex;
  flex-wrap: wrap;
  /* Move the "Our Mission" section down slightly */
  background-color: #F5F5F5;
  /* Change background color */
  width: 100vw;
  /* Full viewport width */
  justify-content: space-between;
  position: relative;
  /* Ensure it stays within the container */
  left: 50%;
  /* Adjust positioning */
  transform: translateX(-50%);
  /* Center the section */
}

.full-width-section {
  width: 100vw;
  /* Full viewport width */
  background-color: #F5F5F5;
  /* Background color */
  position: relative;
  /* Ensure it stays within the container */
  left: 50%;
  /* Adjust positioning */
  transform: translateX(-50%);
  /* Center the section */
}


.yellow-dot {
  width: 10px;
  height: 10px;
  background-color: yellow;
  border-radius: 50%;
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
  content: ">";
  /* ลูกศรสามเหลี่ยม */
  color: white;
  margin-left: 5px;
  font-size: large;
}

.breadcrumb-item:last-child::after {
  content: "";
  /* ไม่มีลูกศรในรายการสุดท้าย */
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

</style>
