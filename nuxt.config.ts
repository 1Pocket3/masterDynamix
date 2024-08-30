// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  ssr: false,
  css: ["@/assets/css/tailwind.css", "@/assets/scss/main.scss"],
  devtools: { enabled: true },
  modules: ["@hypernym/nuxt-gsap", "@nuxt/image"],
  gsap: {
    composables: true,
    provide: false,
    extraPlugins: {
      scrollTrigger: true,
      text: true,
    },
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  image: {
    inject: true,
    format: ["jpeg", "png", "webp", "svg"],
    dir: "assets/images",
  },
});
