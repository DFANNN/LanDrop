// https://nuxt.com/docs/api/configuration/nuxt-config

import tailwindcss from '@tailwindcss/vite'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['./app/styles/index.css'],
  modules: ['@nuxt/ui'],
  vite: {
    plugins: [tailwindcss()]
  },
  devServer: {
    port: 3100,
    host: '0.0.0.0'
  }
})
