export default defineNuxtConfig({
  extends: 'content-wind',

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2025-01-11',
  content: {
    documentDriven: true,
  }
})