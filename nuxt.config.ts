export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  
  devServer: {
    port: 3080
  },

  nitro: {
    preset: 'static'
  },

  router: {
    base: '/'
  },
  
  app: {
    head: {
      title: 'TuringThink少儿编程网',
      htmlAttrs: {
        lang: 'zh-CN'
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'keywords', content: 'TuringThink, 少儿编程, 青少年编程, NOIP, 云南少儿编程, 昆明少儿编程' },
        { name: 'description', content: 'TuringThink是一家具有STEAM教育理念的少儿编程教育公司，致力于激发创造力, 逻辑思维能力和多维度的学习能力。' },
        { name: 'msvalidate.01', content: 'C4C76667ECDA8AD727FCBC540F131589' },
        { name: 'sogou_site_verification', content: 'CBnAlcBomI' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/img/favicon.ico' },
        { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css' },
        { rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }
      ],
      script: [
        { src: 'https://code.jquery.com/jquery-3.4.1.min.js' },
        { src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js' },
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js', defer: true }
      ]
    }
  },

  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/scss/style.css'
  ],
})