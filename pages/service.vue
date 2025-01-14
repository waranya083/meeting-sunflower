<template>
  <div class="page-container">
    <HeaderComponent class="header-section" />
    <div class="banner bg-overlay bg-overlay-400 bg-dark"
      style="background-image:url('/banner/servicebn.png'); height: 60vh; background-position: bottom;">
      <div class="container h-100 d-flex justify-content-center align-items-center">
        <div class="text-center" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
          <h1 class="text-white">Service</h1>
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
      <div class="d-flex justify-content-center align-items-center about-section">
        <div class="text-left p-3 about-content">
          <div class="about-heading-container">
            <h2 class="fs-14 text-bold mb-2" style="font-size: 1.3rem; font-weight: bold;">
              <div style="width: 10px; height: 10px; background-color: rgb(249, 204, 56); border-radius: 50%; margin-right: 5px; display: inline-block;"></div>
              Livingroom
            </h2>
          </div>
          <p class="mb-3 about-text">
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et.
          </p>
          <a href="#" class="btn btn-primary rounded-pill about-btn">Read More</a>
        </div>
        <div class="about-image frame">
          <img src="@/static/service/Livingroom.jpg" alt="Livingroom" class="img-fluid">
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center about-section">
        <div class="text-left p-3 about-content">
          <div class="about-heading-container">
            <h2 class="fs-14 text-bold mb-2" style="font-size: 1.3rem; font-weight: bold;">
              <div style="width: 10px; height: 10px; background-color: rgb(249, 204, 56); border-radius: 50%; margin-right: 5px; display: inline-block;"></div>
              Bedroom
            </h2>
          </div>
          <p class="mb-3 about-text">
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et.
          </p>
          <a href="#" class="btn btn-primary rounded-pill about-btn">Read More</a>
        </div>
        <div class="about-image frame">
          <img src="@/static/service/Bedroom.jpg" alt="Bedroom" class="img-fluid">
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center about-section">
        <div class="text-left p-3 about-content">
          <div class="about-heading-container">
            <h2 class="fs-14 text-bold mb-2" style="font-size: 1.3rem; font-weight: bold;">
              <div style="width: 10px; height: 10px; background-color: rgb(249, 204, 56); border-radius: 50%; margin-right: 5px; display: inline-block;"></div>
              Walk-in Closet
            </h2>
          </div>
          <p class="mb-3 about-text">
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et.
          </p>
          <a href="#" class="btn btn-primary rounded-pill about-btn">Read More</a>
        </div>
        <div class="about-image frame">
          <img src="@/static/service/Walk-in Closet.jpg" alt="Walk-in Closet" class="img-fluid">
        </div>
      </div>
      <div class="d-flex justify-content-center align-items-center about-section">
        <div class="text-left p-3 about-content">
          <div class="about-heading-container">
            <h2 class="fs-14 text-bold mb-2" style="font-size: 1.3rem; font-weight: bold;">
              <div style="width: 10px; height: 10px; background-color: rgb(249, 204, 56); border-radius: 50%; margin-right: 5px; display: inline-block;"></div>
              Kitchen
            </h2>
          </div>
          <p class="mb-3 about-text">
            Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Cras justo odio,
            dapibus ac facilisis in, egestas eget quam. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et.
          </p>
          <a href="#" class="btn btn-primary rounded-pill about-btn">Read More</a>
        </div>
        <div class="about-image frame">
          <img src="@/static/service/Kitchen.jpg" alt="Kitchen" class="img-fluid">
        </div>
      </div>
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
  margin-top: 70vh;
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
  margin-bottom: -10%; /* ลบช่องว่างด้านล่างของแต่ละ section */
}

.about-content {
  max-width: 60%; /* ควบคุมความกว้างสูงสุด */
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


</style>
