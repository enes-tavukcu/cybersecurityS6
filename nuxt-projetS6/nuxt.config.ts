// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-02-03",
  devtools: { enabled: true }, 
  css: [
    '@/assets/main.scss'
  ],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/assets/foundations/variables" as *;
            @use "@/assets/foundations/functions" as *;
            @use "@/assets/foundations/mixins" as *;
          `,
        }
      }
    }
  },

  runtimeConfig: {
    public: {
      supabaseUrl: process.env.SUPABASE_URL,
      supabaseKey: process.env.SUPABASE_KEY,
    },
  },
})