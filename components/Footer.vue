<template>
  <footer>
    <div class="footer-content">
      <div class="footer-section get-in-touch">
        <h3>Get in Touch</h3>
        <p>
          บริษัท มินิเวนเจอร์ จำกัด (สำนักงานหลัก) เลขที่ 187/18 หมู่ 4 ต.บางพลีใหญ่
          อ.บางพลี จ.สมุทรปราการ <br>
          10540 ประเทศไทย <br><br>
          โทร: 064-459-9997
        </p>
      </div>
      <div class="footer-section learn-more">
        <h3>Learn More</h3>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">About us</a></li>
          <li><a href="#">Service</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact us</a></li>
        </ul>
      </div>
      <div class="footer-section email">
        <h3>E-Mail</h3>
        <p><a href="mailto:contact@sunflowerhouse.com">contact@sunflowerhouse.com</a></p>
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
  name: 'FooterComponent'
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
  width: 100%; /* Set width to 100% */
  font-family: 'Athiti', sans-serif;
  box-sizing: border-box; /* Ensure padding is included in the width */
  position: relative;
  bottom: 0;
}

.footer-content {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  max-width: 1200px; /* Set max-width to 1200px */
  margin: auto; /* Center the content */
}

.footer-section {
  flex: 1;
  min-width: 250px;
  text-align: left;
}

.footer-section.get-in-touch {
  margin-right: 10px; /* ปรับค่า margin-right เพื่อขยับไปทางขวา */
}

.footer-section.learn-more {
  margin-right: 50px; /* ปรับค่า margin-right เพื่อขยับไปทางขวา */
  margin-left: 200px; /* เพิ่ม margin-left เพื่อขยับไปทางขวา */
}

.footer-section.email {
  margin-left: 160px; /* เพิ่ม margin-left เพื่อขยับไปทางขวา */
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
  flex-wrap: nowrap; /* Ensure items stay on the same row */
  margin-top: 20px;
  text-align: left;
  max-width: 1200px; /* Set max-width to 1200px */
  margin: auto; /* Center the content */
}

.footer-bottom p {
  margin: 0;
  flex: 1;
}

.footer-bottom .social-icons {
  display: flex;
  justify-content: flex-end; /* Align icons to the right */
  gap: 15px; /* Space between icons */
  margin-right: 10px; /* Add margin to move icons further to the right */
}

.footer-bottom .social-icons a {
  color: #ffffff;
  font-size: 16px; /* Reduce font size */
}

.social-icons {
  color: #fff;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    align-items: flex-start; /* Align items to the left */
  }

  .footer-section {
    margin-bottom: 20px;
    text-align: left; /* Align text to the left */
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
    align-items: center; /* Align items to the center */
    text-align: left; /* Align text to the left */
  }

  .footer-bottom p {
    margin-bottom: 0;
    flex: 1;
  }

  .footer-bottom .social-icons {
    justify-content: flex-end; /* Align icons to the right */
    margin-right: 0;
    font-size: 14px; /* Further reduce font size */
    gap: 0px; /* Reduce space between icons */
  }
}

@media (max-width: 480px) {
  .footer-content {
    flex-direction: column;
    align-items: flex-start; /* Align items to the left */
  }

  .footer-section {
    margin-bottom: 15px;
    text-align: left; /* Align text to the left */
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
    align-items: center; /* Align items to the center */
    text-align: left; /* Align text to the left */
  }

  .footer-bottom p {
    margin-bottom: 0;
    flex: 1;
  }

  .footer-bottom .social-icons {
    justify-content: flex-end; /* Align icons to the right */
    margin-right: 0;
    font-size: 14px; /* Further reduce font size */
  }
}
</style>
