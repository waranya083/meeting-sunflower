<template>
  <div>
    <div class="header">
      <div class="promo">
        รับสิทธิ์ออกแบบฟรี! 50% ทันที เมื่อใช้บริการออกแบบภายใน <button>จองคิวตอนนี้</button>
      </div>
    </div>
    <div class="nav">
      <div class="logo">
        <img src="@/static/logo.png" alt="Sunflower House Logo">
      </div>
      <div class="menu" :class="{ 'menu-open': isMenuOpen }">
        <nuxt-link to="/" exact-active-class="active-tab">Home</nuxt-link>
        <nuxt-link to="/about" exact-active-class="active-tab">About Us</nuxt-link>
        <div class="dropdown">
          <nuxt-link to="/service" exact-active-class="active-tab">Service</nuxt-link>
          <div class="dropdown-content">
            <nuxt-link to="/home" exact-active-class="active-tab"><i class="fas fa-home"></i> รับออกแบบตกแต่งภายใน บ้าน</nuxt-link>
            <nuxt-link to="/condo" exact-active-class="active-tab"><i class="fas fa-building"></i> รับออกแบบตกแต่งภายใน คอนโด</nuxt-link>
          </div>
        </div>
        <nuxt-link to="/portfolio" exact-active-class="active-tab">Portfolio</nuxt-link>
        <nuxt-link to="/contact" exact-active-class="active-tab">Contact Us</nuxt-link>
        <div class="social-icons">
          <a href="#"><i class="fab fa-facebook"></i></a>
          <a href="#"><i class="fab fa-line"></i></a>
          <a href="#"><i class="fas fa-phone"></i></a>
          <a href="#"><i class="fas fa-envelope"></i></a>
        </div>
      </div>
      <div class="hamburger" @click="toggleMenu">
        <i class="fas" :class="isMenuOpen ? 'fa-times' : 'fa-bars'"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data() {
    return {
      isMenuOpen: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
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
  z-index: 1002;
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
  padding: 10px 20px;
  background-color: transparent;
  z-index: 1001;
  position: relative;
  margin-top: 50px;
  padding: 20px 150px;
}

.nav .logo {
  display: flex;
  align-items: center;
  margin-left: 200px;
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
  margin-left: 0; /* Remove margin to make nav items closer */
}

.nav .menu a {
  text-decoration: none;
  color: #333;
  font-size: 1.1rem;
  display: inline-block;
  padding: 10px 10px; /* Adjust padding to ensure tabs are close together */
  text-align: center;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropbtn {
  font-size: 1.1rem;
  border: none;
  cursor: pointer;
  font-family: 'Athiti', sans-serif;
  background-color: transparent;
  color: #333;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 300px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: flex;
  align-items: center;
}

.dropdown-content a i {
  margin-right: 10px;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.social-icons {
  display: flex;
  margin-left: 40px;
  margin-right: 200px;
}

.social-icons a {
  margin-left: 0; /* Remove margin to make social icons closer */
  color: #333;
  font-size: 18px;
}

.hamburger {
  display: none;
  cursor: pointer;
  font-size: 24px;
  margin-left: auto;
}

@media (max-width: 768px) {
  .nav {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .nav .logo {
    margin-left: 0;
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
    color: #fff;
  }

  .dropdown-content a:hover {
    background-color: #444;
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

@media (max-width: 480px) {
  .nav {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }

  .nav .logo {
    margin-left: 0;
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

  .dropbtn {
    background-color: #4CAF50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    font-family: 'Athiti', sans-serif;
  }

  .dropdown-content {
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    z-index: 1;
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

  .dropdown:hover .dropbtn {
    background-color: #3e8e41;
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
}

.active-tab {
  background-color: white;
  border-radius: 15px;
   /* Reduce padding to make the button shorter */
}
</style>
