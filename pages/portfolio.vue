<template>
  <div class="page-container">
    <HeaderComponent class="header-section" />
    <div class="banner bg-overlay bg-overlay-400 bg-dark" style="background-image:url('/banner/servicebn.png'); height: 60vh; background-position: bottom;">
      <div class="container h-100 d-flex justify-content-center align-items-center">
        <div class="text-center" style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%);">
          <h1 class="text-white">Portfolio</h1>
          <nav aria-label="breadcrumb" >
            <ol class="breadcrumb justify-content-center bg-transparent p-0 m-0">
              <li class="breadcrumb-item"><a href="/" class="text-white breadcrumb-link">Home</a></li>
              <li class="breadcrumb-item active text-white" aria-current="page"><a
                  class="text-white breadcrumb-link">Portfolio</a></li>
            </ol>
          </nav>
        </div>
      </div>
    </div>
    <div class="content-container">

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
  name: 'portfolio',
  components: {
    HeaderComponent,
    FooterComponent,
    MessegesComponent
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
  background: transparent; /* ตั้งให้โปร่งใส */
  margin-top: auto; /* ให้ footer อยู่ล่างสุดของ container */
  bottom: 0;
  width: 100%;
  padding: 20px; /* Add padding to ensure visibility */
  color: white; /* Ensure text is visible */
}

.banner {
  width: 100%;
  height: 70vh; /* Adjust height to make the banner taller */
  background-size: cover;
  background-position: bottom;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  position: absolute; /* Change to absolute */
  top: 0; /* Position at the top */
  z-index: 2; /* Ensure it is behind the header */
}

.content-container {
  width: 100%;
  padding: 20px; /* Add padding to ensure content is not hidden */
  flex: 1; /* Ensure content container takes available space */
  margin-top: 70vh; /* Add margin to push content below the banner */
}

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center; /* Adjust alignment */
  flex-direction: column;
  min-height: 50vh; /* Adjust height to ensure content is visible */
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.footer-section {
  position: relative; /* Changed from absolute */
  z-index: 3;
  background: #333; /* Set background color */
  margin-top: auto;
  bottom: 0;
  width: 100%;
  padding: 20px;
  color: white;
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
</style>
