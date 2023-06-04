// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
     modules: [
      '@nuxtjs/tailwindcss',
      '@element-plus/nuxt',
      'nuxt-icon'
    ],
  elementPlus: { /** Options */ },
  app: {
    head: {
      title: "Alibaba",
      link: [
        {
          rel: "stylesheet",
          href: "https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
        },

        {
          rel: "icon",
          href: "./public/favico.ico"
        }
      ],
      meta: [
        { name: "description", content: "Alibaba" },
        { name: "author", content: "Nuxt3 app " }
      ]
    }
  }
})
