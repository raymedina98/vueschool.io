// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
    '@nuxtjs/tailwindcss',
    'nuxt-icon'
  ],
  googleFonts: {
    families: {
      Rubik: [400, 500, 700],
      Inter: [400]
    },
    display: 'swap'
  }
})
