<template>
  <div class="page-container">
    <HeaderComponent class="header-section" />
    <div class="banner bg-overlay bg-overlay-400 bg-dark"
      style="background-image:url('/banner/servicebn.png'); height: 60vh; background-position: bottom;">
      <div class="container h-100 d-flex justify-content-center align-items-center">
        <div class="text-center banner-text">
          <h1 class="text-white banner-title">รับออกแบบตกแต่งภายในบ้าน</h1>
          <nav aria-label="breadcrumb">
            <ol class="breadcrumb justify-content-center bg-transparent p-0 m-0">
              <li class="breadcrumb-item"><a href="/" class="text-white breadcrumb-link">Home</a></li>
              <li class="breadcrumb-item active text-white" aria-current="page"><a href="/service"
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
                <h2 class="fs-14 text-bold mb-2" style="font-size: 1.4rem; font-weight: bold;">
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
    </div>
    <div class="d-flex justify-content-center" style="margin-top: 30px; margin-bottom: 60px;">
      <a href="#" class="btn btn-primary rounded-pill work-btn">ดูผลงาน</a>
    </div>
    <FooterComponent class="footer-section" /> <!-- Ensure this is correctly placed -->
  </div>
</template>

<script>
import HeaderComponent from '~/components/Header.vue';
import FooterComponent from '~/components/Footer.vue';

export default {
  name: 'home',
  components: {
    HeaderComponent,
    FooterComponent
  },
  mounted() {
    window.scrollTo(0, 0); // Ensure the page scrolls to the top on reload
  },
  data() {
    return {
      serviceCategories: [],
      services: [],
    };
  },
  async asyncData({ $axios }) {
    const serviceCategoryId = 113; // กำหนดค่า service_category_id

    try {
      const response = await $axios.get('/service', {
        params: { service_category_id: serviceCategoryId },
      });

      const filteredServices = response.data.service.filter(service => service.service_category_id === serviceCategoryId);

      return {
        services: Array.isArray(filteredServices) ? filteredServices : [],
      };
    } catch (error) {
      console.error('Error fetching services:', error);
      return {
        services: [],
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
  background-image: url('/banner/servicebn.png');
}

.banner-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.banner-title {
  font-size: 1.5rem;
  font-weight: bold;
}

.breadcrumb-link {
  font-size: 1.3rem;
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

.about-image img {
  width: 100%;
  height: auto;
  max-width: 300px; /* Set a maximum width for the image */
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
  text-align: left; /* Align text to the left */
}

.about-text {
  font-size: 1.2rem;
  line-height: 1.2;
  margin-top: 20px;
  margin-bottom: 10px;

  /* Reduce margin-bottom to make text closer to button */
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
  left: 50%;
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

@media (min-width: 769px) {
  .about-image img {
    max-width: none; /* Remove the maximum width for larger screens */
  }
}

@media (max-width: 768px) {
  .banner {
    height: 40vh;
  }

  .banner-title {
    font-size: 1.2rem;
  }

  .about-section {
    flex-direction: column;
    margin-bottom: 20px;
  }

  .about-content {
    max-width: 100%;
    margin-left: 0;
    padding-right: 0;
    text-align: left; /* Align text to the left */
  }

  .about-image {
    width: 100%;
    height: auto;
    margin-top: 20px;
  }

  .about-image img {
    max-width: 200px; /* Adjust the maximum width for smaller screens */
  }

  .work-btn {
    width: 80%;
    padding: 10px 20px;
  }
}

@media (max-width: 576px) {
  .banner {
    height: 30vh;
  }

  .banner-title {
    font-size: 1rem;
  }

  .breadcrumb-link {
    font-size: 1rem;
  }

  .about-text {
    font-size: 1rem;
  }

  .about-image img {
    max-width: 150px; /* Adjust the maximum width for even smaller screens */
  }

  .work-btn {
    width: 100%;
    padding: 10px 10px;
  }
}
</style>
