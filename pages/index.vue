<template>
  <div>
    <HeaderComponent class="header-section" />
    <!-- Simplified banner content -->
    <section class="section-spacing carousel-section">
      <carousel :per-page="1" :navigate-to="0" :mouse-drag="true">
        <slide v-for="(slide, index) in slides" :key="index">
          <div class="slide-content">
            <img :src="require(`@/static/${slide.image}`)" :alt="slide.title" class="slide-image">
            <div class="slide-overlay">
              <h3>Sunflower House</h3>
              <span>
                Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio,
                dapibus ac facilisis in, egestas eget quam.
              </span>
              <button @click="handleButtonClick(slide.title)" class="shop-now-btn">Shop Now</button>
            </div>
          </div>
        </slide>
      </carousel>
    </section>

    <!-- End of simplified banner content -->
    <section class="section-spacing">
      <div class="container-fluid">
        <div class="d-flex justify-content-start align-items-center about-section">
          <div class="text-left p-3 about-content">
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
              <div
                style="width: 10px; height: 10px; background-color: rgb(249, 204, 56); border-radius: 50%; margin-right: 5px;">
              </div>
              <h2 class="fs-14 text-bold mb-2" style="font-size: 1.3rem; font-weight: bold;">About Us</h2>
            </div>
            <p class="mb-3 about-text">
              Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl
              consectetur et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed odio dui.
            </p>
            <a href="#" class="btn btn-primary rounded-pill about-btn">Read More</a>
          </div>
        </div>
      </div>
    </section>
    <!-- New section -->
    <section class="section-spacing">
      <div class="container-fluid">
        <div class="d-flex justify-content-start align-items-center"
          style="min-height: 90vh; padding: 0; margin-top: -300px;">
          <div class="text-left p-3" style="max-width: 1200px; font-size: 1.1rem; margin: auto; padding-bottom: 120px;">
            <div style="display: flex; align-items: center; margin-bottom: 10px;">
              <div
                style="width: 10px; height: 10px; background-color: rgb(249, 204, 56); border-radius: 50%; margin-right: 5px;">
              </div>
              <h2 class="text-bold mb-2 about-heading">Imagine Interior</h2>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div class="grid-item" style="position: relative;">
                  <img src="@/static/Imagine Interior/Modern.png" alt="Modern" class="zoom-effect"
                    style="width: 100%; height: 450px; object-fit: cover; border-radius: 10px;">
                  <p style="font-size: 1rem; position: absolute; top: 10px; left: 10px; color: white;">Modern</p>
                  <a href="#" class="arrow-icon"><i class="fas fa-arrow-right"></i></a>
                </div>
                <div class="grid-item" style="position: relative;">
                  <img src="@/static/Imagine Interior/Modern Classic.png" alt="Modern Classic" class="zoom-effect"
                    style="width: 100%; height: 450px; object-fit: cover; border-radius: 10px;">
                  <p style="font-size: 1rem; position: absolute; top: 10px; left: 10px; color: white;">Modern Classic
                  </p>
                  <a href="#" class="arrow-icon"><i class="fas fa-arrow-right"></i></a>
                </div>
              </div>
              <div style="display: grid; gap: 20px;">
                <div class="grid-item" style="position: relative;">
                  <img src="@/static/Imagine Interior/Modern Luxury.png" alt="Modern Luxury" class="zoom-effect"
                    style="width: 100%; height: 210px; object-fit: cover; border-radius: 10px;">
                  <p style="font-size: 1rem; position: absolute; top: 10px; left: 10px; color: white;">Modern Luxury</p>
                  <a href="#" class="arrow-icon"><i class="fas fa-arrow-right"></i></a>
                </div>
                <div class="grid-item" style="position: relative;">
                  <img src="@/static/Imagine Interior/Moji & Minimal.png" alt="Moji & Minimal" class="zoom-effect"
                    style="width: 100%; height: 210px; object-fit: cover; border-radius: 10px;">
                  <p style="font-size: 1rem; position: absolute; top: 10px; left: 10px; color: white;">Moji & Minimal
                  </p>
                  <a href="#" class="arrow-icon"><i class="fas fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
            <a href="#" class="btn btn-primary rounded-pill about-btn">Read More</a>
          </div>
        </div>
      </div>
    </section>


    <!-- New section -->
    <section class="section-spacing" ">
      <div class=" d-flex justify-content-start align-items-center"
      style="display: flex; padding: 0; margin-top: -150px;">
      <div class="text-left p-3" style="max-width: 1200px; font-size: 1.1rem; margin: auto;">
        <div style="display: flex; align-items: center; margin-bottom: 10px;">
          <div
            style="width: 10px; height: 10px; background-color: rgb(249, 204, 56); border-radius: 50%; margin-right: 5px;">
          </div>
          <h2 class="fs-14 text-bold mb-2" style="font-size: 1.3rem; font-weight: bold;">6 Steps to Service</h2>
        </div>
        <p class="mb-3" style="font-size: 1.2rem; line-height: 1.2; margin-top: 0; margin-bottom: 30px;">
          Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam.
        </p>
      </div>
  </div>
  <div class="grid-container"
    style="display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; max-width: 1200px; margin: auto;">
    <!-- Consultation -->
    <div class="grid-item-container" style="text-align: center;">
      <div class="grid-item"
        style="background-color: #ededed; width: 120px; height: 120px; padding: 10px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: auto;">
        <img src="@/static/step/conversation.png" alt="conversation" class="zoom-effect-step"
          style="width: 60px; height: 60px; object-fit: cover;">
      </div>
      <h3 style="font-size: 0.9rem; font-weight: normal; color: black; margin-top: 10px;">Consultation</h3>
    </div>
    <!-- Estimate Price -->
    <div class="grid-item-container" style="text-align: center;">
      <div class="grid-item"
        style="background-color: #ededed; width: 120px; height: 120px; padding: 10px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: auto;">
        <img src="@/static/step/Estimate.png" alt="Estimate Price" class="zoom-effect-step"
          style="width: 60px; height: 60px; object-fit: cover;">
      </div>
      <h3 style="font-size: 0.9rem; font-weight: normal; color: black; margin-top: 10px;">Estimate Price</h3>
    </div>
    <!-- Drafting 3D -->
    <div class="grid-item-container" style="text-align: center;">
      <div class="grid-item"
        style="background-color: #ededed; width: 120px; height: 120px; padding: 10px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: auto;">
        <img src="@/static/step/Drafting.png" alt="Drafting" class="zoom-effect-step"
          style="width: 60px; height: 60px; object-fit: cover;">
      </div>
      <h3 style="font-size: 0.9rem; font-weight: normal; color: black; margin-top: 10px;">Drafting 3D</h3>
    </div>
    <!-- Built-in Installation -->
    <div class="grid-item-container" style="text-align: center;">
      <div class="grid-item"
        style="background-color: #ededed; width: 120px; height: 120px; padding: 10px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: auto;">
        <img src="@/static/step/Built-in.png" alt="Built-in" class="zoom-effect-step"
          style="width: 60px; height: 60px; object-fit: cover;">
      </div>
      <h3 style="font-size: 0.9rem; font-weight: normal; color: black; margin-top: 10px;">Built-in installation</h3>
    </div>
    <!-- Project Delivery -->
    <div class="grid-item-container" style="text-align: center;">
      <div class="grid-item"
        style="background-color: #ededed; width: 120px; height: 120px; padding: 10px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: auto;">
        <img src="@/static/step/Project.png" alt="Project" class="zoom-effect-step"
          style="width: 60px; height: 60px; object-fit: cover;">
      </div>
      <h3 style="font-size: 0.9rem; font-weight: normal; color: black; margin-top: 10px;">Project delivery</h3>
    </div>
    <!-- Warranty -->
    <div class="grid-item-container" style="text-align: center;">
      <div class="grid-item"
        style="background-color: #ededed; width: 120px; height: 120px; padding: 10px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: auto;">
        <img src="@/static/step/warranty.png" alt="Warranty" class="zoom-effect-step"
          style="width: 60px; height: 60px; object-fit: cover;">
      </div>
      <h3 style="font-size: 0.9rem; font-weight: normal; color: black; margin-top: 10px;">1 year warranty</h3>
    </div>
  </div>
  </section>
  <!-- End of new section -->
  <section wapper class="design-section">
    <div class="d-flex justify-content-center align-items-center"
      style="min-height: 60vh; padding: 0; margin-top: 50px;">
      <div class="text-center p-3" style="max-width: 1200px; font-size: 1.1rem; margin: auto;">
        <div style="display: flex; align-items: center; margin-bottom: 20px;">
          <div
            style="width: 10px; height: 10px; background-color: rgb(249, 204, 56); border-radius: 50%; margin-right: 5px;">
          </div>
          <h2 id="design-option1" class="text-uppercase mb-2"
            :class="{ 'text-muted': currentDesign !== 'house', 'text-bold': currentDesign === 'house' }"
            style="font-size: 1.3rem; cursor: pointer;" @click="toggleDesign('house')">
            รับออกแบบตกแต่งภายในบ้าน
          </h2>
          <span style="margin: 0 5px; ">/</span>
          <h3 id="design-option2" class="text-uppercase mb-2"
            :class="{ 'text-muted': currentDesign !== 'condo', 'text-bold': currentDesign === 'condo' }"
            style="font-size: 1.3rem; cursor: pointer;" @click="toggleDesign('condo')">
            รับออกแบบตกแต่งภายในคอนโด
          </h3>
        </div>
        <!-- ตกแต่งภายในบ้าน -->
        <div v-if="currentDesign === 'house'">
          <div v-if="services && services.length">
            <!-- กรองเฉพาะ service ที่มี service_category_id === 113 -->
            <div id="outside-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <!-- 2 รูปแรก (แนวตั้ง) -->
              <div style="display: grid; gap: 20px;">
                <div class="grid-item" style="position: relative;"
                  v-for="(service, index) in services.filter(service => service.service_category_id === 113).slice(0, 2)"
                  :key="index">
                  <div v-if="service.image && service.image.length">
                    <img :src="service.image[0]" :alt="service.title" class="zoom-effect-left"
                      style="width: 100%; height: 210px; object-fit: cover; border-radius: 10px;">
                  </div>
                  <p style="font-size: 1rem; position: absolute; top: 10px; left: 10px; color: white;">
                    {{ service.title }}
                  </p>
                  <a href="#" class="arrow-icon"><i class="fas fa-arrow-right"></i></a>
                </div>
              </div>

              <!-- 2 รูปหลัง (แนวนอน) -->
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div class="grid-item" style="position: relative;"
                  v-for="(service, index) in services.filter(service => service.service_category_id === 113).slice(2, 4)"
                  :key="index">
                  <div v-if="service.image && service.image.length">
                    <img :src="service.image[0]" :alt="service.title" class="zoom-effect-pop"
                      style="width: 100%; height: 450px; object-fit: cover; border-radius: 10px;">
                  </div>
                  <p style="font-size: 1rem; position: absolute; top: 10px; left: 10px; color: white;">
                    {{ service.title }}
                  </p>
                  <a href="#" class="arrow-icon"><i class="fas fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div style="text-align: left;">
            <a href="#" id="outside-readmore" class="btn btn-soft-yellow rounded-pill"
              style="background-color: #ececec; border: none; color: #333; padding: 10px 20px; font-size: 1rem; font-family: 'Athiti', sans-serif; margin-top: 20px; text-decoration: none; border-radius: 50px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; display: inline-block; text-align: left; cursor: pointer; margin-left: 0; text-align: left; align-self: flex-start;"
              onmouseover="this.style.backgroundColor='#333'; this.style.color='white'; this.style.transform='scale(1.05)';"
              onmouseout="this.style.backgroundColor='#ececec'; this.style.color='#333'; this.style.transform='scale(1)';">Read
              More</a>
          </div>
        </div>

        <!-- ตกแต่งภายในคอนโด -->
        <div v-if="currentDesign === 'condo'">
          <div v-if="services && services.length">
            <!-- กรองเฉพาะ service ที่มี service_category_id === 114 -->
            <div id="inside-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
              <!-- 2 รูปแรก (แนวตั้ง) -->
              <div style="display: grid; gap: 20px;">
                <div class="grid-item" style="position: relative;"
                  v-for="(service, index) in services.filter(service => service.service_category_id === 114).slice(0, 2)"
                  :key="index">
                  <div v-if="service.image && service.image.length">
                    <img :src="service.image[0]" :alt="service.title" class="zoom-effect-left"
                      style="width: 100%; height: 210px; object-fit: cover; border-radius: 10px;">
                  </div>
                  <p style="font-size: 1rem; position: absolute; top: 10px; left: 10px; color: white;">
                    {{ service.title }}
                  </p>
                  <a href="#" class="arrow-icon"><i class="fas fa-arrow-right"></i></a>
                </div>
              </div>

              <!-- 2 รูปหลัง (แนวนอน) -->
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                <div class="grid-item" style="position: relative;"
                  v-for="(service, index) in services.filter(service => service.service_category_id === 114).slice(2, 4)"
                  :key="index">
                  <div v-if="service.image && service.image.length">
                    <img :src="service.image[0]" :alt="service.title" class="zoom-effect-right"
                      style="width: 100%; height: 450px; object-fit: cover; border-radius: 10px;">
                  </div>
                  <p style="font-size: 1rem; position: absolute; top: 10px; left: 10px; color: white;">
                    {{ service.title }}
                  </p>
                  <a href="#" class="arrow-icon"><i class="fas fa-arrow-right"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div style="text-align: left;">
            <a href="#" id="inside-readmore" class="btn btn-soft-yellow rounded-pill"
              style="background-color: #ececec; border: none; color: #333; padding: 10px 20px; font-size: 1rem; font-family: 'Athiti', sans-serif; margin-top: 20px; text-decoration: none; border-radius: 50px; box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1); transition: all 0.3s ease; display: inline-block; text-align: left; cursor: pointer; margin-left: 0; text-align: left; align-self: flex-start; justify-self: flex-start;"
              onmouseover="this.style.backgroundColor='#333'; this.style.color='white'; this.style.transform='scale(1.05)';"
              onmouseout="this.style.backgroundColor='#ececec'; this.style.color='#333'; this.style.transform='scale(1)';">Read
              More</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="video-showcase">
    <div class="d-flex justify-content-center align-items-center"
      style="min-height: 80vh; padding: 0; margin-top: 50px;">
      <div class="text-center p-3"
        style="width: 100%; max-width: 1200px; font-size: 1.1rem; margin: auto; border-radius: 30px; overflow: hidden;">

        <!-- วิดีโอ -->
        <video autoplay controls preload="auto"
          style="width: 100%; height: auto; max-height: 500px; object-fit: cover; border-radius: 20px;">
          <source src="@/static/video/room-video.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  </section>


  <section class="section-spacing">
    <div class="container-fluid">
      <div class="d-flex justify-content-start align-items-center " style="margin-top: -70px;">
        <div class="text-left p-3 about-content">
          <div style="display: flex; align-items: center; margin-bottom: 10px;">
            <div
              style="width: 10px; height: 10px; background-color: rgb(249, 204, 56); border-radius: 50%; margin-right: 5px;">
            </div>
            <h2 class="fs-14 text-bold mb-2" style="font-size: 1.3rem; font-weight: bold;">Our Partners</h2>
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

  <!-- <section class="wrapper bg-light wrapper-border">
  <div class="container py-14 py-md-16">
    <p class="text-center mb-8">Trusted by over 2K+ clients across the world</p>
    <div class="swiper-container clients mb-0" data-margin="30" data-dots="false" data-loop="true" data-autoplay="true" data-autoplaytime="1" data-drag="false" data-speed="5000" data-items-xxl="7" data-items-xl="6" data-items-lg="5" data-items-md="4" data-items-xs="2">
      <div class="swiper">
        <!-- <div class="swiper-wrapper ticker">
          <div class="swiper-slide px-5"><img src="@/static/clients/kwoon.png" alt="" /></div>
          <div class="swiper-slide px-5"><img src="@/static/clients/lomos.png" alt="" /></div>
          <div class="swiper-slide px-5"><img src="@/static/clients/malory.png" alt="" /></div>
          <div class="swiper-slide px-5"><img src="@/static/clients/morello.png" alt="" /></div>
          <div class="swiper-slide px-5"><img src="@/static/clients/slowave.png" alt="" /></div>
        </div> -->
  <!--/.swiper-wrapper -->
  <!-- </div>
    </div>
  </div>
