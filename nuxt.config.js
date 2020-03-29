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
    color: '#fff'
  },

  css: [
    '~/assets/styles/main.css'
  ],

  buildModules: [
    '~/modules/yaml'
  ]
}
