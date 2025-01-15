import axios from 'axios';

export default async () => {
  let websiteTitle = 'meeting-sunflower'; // ค่าเริ่มต้น
  let faviconUrl = '/favicon.ico'; // ค่าเริ่มต้น

  try {
    // ดึงข้อมูลจาก API
    const response = await axios.get('http://127.0.0.1:8000/api/website');
    if (response.data) {
      if (response.data.title) {
        websiteTitle = response.data.title; // ใช้ title จาก API
      }
      if (response.data.favicon) {
        faviconUrl = response.data.favicon; // ใช้ favicon จาก API
      }
    }
  } catch (error) {
    console.error('Error fetching website data:', error);
  }

  return {
    // Global page headers
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
        { rel: 'icon', type: 'image/x-icon', href: faviconUrl } // ใช้ favicon ที่ดึงมาจาก API
      ]
    },

    // Global CSS
    css: [
    ],

    // Plugins to run before rendering page
    plugins: [
    ],

    // Auto import components
    components: true,

    // Modules for dev and build
    buildModules: [
      '@nuxtjs/tailwindcss',
    ],

    // Modules
    modules: [
      '@nuxtjs/axios'
    ],
    axios: {
      baseURL: 'http://127.0.0.1:8000/api', // URL API ของ Laravel
    },

    // Build Configuration
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
