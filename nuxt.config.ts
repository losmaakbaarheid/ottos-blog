export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
  ],

  // https://color-mode.nuxtjs.org
  colorMode: {
    classSuffix: "",
  },
  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-11",
  content: {
    preview: {
      api: "https://api.nuxt.studio",
    },
    highlight: {
      // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
      theme: {
        dark: 'github-dark',
        default: 'github-light'
      }
    }
  },
});
