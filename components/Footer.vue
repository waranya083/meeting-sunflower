<template>
  <footer @click="closeDropdown">
    <div class="footer-content">
      <div class="footer-section get-in-touch">
        <h3>Get in Touch</h3>
        <div v-if="websiteData && websiteData.address">
          <p v-html="formattedAddress"></p>
          <br>
        </div>
        <div v-if="websiteData && websiteData.phone1">
          <p>โทร: {{ websiteData.phone1 }}</p>
        </div>
      </div>
      <div class="footer-section learn-more">
        <h3>Learn More</h3>
        <ul>
          <li><nuxt-link to="/">Home</nuxt-link></li>
          <li><nuxt-link to="/about">About us</nuxt-link></li>
          <li class="dropdown-service" @click.stop>
            <a href="javascript:void(0)" class="dropbtn" @click="toggleDropdown">
              Service
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </a>
            <div class="dropdown-content" :class="{ 'dropdown-open': isDropdownOpen }">
              <nuxt-link to="/home" class="dropdown-link">Home</nuxt-link>
              <nuxt-link to="/condo" class="dropdown-link">Condo</nuxt-link>
            </div>
          </li>
          <li><nuxt-link to="/portfolio">Portfolio</nuxt-link></li>
          <li><nuxt-link to="/contact">Contact us</nuxt-link></li>
        </ul>
      </div>
      <div class="footer-section email">
        <h3>E-Mail</h3>
        <div v-if="websiteData && Object.keys(websiteData).length">
          <p><a href="mailto:contact@sunflowerhouse.com">{{ websiteData.email1 }}</a></p>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2024 Sunflower House. All rights reserved</p>
      <div class="social-icons">
        <a href="#"><i class="fab fa-facebook"></i></a>
        <a href="#"><i class="fab fa-line"></i></a>
        <a :href="'tel:' + websiteData.phone1"><i class="fas fa-phone"></i></a>
        <a :href="'mailto:' + websiteData.email1"><i class="fas fa-envelope"></i></a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  data() {
    return {
      websiteData: {},
      isDropdownOpen: false,
    };
  },
  computed: {
    formattedAddress() {
      // แปลง \r\n หรือ \n เป็น <br> เพื่อแสดงการขึ้นบรรทัดใหม่
      if (this.websiteData.address) {
        return this.websiteData.address.replace(/\r?\n/g, '<br>');
      }
      return '';
    }
  },
  async mounted() {
    const cachedData = localStorage.getItem('websiteData');
    if (cachedData) {
      this.websiteData = JSON.parse(cachedData);
      return;
    }

    try {
      const websiteResponse = await this.$axios.get('/website');
      this.websiteData = websiteResponse.data;
      localStorage.setItem('websiteData', JSON.stringify(this.websiteData));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
  methods: {
    toggleDropdown(event) {
      event.preventDefault();
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    closeDropdown() {
      this.isDropdownOpen = false;
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Athiti:wght@200;300;400;500;600;700&family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

html,
body {
  display: flex;
  flex-direction: column;
}

#app {
  display: flex;
  flex-direction: column;
  flex: 1;
}

footer {
  background-color: #333;
  color: #fff;
  text-align: left;
  width: 100%;
  font-family: 'Athiti', sans-serif;
  box-sizing: border-box;
  position: relative;
  margin-top: auto;
}

.footer-content {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1200px;
  margin: auto;
  margin-bottom: 40px;
  padding-top: 2%;
}

.footer-section {
  flex: 1;
  min-width: 250px;
  text-align: left;
}

.footer-section.get-in-touch {
  margin-right: 0px;
}

.footer-section.learn-more {
  margin-right: 150px;
  margin-left: 250px;
}

.footer-section.email {
  margin-right: -80px;
  margin-left: 0px;
}

.footer-section.email a {
  color: white;
  text-decoration: none;
}

.footer-section h3 {
  margin-bottom: 10px;
  font-size: 1.2rem;
  color: #fff;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 5px;
}

.footer-section ul li a {
  color: #fff;
  text-decoration: none;
}

.footer-bottom {
  border-top: 1px solid #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  text-align: left;
  max-width: 1200px;
  margin: auto;
  padding-top: 1%;
}

.footer-bottom p {
  margin: 0;
  flex: 1;
}

.footer-bottom .social-icons {
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-right: 10px;
}

.footer-bottom .social-icons a {
  color: #ffffff;
  font-size: 16px;
}

.social-icons {
  color: #fff;
}

.dropdown-service {
  position: relative;
  display: inline-block;
}

.dropdown-service .dropbtn {
  cursor: pointer;
  color: white;
  text-decoration: none;
  font-size: 1rem;
  display: flex;
  align-items: center;
}

.dropdown-service .dropbtn svg {
  margin-left: 5px;
}

.dropdown-service .dropdown-content {
  display: none;
  position: absolute;
  background-color: #444;
  min-width: 100px;
  z-index: 1;
}

.dropdown-service .dropdown-content.dropdown-open {
  display: block;
}

.dropdown-service .dropdown-link {
  color: #ffffff;
  text-decoration: none;
  display: block;
  padding: 8px 10px;
}

.dropdown-service:hover .dropdown-content {
  display: block;
}

.dropdown-service .dropdown-link:hover {
  background-color: transparent;
  border-radius: none;
}

.dropdown-service .dropdown-link.nuxt-link-exact-active {
  background-color: inherit;
  color: #ffffff;
}

.nuxt-link-exact-active {
  background-color: inherit !important;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-section {
    text-align: left;
  }

  .footer-section.learn-more {
    margin-left: 0;
    margin-right: 0;
  }

  .footer-section.email {
    margin-left: 0;
  }

  .footer-bottom {
    flex-direction: row;
    align-items: center;
    text-align: left;
  }

  .footer-bottom p {
    margin-bottom: 0;
    flex: 1;
  }

  .footer-bottom .social-icons {
    justify-content: flex-end;
    margin-right: 0;
    font-size: 14px;
    gap: 10px;
  }
}

@media (max-width: 480px) {
  .footer-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .footer-section {

    text-align: left;
  }

  .footer-section.learn-more {
    margin-left: 0;
    margin-right: 0;
  }

  .footer-section.email {
    margin-left: 0;
  }

  .footer-bottom {
    flex-direction: row;
    align-items: center;
    text-align: left;
  }

  .footer-bottom p {
    margin-bottom: 0;
    flex: 1;
  }

  .footer-bottom .social-icons {
    justify-content: flex-end;
    margin-right: 0;
    font-size: 14px;
  }
}

/* xl Desktop */
@media (min-width: 1200px) {
  .footer-section h3 {
    font-size: 1.4rem;
  }

  .footer-section ul li a {
    font-size: 1.1rem;
  }

  .footer-bottom p {
    font-size: 1.1rem;
  }

  .footer-bottom .social-icons a {
    font-size: 18px;
  }
}

/* lg tablet horizon */
@media (min-width: 992px) and (max-width: 1199px) {
  .footer-section {
    text-align: left !important;
    /* Align all footer sections to the left */
    margin-left: 0 !important;
    /* Remove any left margin */
    margin-right: 50px !important;
    /* Remove any right margin */
  }

  .footer-section h3 {
    font-size: 1.3rem;
  }

  .footer-section ul li a {
    font-size: 1rem;
  }

  .footer-bottom p {
    font-size: 1rem;
  }

  .footer-bottom .social-icons a {
    font-size: 16px;
  }
}

/* md tablet */
@media (min-width: 768px) and (max-width: 991px) {
  .footer-section h3 {
    font-size: 1.2rem;
  }

  .footer-section ul li a {
    font-size: 0.9rem;
  }

  .footer-bottom p {
    font-size: 0.9rem;
  }

  .footer-bottom .social-icons a {
    font-size: 15px;
  }
}

/* sm phone */
@media (max-width: 768px) {
  .footer-section h3 {
    font-size: 1.1rem;
  }

  .footer-section ul li a {
    font-size: 0.8rem;
  }

  .footer-bottom p {
    font-size: 0.8rem;
  }

  .footer-bottom .social-icons a {
    font-size: 14px;
  }
}

/* xs phone */
@media (max-width: 575px) {
  .footer-section h3 {
    font-size: 1rem;
  }

  .footer-section ul li a {
    font-size: 0.7rem;
  }

  .footer-bottom p {
    font-size: 0.7rem;
  }

  .footer-bottom .social-icons a {
    font-size: 13px;
  }
}
</style>
