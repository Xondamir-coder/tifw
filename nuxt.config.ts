// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/eslint', '@nuxtjs/google-fonts'],
  googleFonts: {
    display: 'swap',
    //TODO: for soon page only
    families: {
      Itim: true,
      'Russo One': 400
    }
  },
  app: {
    head: {
      titleTemplate: '%s | TIFW'
    }
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "~/assets/scss/abstracts/variables" as vars;
          @use "~/assets/scss/abstracts/mixins" as mix;
          `
        }
      }
    }
  },
  css: ['~/assets/scss/main.scss']
});
