/**
 * nuxt.config.js
 * Nuxt configuration file
 */

export default {
  mode: 'spa',

  head: {
    title: 'EDM Streams',
    htmlAttrs: {
      lang: 'en'
    },

    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'a time table for EDM related live streams' }
    ],

    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  loading: {
    color: '#25c8c8'
  },

  css: [
    '~/assets/styles/main.css'
  ],

  modules: [
    '@nuxtjs/pwa'
  ],

  buildModules: [
    '~/modules/yaml'
  ],

  pwa: {
    manifest: {
      name: 'EDM Streams',
      lang: 'en',
      display: 'standalone'
    },

    meta: {
      nativeUI: true
    },

    workbox: {
      /* workbox options */
    }
  }
}
