<template>
  <div>
    <div class="kc_fab_overlay" v-if="showSubButtons" @click="toggleSubButtons"></div>
    <div class="kc_fab_wrapper">
      <button class="kc_fab_main_btn" @click="toggleSubButtons" :class="{ 'clicked': showSubButtons }">
        <i class="fa-solid fa-comment-dots"></i>
      </button>
      <div class="sub_fab_btns_wrapper" :class="{ show: showSubButtons }">
        <button v-for="(link, index) in links" :key="index" :style="{ backgroundColor: link.bgcolor }" :data-link-title="link.title" class="zoom-effect">
          <span class="fab-title">{{ link.title }}</span>
          <a :href="link.url || '#'" :target="link.target || '_self'" v-html="link.icon" class="fab-icon"></a>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      links: [
        // {
        //   "bgcolor": "#E6BE5F",
        //   "color": "#fff",
        //   "icon": "<i class='fa-solid fa-comment-dots fa-xs' style='color: #ffffff;'></i>",
        //   "title": "ข้อความ"
        // },
        {
          "url": "#",
          "bgcolor": "#1877F2",
          "color": "#fff",
          "icon": "<i class='fab fa-facebook-f'></i>",
          "target": "_blank",
          "title": "แฟนเพจ"
        },
        {
          "url": "#",
          "bgcolor": "#67B845",
          "color": "#fff",
          "icon": "<svg xmlns='http://www.w3.org/2000/svg' width='25' height='25' fill='#ffffff' class='bi bi-line' viewBox='0 0 16 16'>\
            <path d='M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0M5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.15.15 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157m.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832l-.013-.015v-.001l-.01-.01-.003-.003-.011-.009h-.001L7.88 4.79l-.003-.002-.005-.003-.008-.005h-.002l-.003-.002-.01-.004-.004-.002-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.2.2 0 0 0 .039.038l.001.001.01.006.004.002.008.004.007.003.005.002.01.003h.003a.2.2 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.16.16 0 0 0-.108.044h-.001l-.001.002-.002.003a.16.16 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.16.16 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z' />\
            </svg>",
          "target": "_blank",
          "title": "ไลน์ติดต่อ"
        },
        {
          "url": "#",
          "bgcolor": "#009AD9",
          "color": "#fff",
          "icon": "<i class='fas fa-phone-alt'></i>",
          "target": "_blank",
          "title": "เบอร์โทร"
        },
        {
          "url": "#",
          "bgcolor": "#BB3428",
          "color": "#fff",
          "icon": "<i class='fa-solid fa-envelope'></i>",
          "target": "_blank",
          "title": "Email"
        }
      ],
      showSubButtons: false
    };
  },
  methods: {
    toggleSubButtons() {
      this.showSubButtons = !this.showSubButtons;
    }
  },
  mounted() {
    // Dynamically load the kc.fab.min.js script
    const script = document.createElement('script');
    script.src = '/src/kc.fab.min.js';
    script.onload = () => {
      setTimeout(() => {
        const fabWrapper = document.querySelector('.kc_fab_wrapper');
        if (fabWrapper && typeof fabWrapper.kc_fab === 'function') {
          fabWrapper.kc_fab(this.links);
        }
      }, 1000);
    };
    document.head.appendChild(script);
  }
}
</script>

<style scoped>
.kc_fab_overlay {
  z-index: 9998;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.43); /*dim the background*/
}

.kc_fab_wrapper {
  z-index: 9999;
  width: 100%;
  height: 240px;
  position: fixed;
  right: 0px;
  bottom: 0px;
  pointer-events: none;
}

.sub_fab_btns_wrapper {
  right: 0;
  bottom: 75px;
  position: absolute;
  display: none;
  opacity: 0;
  transition: opacity 0.3s ease-in;
  pointer-events: all;
  flex-direction: column-reverse; /* Arrange buttons in reverse column order */
}

.sub_fab_btns_wrapper.show {
  display: flex;
  opacity: 1;
}

.sub_fab_btns_wrapper button {
  width: 60px;
  height: 60px;
  border-radius: 100%;
  background: #F44336;
  margin-bottom: 12px;
  margin-right: 17px;
  padding: 0;
  border: none;
  outline: none;
  color: #FFF;
  font-size: 20px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.3s;
  pointer-events: all;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

button.kc_fab_main_btn {
  background-color: #F44336;
  width: 60px;
  height: 60px;
  border-radius: 100%;
  right: 16px;
  bottom: 16px;
  position: absolute;
  padding: 0;
  border: none;
  outline: none;
  color: #FFF;
  font-size: 36px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  transition: 0.3s;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  pointer-events: all;
}

.kc_fab_main_btn.clicked {
  animation: clickEffect 0.3s ease-in-out;
}

.kc_fab_main_btn.span {
  transition: 0.5s;
}

.ink {
  display: block;
  position: absolute;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 100%;
  transform: scale(0);
  pointer-events: all;
}

.animate {
  animation: ripple 0.65s linear;
}

@keyframes ripple {
  100% {
    opacity: 0;
    transform: scale(2.5);
  }
}

@keyframes clickEffect {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.zoom-effect {
  transition: transform 0.3s ease-in-out;
}

.zoom-effect:hover {
  transform: scale(1.1);
}

.fab-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
}

.fab-title {
  position: absolute;
  left: -100px;
  width: 90px; /* Set a fixed width */
  white-space: nowrap;
  background-color: rgba(0, 0, 0, 0.44);
  color: white;
  padding: 3px 5px; /* Adjust padding */
  border-radius: 5px;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  text-align: center; /* Center align text */
  font-size: 1rem; /* Reduce font size */
}

button:hover .fab-title {
  opacity: 1;
}
</style>
