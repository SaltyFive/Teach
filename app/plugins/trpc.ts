import { defineNuxtPlugin } from "nuxt/app";
import { trpc } from "../utils/trpc";
import type { AppRouter } from "../../server/trpc/routers"
import { createTRPCClient } from "@trpc/client";

export default defineNuxtPlugin((nuxtApp) => {
  console.log("是否有trpc",trpc)
  nuxtApp.provide('trpc',trpc)
  return {
    provide:{
      trpc
    }
  }
})