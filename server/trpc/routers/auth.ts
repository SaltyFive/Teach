import { router,publicProcedure } from "../trpc";
import { z } from 'zod'
import {
  registerUser,
  loginUser,
  getAllUsers
} from '../../services/authService'

export const authRouter = router({
  health: publicProcedure.query(() => {
    return { status:'ok', timestamp:new Date() }
  }),

  //注册
  registerUser: publicProcedure.input(z.object({
    username:z.string().min(3).max(20),
    password:z.string().min(6)
  }))
  .mutation(async ({ input }) => {
    return await registerUser(input.username,input.password)
  }),

  //登录
  loginUser: publicProcedure.input(z.object({
    username:z.string(),
    password:z.string()
  }))
  .mutation(async ({ input }) => {
    return await loginUser(input.username,input.password)
  }),

  getAllUsers: publicProcedure
    .query(async () => {
      return await getAllUsers()
    })
})