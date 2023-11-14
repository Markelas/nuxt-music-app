// https://nuxt.com/docs/api/configuration/nuxt-config
import {resolve} from "path";
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      title: 'Music app by Mark',
      meta: [{
        name: "Music app",
        content: 'This is a repository for test task'
      }]
    }
  },
  devtools: { enabled: true },
  alias: {
    "@" :resolve(__dirname, '/'),
  },
  postcss: {
    plugins: {
      autoprefixer: {},
    },
  },
  css: ["~/assets/main.css"],
  modules: ['@pinia/nuxt', '@nuxt/content', 'vuetify-nuxt-module'],
  build:{
    transpile: ['vuetify'],
  },
   ssr: true,
});