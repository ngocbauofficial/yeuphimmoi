export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Anime Trung Quốc',
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
    'video.js/dist/video-js.css'
  ],
ssr:true,
loadingIndicator: {
  name: 'folding-cube',
  color: '#3B8070',
  background: '#18191b'
},
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src:  '~plugins/axios.js', mode: 'client' },
    { src: '~plugins/vue-play-video.js', ssr: true },
    //category
    { src: '~/services/CategoryService.js',mode:'client' },
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
    '@nuxtjs/toast',
  ],
  axios: {
    baseURL: 'https://localhost:44381/',
    // proxy: true
  },
  toast: {
    position: 'top-right',
    duration:2000,
},
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
