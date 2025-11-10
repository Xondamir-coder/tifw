// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: [
    '@nuxt/eslint',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/seo',
    'nuxt-swiper'
  ],
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
  css: ['~/assets/scss/main.scss'],
  app: {
    head: {
      titleTemplate: '%s | TIFW'
    }
  },
  googleFonts: {
    display: 'swap',
    families: {
      'Prosto One': [400],
      Inter: [100, 200, 300, 400, 500, 600, 700, 800, 900]
    }
  },
  seo: {
    meta: {
      author: 'https://spacelabs.studio',
      publisher: 'Spacelabs'
    }
  },
  i18n: {
    defaultLocale: 'en',
    baseUrl: 'https://www.tifw.uz/',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    locales: [
      {
        code: 'en',
        language: 'en-US',
        name: 'English',
        file: 'en.json'
      },
      {
        code: 'ru',
        language: 'ru-RU',
        name: 'Русский',
        file: 'ru.json'
      },
      {
        code: 'uz',
        language: 'uz-UZ',
        name: "O'zbekcha",
        file: 'uz.json'
      }
    ]
  }
});