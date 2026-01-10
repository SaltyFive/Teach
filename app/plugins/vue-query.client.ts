import { QueryClient, VueQueryPlugin } from '@tanstack/vue-query'
import { defineNuxtPlugin } from 'nuxt/app'
import type { NuxtApp } from 'nuxt/app'

export default defineNuxtPlugin((nuxtApp) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 2,
        refetchOnWindowFocus: false
      }
    }
  })

  nuxtApp.vueApp.use(VueQueryPlugin, { queryClient })
})