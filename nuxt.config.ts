// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    pageTransition: {
      name: 'page',
      mode: 'out-in', // default
    },
    layoutTransition: {
      name: 'layout',
      mode: 'out-in', // default
    },
  },
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: ['@nuxtjs/eslint-module', '@pinia/nuxt', '@vueuse/nuxt'],
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  runtimeConfig: {
    // Keys within public are also exposed client-side
    public: {
      apiBaseUrl: process.env.NUXT_PUBLIC_API_BASE_URL,
      sentryRelease: process.env.SENTRY_RELEASE,
      sentryAuthToken: process.env.SENTRY_AUTH_TOKEN,
      segmentWriteKey: process.env.NUXT_SEGEMENT_WRITE_KEY,
      segmentDigidomSite: process.env.NUXT_DIGIDOM_SITE,
      adminUrl: process.env.NUXT_NEW_ADMIN_URL,
      crispId: process.env.NUXT_CRISP_WEBSITE_ID,
      sentryDns: process.env.NUXT_SENTRY_DNS,
      gtmId: process.env.NUXT_GTM_ID,
    },
  },
});
