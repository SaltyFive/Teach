import { initTRPC } from '@trpc/server'
import { H3Event } from 'h3'
export const createContext = (opts:any) => {
  return {
    event: opts.event as H3Event
  }
}

type Context = Awaited<ReturnType<typeof createContext>>

const t = initTRPC.context<Context>().create()
export const router = t.router
export const publicProcedure = t.procedure
export const middleware = t.middleware

