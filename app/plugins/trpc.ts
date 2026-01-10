import { defineNuxtPlugin } from "nuxt/app";
import { trpc } from "../utils/trpc";
import type { AppRouter } from "../../server/trpc/routers"
import { createTRPCClient } from "@trpc/client";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('trpc',trpc)
  return {
    provide:{
      trpc
    }
  }
})