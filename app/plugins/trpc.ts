import { defineNuxtPlugin } from "nuxt/app";
import { trpc } from "../utils/trpc";
import type { AppRouter } from "../../server/trpc/routers"
import { createTRPCClient } from "@trpc/client";

export default defineNuxtPlugin(() => {
  return {
    provide:{
      trpc: trpc as ReturnType<typeof createTRPCClient<AppRouter>>,
    }
  }
})