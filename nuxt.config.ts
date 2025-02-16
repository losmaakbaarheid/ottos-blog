export default defineNuxtConfig({
  modules: [
    "@nuxt/content",
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "@nuxt/icon",
  ],
  app: {
    head: {
      meta: [
        {
          "http-equiv": 'content-security-policy',
          content: 'upgrade-insecure-requests'
        }
      ],
      script: [
        {
          innerHTML: `
globalThis.remark_config = {
  host: "${process.env.REMARK42_HOST_URL ?? 'http://127.0.0.1:8080'}",
  site_id: "${process.env.REMARK42_SITE_ID ?? 'remark'}"
}
!function(e,n){for(var o=0;o<e.length;o++){var r=n.createElement("script"),c=".js",d=n.head||n.body;"noModule"in r?(r.type="module",c=".mjs"):r.async=!0,r.defer=!0,r.src=remark_config.host+"/web/"+e[o]+c,d.appendChild(r)}}(remark_config.components||["embed"],document);`,
          async: true,
          defer: true
        }
      ]
    }
  },
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
    },
    serverBundle: 'local',
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
