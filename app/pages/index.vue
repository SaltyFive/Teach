<template>
  <Card>
    <h1>Hello There</h1>
  </Card>
</template>

<script setup lang="ts">
import { useMutation } from '@tanstack/vue-query';

const router = useRouter()
const { $trpc } = useNuxtApp()

const { mutate:loginMutation,isPending } = useMutation({
  mutationFn:async (credential: {username:string,password:string}) => {
    return await $trpc.auth.loginUser.mutate(credential)
  }
})

</script>