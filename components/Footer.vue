<template>
  <footer>
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
          <li class="dropdown-service">
            <a href="javascript:void(0)" class="dropbtn">Service
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor"
                class="bi bi-chevron-down" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" />
              </svg>
            </a>
            <div class="dropdown-content">
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
        <a href="#"><i class="fas fa-phone"></i></a>
        <a href="#"><i class="fas fa-envelope"></i></a>
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
    try {
      const websiteResponse = await this.$axios.get('/website');
      this.websiteData = websiteResponse.data;
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  },
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Athiti:wght@200;300;400;500;600;700&family=IBM+Plex+Sans+Thai:wght@100;200;300;400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

footer {
  background-color: #333;
  color: #fff;
  padding: 40px 10%;
  text-align: left;
  width: 100%;
  /* Set width to 100% */
  font-family: 'Athiti', sans-serif;
  box-sizing: border-box;
  /* Ensure padding is included in the width */
  position: relative;
  bottom: 0;
}

.footer-content {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1200px;
  /* Set max-width to 1200px */
  margin: auto;
  margin-bottom: 40px;
  /* Center the content */
}

.footer-section {
  flex: 1;
  min-width: 250px;
  text-align: left;
}

.footer-section.get-in-touch {
  margin-right: 20px;
  /* ปรับค่า margin-right เพื่อขยับไปทางขวา */
}

.footer-section.learn-more {
  margin-right: 150px;
  /* ปรับค่า margin-right เพื่อขยับไปทางขวา */
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
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  /* Ensure items stay on the same row */
  margin-top: 20px;
  text-align: left;
  max-width: 1200px;
  /* Set max-width to 1200px */
  margin: auto;
  /* Center the content */
}

.footer-bottom p {
  margin: 0;
  flex: 1;
}

.footer-bottom .social-icons {
  display: flex;
  justify-content: flex-end;
  /* Align icons to the right */
  gap: 15px;
  /* Space between icons */
  margin-right: 10px;
  /* Add margin to move icons further to the right */
}

.footer-bottom .social-icons a {
  color: #ffffff;
  font-size: 16px;
  /* Reduce font size */
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
  /* Ensure font size is the same as other menu items */
  display: flex;
  align-items: center;
}

.dropdown-service .dropbtn svg {
  margin-left: 5px;
  /* Add margin to the left of the SVG icon */
}

.dropdown-service .dropdown-content {
  display: none;
  position: absolute;
  background-color: #444;
  /* Change background color */
  min-width: 100px;
  /* Set minimum width */
  z-index: 1;

}

.dropdown-service .dropdown-link {
  color: #ffffff;
  /* Change text color */
  text-decoration: none;
  display: block;
  padding: 8px 10px;
  /* Adjust padding to make the box smaller */
}

.dropdown-service:hover .dropdown-content {
  display: block;
}

.dropdown-service .dropdown-link:hover {
  background-color: transparent;
  border-radius: none;
  /* Adjust border radius */
}

.dropdown-service .dropdown-link.nuxt-link-exact-active {
  background-color: inherit;
  /* Remove hover and active effect */
  color: #ffffff;
  /* Ensure text color remains the same */
}

.nuxt-link-exact-active {
  background-color: inherit !important;
  /* Ensure no background color change */
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: flex-start;
    /* Align items to the left */
  }

  .footer-section {
    margin-bottom: 20px;
    text-align: left;
    /* Align text to the left */
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
    /* Align items to the center */
    text-align: left;
    /* Align text to the left */
  }

  .footer-bottom p {
    margin-bottom: 0;
    flex: 1;
  }

  .footer-bottom .social-icons {
    justify-content: flex-end;
    /* Align icons to the right */
    margin-right: 0;
    font-size: 14px;
    /* Further reduce font size */
    gap: 0px;
    /* Reduce space between icons */
  }
}

@media (max-width: 480px) {
  .footer-content {
    flex-direction: column;
    align-items: flex-start;
    /* Align items to the left */
  }

  .footer-section {
    margin-bottom: 15px;
    text-align: left;
    /* Align text to the left */
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
    /* Align items to the center */
    text-align: left;
    /* Align text to the left */
  }

  .footer-bottom p {
    margin-bottom: 0;
    flex: 1;
  }

  .footer-bottom .social-icons {
    justify-content: flex-end;
    /* Align icons to the right */
    margin-right: 0;
    font-size: 14px;
    /* Further reduce font size */
  }
}
</style>
