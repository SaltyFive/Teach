import { createTRPCNuxtHandler } from 'trpc-nuxt/server';
import { appRouter } from '~/server/trpc/routers';
import { createContext } from '~/server/trpc/trpc';

export default createTRPCNuxtHandler({
  router:appRouter,
  createContext
})