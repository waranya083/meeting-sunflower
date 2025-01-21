<template>
  <div>
    <div class="header">
      <div class="promo">
        รับสิทธิ์ออกแบบฟรี! 50% ทันที เมื่อใช้บริการออกแบบภายใน <button>จองคิวตอนนี้</button>
      </div>
    </div>
    <div class="nav">
      <div class="logo">
        <div v-if="websiteData && websiteData.logo">
          <img :src="websiteData.logo" alt="Website Logo" />
        </div>
      </div>
      <nav :class="['flex', 'gap-x-1', 'menu']" aria-label="Tabs" role="tablist" aria-orientation="horizontal">
        <nuxt-link to="/" exact-active-class="active-tab" class="menu-item" role="tab" aria-selected="true"
          aria-controls="home-tab">Home</nuxt-link>
        <nuxt-link to="/about" exact-active-class="active-tab" class="menu-item" role="tab" aria-selected="false"
          aria-controls="about-tab">About Us</nuxt-link>
        <div class="dropdown">
          <a href="javascript:void(0)" class="dropbtn menu-item"
            :class="{ 'active-tab': isDropdownOpen || $route.path === '/home' || $route.path === '/condo' }"
            @click="toggleDropdown" role="tab" aria-selected="false" aria-controls="service-tab">Service</a>
          <div class="dropdown-content" :class="{ 'dropdown-open': isDropdownOpen }">
            <nuxt-link to="/home" exact-active-class="active-tab">
              <img src="@/static/home.png" alt="Home" class="icon">
              <span class="text">รับออกแบบตกแต่งภายใน บ้าน</span>
            </nuxt-link>
            <nuxt-link to="/condo" exact-active-class="active-tab">
              <img src="@/static/condo.png" alt="Condo" class="icon">
              <span class="text">รับออกแบบตกแต่งภายใน คอนโด</span>
            </nuxt-link>
          </div>
        </div>
        <nuxt-link to="/portfolio" exact-active-class="active-tab" class="menu-item" role="tab" aria-selected="false"
          aria-controls="portfolio-tab">Portfolio</nuxt-link>
        <nuxt-link to="/contact" exact-active-class="active-tab" class="menu-item" role="tab" aria-selected="false"
          aria-controls="contact-tab">Contact Us</nuxt-link>
        <div class="social-icons">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-line"></i></a>
          <a :href="'tel:' + websiteData.phone1"><i class="fas fa-phone"></i></a>
          <a :href="'mailto:' + websiteData.email1"><i class="fas fa-envelope"></i></a>
        </div>
      </nav>
      <div class="hamburger" @click="toggleMenu">
        <i class="fas" :class="isMenuOpen ? 'fa-times' : 'fa-bars'"></i>
      </div>
    </div>
    <div v-if="isMenuOpen" class="half-screen-menu">
      <div class="close-btn" @click="toggleMenu">
        <i class="fas fa-times"></i>
      </div>
      <div class="menu-content">
        <nuxt-link to="/" class="menu-item" @click="toggleMenu">Home</nuxt-link>
        <nuxt-link to="/about" class="menu-item" @click="toggleMenu">About Us</nuxt-link>
        <nuxt-link to="/home" class="menu-item" @click="toggleMenu">Home</nuxt-link>
        <nuxt-link to="/condo" class="menu-item" @click="toggleMenu">Condo</nuxt-link>
        <nuxt-link to="/portfolio" class="menu-item" @click="toggleMenu">Portfolio</nuxt-link>
        <nuxt-link to="/contact" class="menu-item" @click="toggleMenu">Contact Us</nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMenuOpen: false,
      isDropdownOpen: false,
      websiteData: {},
    };
  },
  async mounted() {
    // ตรวจสอบว่ามีข้อมูลใน localStorage หรือไม่
    const cachedData = localStorage.getItem('websiteData');
    if (cachedData) {
      // ถ้ามีข้อมูลใน localStorage ให้ใช้ข้อมูลนั้นก่อน
      this.websiteData = JSON.parse(cachedData);
      console.log('Loaded data from cache');
    }

    try {
      // ดึงข้อมูลจาก API
      const websiteResponse = await this.$axios.get('/website');
      this.websiteData = websiteResponse.data;

      // เก็บข้อมูลที่ดึงมาใน localStorage
      localStorage.setItem('websiteData', JSON.stringify(this.websiteData));
      console.log('Fetched data from API and updated cache');
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    toggleDropdown(event) {
      event.preventDefault();
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Athiti:wght@200;300;400;500;600;700&family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

.header {
  background-color: #fff;
  text-align: center;
  font-family: 'Athiti', sans-serif;
  z-index: 1000;
  position: relative;
}

.header .promo {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1004;
  background-color: rgba(255, 255, 255, 0.9);
  text-align: center;
  padding: 10px 0;
  font-size: 1.1rem;
}

.promo button {
  background-color: #333;
  color: #fff;
  padding: 5px 10px;
  border-radius: 10px;
  cursor: pointer;
  border: none;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  background-color: transparent;
  z-index: 1001;
  position: relative;
  margin-top: 50px;
  padding: 20px 100px;
}

.nav .logo {
  display: flex;
  align-items: center;
  margin-left: 70px;
}

.nav .logo img {
  height: 50px;
  margin-right: 10px;
}

.nav .menu {
  display: flex;
  background: transparent;
}

.menu {
  display: flex;
  margin-left: auto;
  background: transparent;
}

.menu a {
  margin-left: 0;
  /* Remove margin to make nav items closer */
}

.nav .menu a {
  text-decoration: none;
  color: #333;
  font-size: 1.1rem;
  display: inline-block;
  padding: 10px 10px;
  /* Adjust padding to ensure tabs are close together */
  text-align: center;
}

.menu-item {
  background-color: transparent;
  border: none;
  border-radius: 30px;
  padding: 5px 10px;
  /* Adjust padding to make tabs smaller */
  font-size: 0.8rem;
  /* Adjust font size */
  transition: background-color 0.3s, border-color 0.3s;
}

.menu-item:hover,
.menu-item:focus,
.menu-item.active-tab,
.nuxt-link-exact-active {
  background-color: white;
  border-color: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  font-size: 1.1rem;
  cursor: pointer;
  font-family: 'Athiti', sans-serif;
  color: #333;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 300px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 10px;
  /* Add border-radius to make corners rounded */
  top: 100%;
  /* Adjust the top position to move the dropdown down */
  margin-top: 5px;
  /* Add margin to create space between the button and the dropdown */
}

.dropdown-content.dropdown-open {
  display: block;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
  /* Ensure the image and text are aligned on the same line */
}

.dropdown-content a i {
  margin-right: 10px;
}

.dropdown-content a:hover {
  background-color: transparent;
  border-radius: 10px;

}

.social-icons {
  display: flex;
  margin-left: 40px;
  margin-right: 100px;
}

.social-icons a {
  margin-left: 0;
  /* Remove margin to make social icons closer */
  color: #333;
  font-size: 18px;
}

.hamburger {
  display: none;
  cursor: pointer;
  font-size: 24px;
  margin-left: auto;
  margin-right: -70px;
}

.half-screen-menu {
  position: fixed;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 1002;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.half-screen-menu .close-btn {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 24px;
  cursor: pointer;
  color: #fff;
}

.half-screen-menu .menu-content {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.half-screen-menu .menu-item {
  color: #fff;
  font-size: 1.2rem;
  margin: 10px 0;
  text-decoration: none;
}

.icon {
  width: 1.2em;
  height: 1.3em;
  display: inline-block;
  margin-right: 10px;
  vertical-align: middle;
  /* Ensure the icon is vertically aligned with the text */
}

.text {
  display: inline-block;
  vertical-align: middle;
  /* Ensure the text is vertically aligned with the icon */
}

@media (max-width: 480px) {
  .header .promo {
    font-size: 0.5rem;
    padding: 6px;
    width: 100vw;
  }
  .nav {
    flex-direction: row;
  }

  .nav .logo {
    margin-left: -80px !important;
  }

  .nav .menu {
    flex-direction: column;
    gap: 10px;
    display: none;
    padding: 10px;
    width: 100%;
  }

  .nav .menu.menu-open {
    display: flex;
  }

  .nav .menu a {
    color: #fff;
  }

  .dropdown {
    position: relative;
    display: inline-block;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
    border-radius: 10px;
    /* Add border-radius to make corners rounded */
  }

  .dropdown-content nuxt-link {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .dropdown-content nuxt-link:hover {
    background-color: #f1f1f1;
  }

  .dropdown:hover .dropdown-content {
    display: block;
  }

  .social-icons {
    margin-left: 0;
    margin-right: 0;
    margin-top: 10px;
  }

  .social-icons a {
    color: #fff;
  }

  .hamburger {
    display: block;
    margin-left: auto;
  }

  .header .promo {
    font-size: 0.9rem;
    padding: 6px;
  }

  .header .promo button {
    padding: 3px 6px;
  }

  .nav .logo img {
    height: 40px;
  }
}

/* xl Desktop */
@media (min-width: 1200px) {}

/* lg tablet horizon */
@media (min-width: 992px) and (max-width: 1199px) {}

/* md tablet */
@media (min-width: 768px) and (max-width: 991px) {}

/* sm phone */
@media (max-width: 768px) {


  .nav {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .nav .logo {
    margin-left: 0px;
  }

  .nav .menu {
    flex-direction: column;
    gap: 10px;
    display: none;
    padding: 10px;
    width: 100%;
    background-color: #333;
    /* Add background color */
    align-items: flex-end;
    /* Align items to the right */
  }

  .nav .menu.menu-open {
    display: flex;
    transition: all 0.3s ease;
  }

  .nav .menu a {
    color: #fff;
  }

  .dropdown-content {
    position: relative;
    background-color: #333;
  }

  .dropdown-content a {
    color: transparent;
  }

  .social-icons {
    margin-left: 0;
    margin-right: 0;
    margin-top: 10px;
  }

  .social-icons a {
    color: #fff;
  }

  .hamburger {
    display: block;
    margin-left: auto;
  }

  .header .promo {
    font-size: 0.9rem;
    padding: 4px;
  }

  .header .promo button {
    padding: 4px 8px;
  }
}
</style>
