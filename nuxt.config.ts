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
  icon: {
    aliases: {
      'dark-mode': 'ph:moon-bold',
      'light-mode': 'ph:sun-bold'
    }
  },
  content: {
    preview: {
      api: "https://api.nuxt.studio",
    },
    build: {
      markdown: {
        highlight: {
          // See the available themes on https://github.com/shikijs/shiki/blob/main/docs/themes.md#all-theme
          theme: {
            dark: 'github-dark',
            default: 'github-light'
          }
        }
      }
    }
  },
});
