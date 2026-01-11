<template>
  <Card>
    <h1>Hello There</h1>
  </Card>
</template>

<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query';
import { useNuxtApp, useRouter } from 'nuxt/app';

const router = useRouter()
// Import your trpc client type, adjust the import path as needed
// import type { AppRouter } from '~/server/trpc/router' 
// import type { inferRouterInputs, inferRouterOutputs } from '@trpc/server'
// import type { NuxtApp } from '#app'
// import type { TRPCClient } from '@trpc/client'

// If you have a type for $trpc, use it here. Otherwise, use 'any' as a temporary workaround:
const { $trpc } = useNuxtApp()
const { mutate:loginMutation,isPending } = useMutation({
  mutationFn:async (credential: {username:string,password:string}) => {
    return await $trpc.auth.loginUser.mutate(credential)
  }
})

</script>