import { createTRPCClient } from '@trpc/client'
import type { AppRouter } from '../server/trpc/routers'

declare module '#app' {
  interface NuxtApp{
    $trpc:ReturnType<typeof createTRPCClient<AppRouter>>
  }
}

export {}