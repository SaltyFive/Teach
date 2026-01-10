import { createTRPCNuxtHandler } from 'trpc-nuxt/server'
import { appRouter } from '~~/server/trpc/routers'
const createContext = () => ({});

export default createTRPCNuxtHandler({
  router: appRouter,
  createContext,
});