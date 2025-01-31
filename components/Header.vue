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
        <div :class="isMenuOpen ? 'hamburger-icon open' : 'hamburger-icon'">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
    <div :class="['sidebar-menu', { 'menu-open': isMenuOpen }]">
      <div class="sidebar-logo">
        <!-- <img v-if="websiteData && websiteData.logo" :src="websiteData.logo" alt="Website Logo" /> -->
        <img src="@/static/logow.png" alt="New Logo" class="logo" />
      </div>
      <div class="menu-content">
        <nuxt-link to="/" class="menu-item" @click="toggleMenu">
          <i class="fas fa-home"></i> Home
        </nuxt-link>
        <nuxt-link to="/about" class="menu-item" @click="toggleMenu">
          <i class="fas fa-info-circle"></i> About Us
        </nuxt-link>
        <!-- Service Submenu -->
        <div class="menu-item">
          <button class="menu-item dropbtn" @click="toggleDropdown">
            <i class="fas fa-concierge-bell"></i> Service
            <i class="fas fa-chevron-down transition-transform duration-200"
              :class="{ '-rotate-180': isDropdownOpen }"></i>
          </button>
          <div :class="['submenu', { 'submenu-open': isDropdownOpen }]">
            <nuxt-link to="/home" class="menu-item flex items-center" @click="toggleMenu">
              <img src="@/static/homebg.png" alt="Home" class="icon w-6 h-6">
              <span class="text">รับออกแบบตกแต่งภายใน บ้าน</span>
            </nuxt-link>
            <nuxt-link to="/condo" class="menu-item flex items-center" @click="toggleMenu">
              <img src="@/static/condobg.png" alt="Condo" class="icon w-6 h-6">
              <span class="text">รับออกแบบตกแต่งภายใน คอนโด</span>
            </nuxt-link>
          </div>
        </div>
        <nuxt-link to="/portfolio" class="menu-item" @click="toggleMenu">
          <i class="fas fa-briefcase"></i> Portfolio
        </nuxt-link>
        <nuxt-link to="/contact" class="menu-item" @click="toggleMenu">
          <i class="fas fa-envelope"></i> Contact Us
        </nuxt-link>
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
      if (!this.isMenuOpen) {
        this.isDropdownOpen = false; // Close dropdown when menu is closed
      }
    },
    toggleDropdown(event) {
      event.stopPropagation();
      this.isDropdownOpen = !this.isDropdownOpen;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Athiti:wght@200;300;400;500;600;700&family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');


/* Ensure the body does not cause horizontal scrolling */
body {
  overflow-x: hidden;
}

.header {
  background-color: #fff;
  text-align: center;
  font-family: 'Athiti', sans-serif;
  z-index: 1009;
  position: relative;
  width: 100%;
  box-sizing: border-box;
}

.promo {
  max-width: 100%;
  box-sizing: border-box;
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
  font-size: 1rem;
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
  font-size: 1rem;
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
  font-size: 0.9rem;
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
  z-index: 1005;
  /* Increase z-index to ensure it appears above other elements */
  border-radius: 10px;
  top: 100%;
  margin-top: 5px;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.dropdown-hamburger {
  display: none;
  position: relative;
  /* Change to relative */
  background-color: transparent;
  /* Remove background color */
  min-width: 300px;
  box-shadow: none;
  /* Remove box shadow */
  z-index: 1005;
  /* Ensure it appears above other elements */
  border-radius: 10px;
  top: 0;
  /* Change to 0 to align directly below */
  margin-top: 0;
  /* Remove margin */
  flex-direction: column;
  /* Ensure items are displayed in a column */
}

.dropdown-content.dropdown-open {
  display: block;
  opacity: 1;
  transform: translateY(0);
}

.dropdown-hamburger.dropdown-open {
  display: flex;
  /* Change to flex */
  position: absolute;
  /* Ensure it stays in place */
  left: 0;
  /* Align to the left */
  transform: none;
  /* Remove centering transform */
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
  /* Hide hamburger by default */
  cursor: pointer;
  margin-left: auto;
  margin-right: -70px;
}

.hamburger-icon {
  width: 30px;
  height: 20px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.hamburger-icon span {
  display: block;
  height: 3px;
  background-color: #333;
  border-radius: 3px;
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.hamburger-icon.open span:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.hamburger-icon.open span:nth-child(2) {
  opacity: 0;
}

.hamburger-icon.open span:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.sidebar-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 50%;
  height: 100%;
  background-color: #414042;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 20px;
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
  transform: translateX(-100%);
  opacity: 0;
}

.sidebar-menu.menu-open {
  transform: translateX(0);
  opacity: 1;
}

.sidebar-menu .sidebar-logo {
  width: 100%;
  text-align: center;
  margin-bottom: 0px;
  margin-left: 10%;
}

.sidebar-menu .sidebar-logo img {
  margin-top: 15%;
  max-width: 40%;
  height: auto;
}

.sidebar-menu .menu-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  /* Increase spacing between menu items */
  margin-top: 15%;
  margin-left: 10%;
  /* Move menu items down */
}

.sidebar-menu .menu-item {
  color: #fff;
  font-weight: 600;
  font-size: 1.2rem;
  /* Increase font size */
  margin: 0;
  /* Remove margin */
  padding: 0.5rem 0;
  /* Add padding for spacing */
  text-align: left;
  /* Align text to the left */
  width: 100%;
  /* Ensure full width */
  text-decoration: none;
}

.sidebar-menu .menu-item i {
  margin-right: 10px;
  ;
}

.menu-content .menu-item:focus,
.menu-content .menu-item:active {
  background: none !important;
  box-shadow: none !important;
  color: #F7B951;
  /* Change to desired color on click */
}

.menu-content .menu-item:hover,
.menu-content .menu-item:focus,
.menu-content .menu-item.active-tab,
.menu-content .nuxt-link-exact-active {
  background-color: transparent;
  /* Change to transparent */
  border-color: none;
}

.menu-content .dropdown-content a:hover,
.menu-content .dropdown-content a:focus,
.menu-content .dropdown-content a.active-tab,
.menu-content .dropdown-content .nuxt-link-exact-active {
  background-color: transparent;
  /* Ensure no background color */
  border-color: none;
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

.menu-content .dropdown-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
  position: absolute;
  /* Ensure it does not affect other elements */
  top: 100%;
  /* Position it below the dropdown button */
}

.menu-content .dropdown-content a {
  display: flex;
  align-items: center;
  padding-left: 10px;
  /* Indent dropdown items */
}

.menu-content .dropdown-content a .icon {
  width: 1.2em;
  height: 1.3em;
  display: inline-block;
  margin-right: 10px;
  vertical-align: middle;
}

.menu-content .dropdown-content a .text {
  display: inline-block;
  vertical-align: middle;
  color: black;
}

.submenu {
  display: none;
  opacity: 0;
  transform: translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  position: relative;
  /* Ensure it does not push other elements */
  top: 0;
  /* Position it below the dropdown button */
  left: 40px;
  /* Move submenu slightly to the left */
}

.submenu-open {
  display: block;
  opacity: 1;
  transform: translateY(0);
}

.menu-content .menu-item {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.menu-content .submenu-open~.menu-item {
  transform: translateY(20px);
  opacity: 0;
}

.menu-content .submenu-open~.menu-item.submenu-open {
  transform: translateY(0);
  opacity: 1;
}

.submenu.space-y-2 {
  display: block;
  opacity: 1;
  transform: translateY(0);
}


@media (max-width: 480px) {
  .header .promo {
    font-size: 0.9rem;
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
    font-size: 0.9rem;
  }

  .menu-item {
    font-size: 0.8rem;
  }

  .sidebar-menu .menu-item {
    font-size: 1rem;
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
    width: 25px;
    height: 25px;
  }

  .hamburger-icon {
    width: 25px;
    height: 18px;
  }

  .hamburger-icon span {
    height: 2px;
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


/* lg tablet horizon */
@media (min-width: 992px) and (max-width: 1199px) {
  .nav .menu {
    display: none;
  }

  .hamburger {
    display: block;
    margin-top: 20px;
    margin-right: -80px;
    font-size: 2rem;
    /* Increase font size */
    padding: 30px;
    /* Increase padding */
    width: 100px;
    /* Set width */
    height: 100px;
    /* Set height */
  }


  .nav .menu.menu-open {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    width: 100%;
    background-color: #333;
    align-items: flex-end;
  }

  .nav .logo img {
    height: 50%;
    width: 50%;
    margin-left: -130px;
    margin-top: 20px;
  }

  .promo {
    width: 100vw;
    /* Ensure it fits within the viewport width */
    box-sizing: border-box;
    /* Ensure padding and border are included in the element's total width and height */
    overflow-x: hidden;
    /* Prevent horizontal scrolling */
  }

  .header .promo {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    /* Ensure it fits within the viewport width */
    max-width: 100%;
    /* Prevent it from exceeding the viewport width */
    z-index: 1004;
    background-color: rgba(255, 255, 255, 0.9);
    text-align: center;
    padding: 10px 0;
    font-size: 1.2rem;
    box-sizing: border-box;
    /* Ensure padding and border are included in the element's total width and height */
    overflow-x: hidden;
    /* Prevent horizontal scrolling */
  }

  .header .promo {
    font-size: 1.1rem;
  }

  .nav .menu a {
    font-size: 1.1rem;
  }

  .menu-item {
    font-size: 1rem;
  }

  .sidebar-menu .menu-item {
    font-size: 1.2rem;
  }

  .promo button {
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 10px;
    cursor: pointer;
    border: none;
  }

  .move-down {
    margin-top: 1rem;
  }
}

/* md tablet */
@media (min-width: 768px) and (max-width: 991px) {
  .nav .menu {
    display: none;
  }

  .hamburger {
    display: block;
  }

  .hamburger {
    display: block;
    margin-left: auto;
    width: 35px;
    height: 35px;
  }

  .hamburger-icon {
    width: 35px;
    height: 25px;
  }

  .hamburger-icon span {
    height: 3px;
  }

  .nav .menu.menu-open {
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
    width: 100%;
    background-color: #333;
    align-items: flex-end;
  }

  .nav .menu a {
    color: #fff;
    font-size: 1rem;
  }

  .menu-item {
    font-size: 0.9rem;
  }

  .sidebar-menu .menu-item {
    font-size: 1.1rem;
  }

  .nav .logo img {
    height: 60%;
    width: 60%;
    margin-left: -130px;
    margin-top: 20px;
  }

  .promo {
    width: 100vw;
    /* Ensure it fits within the viewport width */
    box-sizing: border-box;
    /* Ensure padding and border are included in the element's total width and height */
    overflow-x: hidden;
    /* Prevent horizontal scrolling */
  }

  .header .promo {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    /* Ensure it fits within the viewport width */
    z-index: 1004;
    background-color: rgba(255, 255, 255, 0.9);
    text-align: center;
    padding: 10px 0;
    font-size: 1.2rem;
    box-sizing: border-box;
    /* Ensure padding and border are included in the element's total width and height */
    overflow-x: hidden;
    /* Prevent horizontal scrolling */
  }

  .header .promo {
    font-size: 1rem;
  }

  .nav .menu a {
    font-size: 1rem;
  }

  .menu-item {
    font-size: 0.9rem;
  }

  .sidebar-menu .menu-item {
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
}

/* sm phone */
@media (max-width: 768px) {

  .nav {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .nav .logo {
    margin-left: 60px;
  }

  .logo img {
    height: 40% !important;
    width: 40% !important;
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

  .nav .menu a {
    font-size: 0.9rem;
  }

  .menu-item {
    font-size: 0.8rem;
  }

  .sidebar-menu .menu-item {
    font-size: 1rem;
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
    width: 30px;
    height: 30px;
  }

  .hamburger-icon {
    width: 30px;
    height: 20px;
  }

  .hamburger-icon span {
    height: 3px;
  }

  .promo {
    width: 100vw;
    /* Ensure it fits within the viewport width */
    box-sizing: border-box;
    /* Ensure padding and border are included in the element's total width and height */
    overflow-x: hidden;
    /* Prevent horizontal scrolling */
  }

  .header .promo {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    /* Ensure it fits within the viewport width */
    z-index: 1004;
    background-color: rgba(255, 255, 255, 0.9);
    text-align: center;
    padding: 10px 0;
    font-size: 1.1rem;
    box-sizing: border-box;
    /* Ensure padding and border are included in the element's total width and height */
    overflow-x: hidden;
    /* Prevent horizontal scrolling */
  }

  .header .promo {
    font-size: 0.9rem;
  }

  .nav .menu a {
    font-size: 0.9rem;
  }

  .menu-item {
    font-size: 0.8rem;
  }

  .sidebar-menu .menu-item {
    font-size: 1rem;
  }

  .promo button {
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 10px;
    cursor: pointer;
    border: none;
  }
}

/* xs phone */
@media (max-width: 575px) {
  .promo {
    width: 100vw;
    /* Ensure it fits within the viewport width */
    box-sizing: border-box;
    /* Ensure padding and border are included in the element's total width and height */
    overflow-x: hidden;
    /* Prevent horizontal scrolling */
  }

  .header .promo {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    /* Ensure it fits within the viewport width */
    z-index: 1004;
    background-color: rgba(255, 255, 255, 0.9);
    text-align: center;
    padding: 10px 0;
    font-size: 0.8rem;
    box-sizing: border-box;
    /* Ensure padding and border are included in the element's total width and height */
    overflow-x: hidden;
    /* Prevent horizontal scrolling */
  }

  .promo button {
    background-color: #333;
    color: #fff;
    padding: 5px 10px;
    border-radius: 10px;
    cursor: pointer;
    border: none;
  }


  .sidebar-menu .sidebar-logo img {
    margin-top: 30%;
    max-width: 60%;
    height: auto;
  }

  .sidebar-menu .menu-content {
    gap: 0.5rem;
    margin-top: 15%;
    margin-left: 10%;
  }

  .sidebar-menu .menu-item {
    font-size: 1rem;
    padding: 0.3rem 0;
    width: 100%;
  }

}
</style>
