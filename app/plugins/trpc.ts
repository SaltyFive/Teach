import { defineNuxtPlugin } from "nuxt/app";
import { createTRPCNuxtClient, httpBatchLink } from "trpc-nuxt/client";
import type { AppRouter } from "~/server/trpc/routers";

export default defineNuxtPlugin(() => {
  const trpc = createTRPCNuxtClient<AppRouter>({
    links:[httpBatchLink({ url:"/api/trpc" })],
  });
  console.log("有没有trpc",trpc)
  
  return {
    provide:{ trpc }
  }
})