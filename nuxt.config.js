import en from "./locales/en.json";
import oz from "./locales/oz.json";
import ru from "./locales/ru.json";

export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target: https://go.nuxtjs.dev/config-target
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Каналсервис",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // CSS file in the project
    "~/assets/css/main.css",
    // SCSS file in the project
    "~/assets/css/main.scss",
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~/plugins/chart.js", mode: "client" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/style-resources",
  ],

  styleResources: {
    scss: ["~assets/scss/mixins.scss", "~assets/scss/variables.scss"],
  },

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
    "@nuxtjs/i18n",
    "nuxt-izitoast",
  ],

  i18n: {
    locales: ["en", "oz", "ru"],
    strategy: "no_prefix",
    defaultLocale: "ru",
    vueI18n: {
      fallbackLocale: "ru",
      messages: {
        en: en,
        oz: oz,
        ru: ru,
      },
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  router: {
    middleware: [],
  },

  izitoast: {
    position: "bottomRight",
    transitionIn: "bounceInLeft",
    transitionOut: "fadeOutRight",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
