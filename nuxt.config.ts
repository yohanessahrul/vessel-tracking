// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      mapboxKey: process.env.NUXT_PUBLIC_MAPBOX_KEY,
    },
  },
  devtools: { enabled: true },
  modules: [ '@nuxtjs/tailwindcss' ],
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: 'https://api.mapbox.com/mapbox-gl-js/v3.4.0/mapbox-gl.css',
        }
      ],
      script: [
        {
          src: 'https://api.mapbox.com/mapbox-gl-js/v3.4.0/mapbox-gl.js'
        }
      ]
    }
  },
  
})
