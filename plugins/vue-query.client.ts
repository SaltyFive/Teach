import { QueryClient,VueQueryPlugin } from '@tanstack/vue-query'

export default defineNuxtPlugin((nuxtapp) => {
  const queryClient = new QueryClient({
    defaultOptions:{
      queries:{
        retry:2,
        refetchOnWindowFocus:false
      }
    }
  })


  nuxtApp.vueapp.use(VueQueryPlugin,{ queryClient })
})