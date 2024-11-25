// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ["~/assets/sass/app.sass"],
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      titleTemplate: "%s | MontyFinance",
      htmlAttrs: {
        lang: "en",
      },
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "images/favicon-64x64.png",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "images/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/x-icon",
          href: "images/favicon-16x16.png",
        },
        {
          rel: "apple-touch-icon",
          type: "image/png",
          href: "images/apple-touch-icon-180x180.png",
        },
      ],
      meta: [
        { name: "theme-color", content: "#32393C" },
        { name: "format-detection", content: "telephone=no" },
        { name: "author", content: "MontyFinance" },
        { name: "og:site_name", content: "MontyFinance" },
        { name: "og:image:alt", content: "MontyFinance" },
        { name: "og:image:width", content: "1200" },
        { name: "og:image:height", content: "630" },
      ],
    },
    //pageTransition: { name: 'page', mode: 'out-in' }
  },
  pages: true,
  hooks: {
    'pages:extend'(pages) {
      pages.push({
        name: 'lebanon',
        path: '/lb',
        file: '~/pages/index.vue', // Reuse the index.vue file for Lebanon
      });
      pages.push({
        name: 'europe',
        path: '/eu',
        file: '~/pages/index.vue', // Reuse the index.vue file for Europe
      });
    },
  },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image",
    "@nuxt/icon",
    "@nuxtjs/sitemap",
    "nuxt-aos",
    "@nuxtjs/google-fonts",
  ],
  googleFonts: {
    families: {
      Lora: [400, 500],
      'Libre Franklin': '400..700'
    }
  },
  devServer: {
    host: '0.0.0.0',
    https: false,
  },
})