</section> -->


  <section class="section-spacing">
    <div>
      <div class="d-flex justify-content-center align-items-center" style="display: flex; margin-top: 50px;">
        <div class="text-center p-3" :style="{
          width: '1200px',
          height: '450px',
          fontSize: '1.1rem',
          margin: 'auto',
          marginBottom: '50px',
          backgroundImage: `url(${require('@/static/contact.png')})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          borderRadius: '10px',
          color: '#333',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }">
          <div class="about-us" style="font-family: 'Athiti', sans-serif; text-align: center;">
            <h2 class="widget-title text-center" style="font-size: 1.5rem; font-weight: 150px;">Get in Touch</h2>
            <p class="widget-title text-center mb-0" style="font-size: 1.1rem;">
              Have any questions? Reach out to us from our contact <br>
              form and we will get back to you shortly.
            </p>
            <a href="#" class="cta-button"
              style="padding: 10px 20px; background-color: #fff; color: #333; text-decoration: none; border-radius: 25px; margin-top: 20px; display: inline-block;">Contact
              Us</a>
          </div>
        </div>
      </div>
    </div>
  </section>


  <FooterComponent class="footer-section" />
  </div>
</template>

<script>

import HeaderComponent from '~/components/Header.vue';
import FooterComponent from '~/components/Footer.vue';

let Carousel = null;
let Slide = null;

if (typeof window !== 'undefined') {
  const vueCarousel = require('vue-carousel');
  Carousel = vueCarousel.Carousel;
  Slide = vueCarousel.Slide;
}

export default {
  name: 'IndexPage',
  components: {
    HeaderComponent,
    FooterComponent,
    Carousel,
    Slide
  },
  data() {
    return {
      currentDesign: 'house',
      slides: [
        { title: 'Living Room', image: 'banner.png' },
        { title: 'Bedroom', image: 'banner.png' },
        { title: 'Kitchen', image: 'banner.png' }
      ]
    };
  },
  methods: {
    toggleDesign(option) {
      this.currentDesign = option;
    },
    handleButtonClick(title) {
      console.log(`Button clicked on ${title}`);
    }
  },
  async asyncData({ $axios }) {
    const serviceCategoryId1 = 113; // กำหนดค่า service_category_id1
    const serviceCategoryId2 = 114; // กำหนดค่า service_category_id2

    try {
      const response1 = await $axios.get('/service', {
        params: { service_category_id: serviceCategoryId1 },
      });

      const response2 = await $axios.get('/service', {
        params: { service_category_id: serviceCategoryId2 },
      });

      const filteredServices1 = response1.data.service.filter(service => service.service_category_id === serviceCategoryId1);
      const filteredServices2 = response2.data.service.filter(service => service.service_category_id === serviceCategoryId2);

      const combinedServices = [...filteredServices1, ...filteredServices2];

      return {
        services: Array.isArray(combinedServices) ? combinedServices : [],
      };
    } catch (error) {
      console.error('Error fetching services:', error);
      return {
        services: [],
      };
    }
  }
};

</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Athiti:wght@200;300;400;500;600;700&family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

body {
  font-family: 'Athiti', 'IBM Plex Sans Thai', sans-serif;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
}

body,
h1,
h2,
h3,
p,
a,
span,
button {
  font-family: 'Athiti', 'IBM Plex Sans Thai', sans-serif;
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
}

.banner {
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
}

.bg-overlay {
  position: relative;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.4);
}

h2,
p {
  z-index: 3;
  /* ตั้งค่า z-index ให้สูงกว่า overlay */
}

h2 {
  font-size: 1rem;
  /* Adjust font size */
}

.btn-outline-white {
  border-color: #fff;
  color: #fff;
}

.btn-outline-white:hover {
  background-color: #fff;
  color: #000;
}

.about-section {
  min-height: 70vh;
  display: flex;
  padding: 0;
  margin-top: -100px;
}

.about-content {
  max-width: 1200px;
  /* Set max-width to 1200px */
  min-height: 400px;
  font-size: 1.3rem;
  margin: auto;
}

.about-heading {
  font-weight: bold;
  text-transform: none;
  /* Ensure normal case */
  font-size: 1.4rem;
  color: black;
  /* Set font color to black */
}

.about-text {
  font-size: 1.2rem;
  line-height: 1.2;
  margin-top: 10px;
  margin-bottom: 10px;
  /* Reduce margin-bottom to make text closer to button */
}

.about-btn {
  background-color: #ededed;
  border: none;
  color: #333;
  padding: 10px 20px;
  font-size: 1rem;
  font-family: 'Athiti', 'IBM Plex Sans Thai', sans-serif;
  /* Use the same font as the rest of the website */
  margin-top: 20px;
  /* Reduce margin-top to make button closer to text */
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: inline-block;
  text-align: left;
  cursor: pointer;
}

.about-btn:hover {
  background-color: #333;
  color: white;
  transform: scale(1.05);
}



/* Styles for new section */
.grid-item {
  position: relative;
}

.zoom-effect {
  transition: transform 0.3s ease-in-out;
}

.zoom-effect:hover {
  transform: scale(1.02);
}

.zoom-effect-left {
  transition: transform 0.3s ease-in-out;
}

.zoom-effect-left:hover {
  transform: scale(1.02);
}

.zoom-effect-right {
  transition: transform 0.3s ease-in-out;
}

.zoom-effect-right:hover {
  transform: scale(1.02);
}

.zoom-effect-pop {
  transition: transform 0.3s ease-in-out;
}

.zoom-effect-pop:hover {
  transform: scale(1.02);
}

.zoom-effect-step {
  transition: transform 0.3s ease-in-out;
}

.zoom-effect-step:hover {
  transform: scale(1.1);
  /* Increase the scale to zoom in smoothly */
}

.arrow-icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
  /* Remove underline */
}

.arrow-icon:hover,
.arrow-icon:focus,
.arrow-icon:active {
  text-decoration: none;
  /* Remove underline on hover, focus, and active */
  color: white;
  /* Ensure color stays white */
}

.arrow-icon:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.text-bold {
  font-weight: bold;
}

.text-muted {
  color: gray;
}

.arrow-icon {
  position: absolute;
  bottom: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 1.2rem;
  text-decoration: none;
}

.arrow-icon:hover,
.arrow-icon:focus,
.arrow-icon:active {
  text-decoration: none;
  color: white;
}

.arrow-icon:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

.btn-soft-yellow {
  background-color: #ececec;
  border: none;
  color: #333;
  padding: 10px 20px;
  font-size: 1rem;
  font-family: 'Athiti', sans-serif;
  margin-top: 20px;
  text-decoration: none;
  border-radius: 50px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  display: inline-block;
  text-align: left;
  cursor: pointer;
}

.btn-soft-yellow:hover {
  background-color: #333;
  color: white;
  transform: scale(1.05);
}

.btn-primary {
  font-family: 'Athiti', sans-serif;
  /* Use the same font as the other buttons */
}

/* Adjust video height */
#video-showcase video {
  height: 300px;
}



img {
  width: 100%;
  height: auto;
}

.section-spacing {
  padding: 20px 0;
}

.carousel-section {
  position: relative;
}

.slide-content {
  position: relative;
}

.slide-image {
  width: 100%;
  height: auto;
}

.slide-overlay {
  position: absolute;
  top: 50%;
  left: -65%;
  transform: translate(-50%, -50%);
  text-align: left;
  /* Align text to the left */
  color: white;
  border-radius: 10px;
}

.slide-overlay h3 {
  font-size: 2.5rem;
  /* ขนาดตัวอักษรของหัวข้อ */
  font-weight: bold;
  margin-bottom: 10px;

}

.slide-overlay span {
  font-size: 1.2rem;
  /* ขนาดตัวอักษรของข้อความ */
  margin-bottom: 30px;
  display: block;
  max-width: 700px;
  /* Adjust the width to fit the text */
  white-space: normal;
  /* Allow text to wrap */
  overflow: hidden;
  /* Hide overflow */
  text-overflow: ellipsis;
  /* Add ellipsis for overflow text */
}

.shop-now-btn {
  padding: 10px 20px;
  font-size: 1.2rem;
  /* ขนาดตัวอักษรของปุ่ม */
  font-weight: bold;
  color: white;
  background-color: transparent;
  /* No background color */
  border: 2px solid white;
  /* White border */
  border-radius: 50px;
  transition: background-color 0.3s ease, color 0.3s ease;
  /* Add transition for color */
}

.shop-now-btn:hover {
  background-color: white;
  /* White background on hover */
  color: #333;
  /* Text color on hover */
}
</style>
