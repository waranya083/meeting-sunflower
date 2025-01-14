import axios from 'axios';

<<<<<<< HEAD
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'swiper/swiper-bundle.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/axios'
  ],
  axios: {
    baseURL: 'http://127.0.0.1:8000/api', // URL API ของ Laravel
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    extend(config, ctx) {
      config.module.rules.push({
        test: /\.ico$/,
        loader: 'file-loader',
        options: {
          name: '[name].[hash:7].[ext]'
        }
      });
=======
export default async () => {
  let websiteTitle = 'meeting-sunflower'; // ค่าเริ่มต้น

  try {
    // ดึงข้อมูลจาก API
    const response = await axios.get('http://127.0.0.1:8000/api/website');
    if (response.data && response.data.title) {
      websiteTitle = response.data.title; // ใช้ title จาก API
>>>>>>> f8cf6f5 (เพิ่ม banner)
    }
  } catch (error) {
    console.error('Error fetching website title:', error);
  }

  return {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
      title: websiteTitle, // ตั้งค่า title จาก API
      htmlAttrs: {
        lang: 'en'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
        { name: 'format-detection', content: 'telephone=no' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ]
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
      // https://go.nuxtjs.dev/tailwindcss
      '@nuxtjs/tailwindcss',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
      '@nuxtjs/axios'
    ],
    axios: {
      baseURL: 'http://127.0.0.1:8000/api', // URL API ของ Laravel
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
      extend(config, ctx) {
        config.module.rules.push({
          test: /\.ico$/,
          loader: 'file-loader',
          options: {
            name: '[name].[hash:7].[ext]'
          }
        });
      }
    },

    _layers: []
  };
};
