import { createTRPCNuxtHandler } from 'trpc-nuxt/server'
import { appRouter } from '../../trpc/routers'
const createContext = () => ({});

export default createTRPCNuxtHandler({
  router: appRouter,
  createContext,
});